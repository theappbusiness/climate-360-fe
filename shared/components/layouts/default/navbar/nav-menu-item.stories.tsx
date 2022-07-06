import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../../../theme'
import { NavMenuItem, NavMenuItemProps } from './nav-menu-item'

const storyDirectory = {
  title: 'Components/Nav/NavMenuItem',
  component: NavMenuItem,
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof NavMenuItem> = (
  props: NavMenuItemProps
) => (
  <ChakraProvider theme={theme}>
    <NavMenuItem {...props} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  children: "I'm a link!",
  to: '/i-go-here',
}
