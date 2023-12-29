import { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from '.'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider items={items} />
    </div>
  )
}
