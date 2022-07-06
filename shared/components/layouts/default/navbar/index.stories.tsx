import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../../../theme'
import { Navbar } from './'

const storyDirectory = {
  title: 'Components/Nav',
  component: Navbar,
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof Navbar> = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
  </ChakraProvider>
)

export const Primary = Template.bind({})
Primary.args = {}
