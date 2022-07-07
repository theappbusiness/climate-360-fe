import { Button } from '@chakra-ui/react'

export interface NavMenuToggleProps {
  onClick: () => void
  isOpen: boolean
}
export const NavMenuToggle: React.FC<NavMenuToggleProps> = ({
  onClick,
  isOpen,
}) => {
  return (
    <Button display={{ base: 'block', md: 'none' }} onClick={onClick}>
      {isOpen ? '❌' : '🍔'}
    </Button>
  )
}
