import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavMenuItem } from './nav-menu-item'

export interface NavMenuProps {
  items: { name: string; to: string }[]
  isOpen: boolean
}
export const NavMenu: React.FC<NavMenuProps> = ({ items, isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={{ base: 'center', sm: 'space-between', md: 'flex-end' }}
        direction={{ base: 'column', sm: 'row' }}
        pt={[4, 4, 0, 0]}
      >
        {items.map(({ name, to }) => {
          return (
            <NavMenuItem key={to} to={to}>
              {name}
            </NavMenuItem>
          )
        })}
      </Stack>
    </Box>
  )
}
