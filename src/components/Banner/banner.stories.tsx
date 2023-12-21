import { Meta, StoryObj } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  render: (args) => <Banner {...args} />
}