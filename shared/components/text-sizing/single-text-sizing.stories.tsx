import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { allTextSizes, theme } from '../../theme'
import { SingleTextSizing } from './single-text-size'

const singleText = {
  title: 'Components/Text/SingleText',
  component: SingleTextSizing,
  argTypes: {
    fontSize: { control: 'select', options: allTextSizes },
    fontWeight: {
      control: 'select',
      options: [
        'bold',
        'black',
        'normal',
        'light',
        'extrabold',
        'semibold',
        'thin',
        'medium',
        'hairline',
      ],
    },
  },
}
// eslint-disable-next-line import/no-default-export
export default singleText

const Template: ComponentStory<typeof SingleTextSizing> = (args) => (
  <ChakraProvider theme={theme}>
    <SingleTextSizing {...args} />
  </ChakraProvider>
)
export const SingleText = Template.bind({})
