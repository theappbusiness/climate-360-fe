import { extendTheme } from '@chakra-ui/react'
import { colorToSwatch } from './utils/color-to-swatch'

const colors = {
  quickbooksPrimary: colorToSwatch('#108000'),
  quickbooksSecondary: colorToSwatch('#52BEBE'),
  quickbooksAccounting: colorToSwatch('#53B700'),
  quickbooksPayments: colorToSwatch('#0097E6'),
  quickbooksTimeTracking: colorToSwatch('#FF8000'),
}

const fontSizes = {
  Display01: '84px',
  Display02: '72px',
  Display03: '60px',
  Headline01: '48px',
  Headline02: '40px',
  Headline03: '34px',
  Headline04: '28px',
  Headline05: '24px',
  Headline06: '20px',
  Body01: '20px',
  Body02: '16px',
  Body03: '14px',
  Body04: '12px',
}

export const theme = extendTheme({ colors, fontSizes })

const themeClone: Record<string, unknown> = { ...theme.colors }
delete themeClone.transparent
delete themeClone.current
delete themeClone.black
delete themeClone.white
export const swatchableColors = Object.keys(themeClone)
