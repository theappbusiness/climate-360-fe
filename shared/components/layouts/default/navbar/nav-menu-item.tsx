import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface NavMenuItemProps {
  children: React.ReactNode
  to: string
}
export const NavMenuItem: React.FC<NavMenuItemProps> = ({ children, to }) => {
  return (
    <NextLink href={to} passHref>
      <Link>{children}</Link>
    </NextLink>
  )
}
