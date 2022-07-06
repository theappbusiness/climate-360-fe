import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../shared/theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

const withThemeProvider = (Story) => {
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
}
export const decorators = [withThemeProvider]
