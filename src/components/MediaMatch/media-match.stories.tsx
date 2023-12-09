import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {}
} as Meta

export const Desktop: StoryObj = {
  args: {
    $greaterThan: 'medium',
    children: <h1>Desktop</h1>
  }
}

export const Mobile: StoryObj = {
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
