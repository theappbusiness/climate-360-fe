import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton {...props} borderRadius="base" fontWeight="semibold">
      {children}
    </ChakraButton>
  )
}
