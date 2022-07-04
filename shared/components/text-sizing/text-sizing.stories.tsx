import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../theme'
import { TextSizes } from './text-sizing'
const textStory = {
  title: 'Components/Text/AllTextSizes',
  component: TextSizes,
}
// eslint-disable-next-line import/no-default-export
export default textStory

const Template: ComponentStory<typeof TextSizes> = (args) => (
  <ChakraProvider theme={theme}>
    <TextSizes {...args} />
  </ChakraProvider>
)
export const AllTextSizes = Template.bind({})
