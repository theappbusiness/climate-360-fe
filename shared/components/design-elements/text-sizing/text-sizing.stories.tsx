import { ChakraProvider, Text, TextProps } from '@chakra-ui/react'
import { theme } from '../../../theme'

const allTextSizes = Object.keys(theme.fontSizes)
const textStory = {
  title: 'Components/Text/AllTextSizes',
}
// eslint-disable-next-line import/no-default-export
export default textStory

const Template = (): TextProps => (
  <ChakraProvider theme={theme}>
    {allTextSizes.map((size) => (
      <Text key={size} fontWeight="bold" fontSize={size}>
        {size}
      </Text>
    ))}
  </ChakraProvider>
)
export const AllTextSizes = Template.bind({})
