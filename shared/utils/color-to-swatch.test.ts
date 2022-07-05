import { colorToSwatch, rgbToHsl } from './color-to-swatch'

describe('rgbToHsl', () => {
  it('converts black to HSL', () => {
    const hsl = rgbToHsl({ r: 0, g: 0, b: 0 })

    expect(hsl).toEqual({ h: 0, s: 0, l: 0 })
  })

  it('converts white to HSL', () => {
    const hsl = rgbToHsl({ r: 255, g: 255, b: 255 })

    expect(hsl).toEqual({ h: 0, s: 0, l: 100 })
  })

  it('converts grey to HSL', () => {
    const hsl = rgbToHsl({ r: 127, g: 127, b: 127 })

    expect(hsl).toEqual({ h: 0, s: 0, l: 50 })
  })

  it('converts teal to HSL', () => {
    const hsl = rgbToHsl({ r: 38, g: 191, b: 150 })

    expect(hsl).toEqual({ h: 164, s: 67, l: 45 })
  })

  it('converts blue to HSL', () => {
    const hsl = rgbToHsl({ r: 17, g: 137, b: 217 })

    expect(hsl).toEqual({ h: 204, s: 85, l: 46 })
  })

  it('converts chalky purple to HSL', () => {
    const hsl = rgbToHsl({ r: 153, g: 125, b: 189 })

    expect(hsl).toEqual({ h: 266, s: 33, l: 62 })
  })

  it('converts hot pink to HSL', () => {
    const hsl = rgbToHsl({ r: 240, g: 7, b: 147 })

    expect(hsl).toEqual({ h: 324, s: 94, l: 48 })
  })

  it('converts blood red to HSL', () => {
    const hsl = rgbToHsl({ r: 163, g: 11, b: 11 })

    expect(hsl).toEqual({ h: 0, s: 87, l: 34 })
  })

  it('converts lurid yellow to HSL', () => {
    const hsl = rgbToHsl({ r: 227, g: 252, b: 3 })

    expect(hsl).toEqual({ h: 66, s: 98, l: 50 })
  })

  it('converts snot green to HSL', () => {
    const hsl = rgbToHsl({ r: 65, g: 214, b: 11 })

    expect(hsl).toEqual({ h: 104, s: 90, l: 44 })
  })
})

describe('colorToSwatch', () => {
  it('creates a swatch given an rgb color', () => {
    const swatch = colorToSwatch('#34eb93')
    expect(swatch).toEqual({
      '50': 'hsl(151, 82%, 95%)',
      '100': 'hsl(151, 82%, 87.2%)',
      '200': 'hsl(151, 82%, 79.4%)',
      '300': 'hsl(151, 82%, 71.6%)',
      '400': 'hsl(151, 82%, 63.8%)',
      '500': 'hsl(151, 82%, 56%)',
      '600': 'hsl(151, 82%, 44.5%)',
      '700': 'hsl(151, 82%, 33%)',
      '800': 'hsl(151, 82%, 21.5%)',
      '900': 'hsl(151, 82%, 10%)',
    })
  })
})
