import { Text } from '@chakra-ui/react'
import { allTextSizes } from '../../theme'

export interface TextProps {
  fontSize: string
  fontWeight: string
}

export const TextSizes: React.FC<TextProps> = ({ fontSize, fontWeight }) => {
  return (
    <>
      {allTextSizes.map((size) => (
        <Text
          key={size}
          fontWeight={fontWeight || 'bold'}
          fontSize={fontSize || size}
        >
          {size}
        </Text>
      ))}
    </>
  )
}
