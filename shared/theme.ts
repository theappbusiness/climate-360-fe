import { extendTheme } from '@chakra-ui/react'
import { colorToSwatch } from './utils/color-to-swatch'

const colors = {
  quickbooksPrimary: colorToSwatch('#108000'),
  quickbooksSecondary: colorToSwatch('#52BEBE'),
  quickbooksAccounting: colorToSwatch('#53B700'),
  quickbooksPayments: colorToSwatch('#0097E6'),
  quickbooksTimeTracking: colorToSwatch('#FF8000'),
}

export const theme = extendTheme({ colors })

const themeClone: Record<string, unknown> = { ...theme.colors }
delete themeClone.transparent
delete themeClone.current
delete themeClone.black
delete themeClone.white

export const swatchableColors = Object.keys(themeClone)
