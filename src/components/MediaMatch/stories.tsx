import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

const meta: Meta<typeof MediaMatch> = {
  component: MediaMatch
}

export default meta
type Story = StoryObj<typeof MediaMatch>

export const Desktop: Story = {
  args: {
    $greaterThan: 'medium',
    children: <h1>Desktop</h1>
  }
}

export const Mobile: Story = {
  args: {
    $lessThan: 'medium',
    children: <h1>Mobile</h1>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
