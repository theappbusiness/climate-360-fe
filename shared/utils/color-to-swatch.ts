interface RGBColor {
  r: number
  g: number
  b: number
}

interface HSLColor {
  h: number
  s: number
  l: number
}

interface Swatch {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
}

const hexToRGB = (hex: string): RGBColor => {
  const [, rHex, gHex, bHex] =
    hex.match(/#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i) || []
  if (!rHex || !gHex || !bHex)
    throw new Error('Invalid hex color passed to hexToRBG')
  return {
    r: parseInt(rHex, 16),
    g: parseInt(gHex, 16),
    b: parseInt(bHex, 16),
  }
}

const normalisePrimary = (primaryColor: number): number => primaryColor / 255
const normaliseRGBColor = ({ r, g, b }: RGBColor): RGBColor => {
  return {
    r: normalisePrimary(r),
    g: normalisePrimary(g),
    b: normalisePrimary(b),
  }
}

const findMaxPrimary = (color: RGBColor): [string, number] => {
  const invertedColorObj = Object.entries(color).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      return { ...acc, [value]: key }
    },
    {}
  )

  const maxValue = Math.max(...(Object.values(color) as number[]))

  return [invertedColorObj[maxValue], maxValue]
}

const findMinPrimary = (color: RGBColor): [string, number] => {
  const invertedColorObj = Object.entries(color).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      return { ...acc, [value]: key }
    },
    {}
  )

  const minValue = Math.min(...(Object.values(color) as number[]))

  return [invertedColorObj[minValue], minValue]
}

const mod = (numerator: number, denominator: number): number =>
  ((numerator % denominator) + denominator) % denominator

const calculateHue = (
  { r, g, b }: RGBColor,
  [maxPrimary]: [string, number],
  deltaMinMax: number
): number => {
  if (deltaMinMax === 0) {
    return 0
  }

  switch (maxPrimary) {
    case 'r':
      return mod(60 * ((g - b) / deltaMinMax), 360)
    case 'g':
      return 60 * ((b - r) / deltaMinMax + 2)
    case 'b':
      return 60 * ((r - g) / deltaMinMax + 4)
    default:
      throw new Error('Max primary color could not be identified')
  }
}

const calculateLuminosity = (
  [, minPrimary]: [string, number],
  [, maxPrimary]: [string, number]
): number => {
  return (minPrimary + maxPrimary) / 2
}

const calculateSaturation = (
  deltaMinMax: number,
  luminosity: number
): number => {
  if (deltaMinMax === 0) {
    return 0
  }

  return deltaMinMax / (1 - Math.abs(2 * luminosity - 1))
}

export const rgbToHsl = (rgbColor: RGBColor): HSLColor => {
  const normalisedRGBColor = normaliseRGBColor(rgbColor)
  const maxPrimary = findMaxPrimary(normalisedRGBColor)
  const minPrimary = findMinPrimary(normalisedRGBColor)
  const deltaMinMax = maxPrimary[1] - minPrimary[1]

  const hue = calculateHue(normalisedRGBColor, maxPrimary, deltaMinMax)
  const luminosity = calculateLuminosity(minPrimary, maxPrimary)
  const saturation = calculateSaturation(deltaMinMax, luminosity)

  return {
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    l: Math.round(luminosity * 100),
  }
}

export const colorToSwatch = (hexColor: string): Swatch => {
  const { h, s, l } = rgbToHsl(hexToRGB(hexColor))

  const darkStep = (l - 10) / 4
  const lightStep = (95 - l) / 5

  const swatch: Swatch = {
    '50': '',
    '100': '',
    '200': '',
    '300': '',
    '400': '',
    '500': '',
    '600': '',
    '700': '',
    '800': '',
    '900': '',
  }

  for (let i = 0; i < 5; i++) {
    const key = Object.keys(swatch)[i] as keyof Swatch
    swatch[key] = `hsl(${h}, ${s}%, ${95 - i * lightStep}%)`
  }
  swatch['500'] = `hsl(${h}, ${s}%, ${l}%)`
  for (let i = 9; i > 5; i--) {
    const key = Object.keys(swatch)[i] as keyof Swatch
    swatch[key] = `hsl(${h}, ${s}%, ${10 + (9 - i) * darkStep}%)`
  }

  return swatch
}
