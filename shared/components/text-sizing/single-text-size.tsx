import { Text } from '@chakra-ui/react'
import { TextProps } from './text-sizing'

export const SingleTextSizing: React.FC<TextProps> = ({
  fontSize,
  fontWeight,
}) => {
  return (
    <>
      <Text
        key={fontSize}
        fontWeight={fontWeight || 'bold'}
        fontSize={fontSize || 'Display01'}
      >
        Climate360🌴
      </Text>
    </>
  )
}
