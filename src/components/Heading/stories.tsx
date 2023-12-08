import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {}

Default.args = {
  children: 'Most Populars'
}
