import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../../../theme'
import { NavMenuToggle, NavMenuToggleProps } from './nav-menu-toggle'

const storyDirectory = {
  title: 'Components/Nav/NavMenuToggle',
  component: NavMenuToggle,
  argTypes: { onClick: { action: 'clicked' } },
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof NavMenuToggle> = (
  props: NavMenuToggleProps
) => (
  <ChakraProvider theme={theme}>
    <NavMenuToggle {...props} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
