import { extendTheme } from '@chakra-ui/react'

const colors = {
  gray: {
    '50': '#F2F2F2',
    '100': '#DBDBDB',
    '200': '#C4C4C4',
    '300': '#ADADAD',
    '400': '#969696',
    '500': '#808080',
    '600': '#666666',
    '700': '#4D4D4D',
    '800': '#3D3D3D',
    '900': '#1A1A1A',
  },
  green: {
    '50': '#EBFBEA',
    '100': '#C7F3C3',
    '200': '#A3EC9D',
    '300': '#80E576',
    '400': '#5CDD50',
    '500': '#38D629',
    '600': '#2DAB21',
    '700': '#2AA01F',
    '800': '#165511',
    '900': '#0B2B08',
  },
  quickbooks: {
    '50': '#EBFBEA',
    '100': '#C7F3C3',
    '200': '#A3EC9D',
    '300': '#80E576',
    '400': '#5CDD50',
    '500': '#2AA01F',
    '600': '#23891A',
    '700': '#1f7817',
    '800': '#1b6714',
    '900': '#12450d',
  },
}

export const theme = extendTheme({ colors })

const themeClone: Record<string, unknown> = { ...theme.colors }
delete themeClone.transparent
delete themeClone.current
delete themeClone.black
delete themeClone.white

export const swatchableColors = Object.keys(themeClone)