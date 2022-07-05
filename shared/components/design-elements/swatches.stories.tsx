import { ChakraProvider } from '@chakra-ui/react'
import { ComponentStory } from '@storybook/react'
import { theme } from '../../theme'
import { Swatches, SwatchesProps } from './swatches'

const storyDirectory = {
  title: 'Components/Swatch',
  component: Swatches,
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof Swatches> = (props: SwatchesProps) => (
  <ChakraProvider theme={theme}>
    <Swatches {...props} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: 'gray.800',
  textColor: 'gray.50',
}
