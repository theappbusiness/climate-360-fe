import { ChakraProvider, Text, TextProps } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../../theme'
const allFontWeights = Object.keys(theme.fontWeights)
const allTextSizes = Object.keys(theme.fontSizes)

const singleText = {
  title: 'Components/Text/SingleText',
  argTypes: {
    fontSize: { control: 'select', options: allTextSizes },
    fontWeight: {
      control: { type: 'select' },
      options: allFontWeights,
    },
  },
}

// eslint-disable-next-line import/no-default-export
export default singleText

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <ChakraProvider theme={theme}>
    <Text {...args}>Climate360🌴</Text>
  </ChakraProvider>
)
export const SingleText = Template.bind({})

SingleText.args = {
  fontSize: 'Display01',
  fontWeight: 'bold',
}
