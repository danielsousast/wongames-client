import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white'
  }
} as Meta

export const Black: StoryObj = {
  args: {
    color: 'black'
  }
}

export const White: StoryObj = {
  args: {
    color: 'white'
  }
}
