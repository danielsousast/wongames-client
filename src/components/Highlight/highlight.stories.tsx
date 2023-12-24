import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {}

export const WithAlignmentLeft: Story = {
  args: {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png',
    alignment: 'left'
  }
}

Default.args = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
}
