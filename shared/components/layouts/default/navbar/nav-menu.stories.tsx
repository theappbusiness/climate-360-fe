import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../../../theme'
import { NavMenu, NavMenuProps } from './nav-menu'

const storyDirectory = {
  title: 'Components/Nav/NavMenu',
  component: NavMenu,
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof NavMenu> = (props: NavMenuProps) => (
  <ChakraProvider theme={theme}>
    <NavMenu {...props} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    {
      name: 'links',
      to: '/to',
    },
    {
      name: 'to',
      to: '/to',
    },
    {
      name: 'places',
      to: '/places',
    },
  ],
}
