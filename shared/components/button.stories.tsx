import { ButtonProps, ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { swatchableColors, theme } from '../theme'
import { Button } from './button'

const storyDirectory = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: swatchableColors,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'link', 'unstyled', 'ghost'],
      },
    },
  },
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof Button> = (props: ButtonProps) => (
  <ChakraProvider theme={theme}>
    <Button {...props} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Nice button 😉',
  variant: 'solid',
}
