import { Box } from '@chakra-ui/react'
import { navbarHeight } from './navbar/constants'
import { Navbar } from './navbar'

export const withDefaultLayout = <Props extends object>(
  Component: React.ComponentType<Props>
): React.FC<Props> => {
  const wrapped: React.FC<Props> = ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Box pt={navbarHeight}>
          <Component {...props} />
        </Box>
      </>
    )
  }
  return wrapped
}
