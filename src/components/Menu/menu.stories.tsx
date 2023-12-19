import { Meta, StoryObj } from '@storybook/react'
import { Menu } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {
    username: 'John Doe'
  }
}

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
