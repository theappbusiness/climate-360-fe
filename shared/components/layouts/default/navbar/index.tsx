import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { navbarHeight } from './constants'
import { NavMenu } from './nav-menu'
import { NavMenuToggle } from './nav-menu-toggle'

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleMenuToggle = (): void => setIsMenuOpen((s) => !s)

  return (
    <Flex
      as="nav"
      backdropFilter={'blur(4px)'}
      align="center"
      backgroundColor={{
        base: 'quickbooksPrimary.500',
        md: 'transparent',
      }}
      bgGradient={{
        base: '',
        md: 'linear(whiteAlpha.900, whiteAlpha.50)',
      }}
      position={'fixed'}
      w={'full'}
      minH={navbarHeight}
      px={'4'}
      justifyContent={'space-between'}
      wrap={'wrap'}
    >
      <Text
        fontSize={'Headline05'}
        fontWeight={'bold'}
        color={{ base: 'white', md: 'chakra-body-text' }}
      >
        Climate 360
      </Text>
      <NavMenuToggle onClick={handleMenuToggle} isOpen={isMenuOpen} />
      <NavMenu
        items={[
          { name: 'Learn', to: '/learn' },
          { name: 'Carbon footprint', to: '/calculate-co2' },
          { name: 'Get help', to: 'help' },
        ]}
        isOpen={isMenuOpen}
      />
    </Flex>
  )
}
