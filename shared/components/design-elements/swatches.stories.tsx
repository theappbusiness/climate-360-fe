import { ComponentStory } from '@storybook/react'
import { Swatches, SwatchesProps } from './swatches'

const storyDirectory = {
  title: 'Components/Swatch',
  component: Swatches,
}
// eslint-disable-next-line import/no-default-export
export default storyDirectory

const Template: ComponentStory<typeof Swatches> = (props: SwatchesProps) => (
  <Swatches {...props} />
)

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: 'gray.800',
  textColor: 'gray.50',
}
