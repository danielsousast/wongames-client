import { Meta, StoryObj } from '@storybook/react'
import { GameCardSlider } from '.'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider
} as Meta

type Story = StoryObj<typeof GameCardSlider>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={items} />
    </div>
  )
}
