import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../shared/theme'
import { ActionsProvider } from '../shared/contexts/actionsContext'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <ActionsProvider actions={pageProps.actions || []}>
        <Component {...pageProps} />
      </ActionsProvider>
    </ChakraProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default MyApp
