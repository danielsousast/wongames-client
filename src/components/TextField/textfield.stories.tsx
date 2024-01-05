import { Meta, StoryObj } from '@storybook/react'
import { TextField } from './textfield'
import { ShoppingCart } from 'styled-icons/material-outlined'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'Label',
    labelFor: 'Field',
    id: 'Field',
    placeholder: 'placeholder',
    disabled: false
  }
} as Meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        placeholder="placeholder"
        disabled
      />
    </div>
  )
}

export const WithIcon: Story = {
  render: () => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        iconPosition="left"
        placeholder="placeholder"
        icon={<ShoppingCart />}
      />
    </div>
  )
}

export const WithError: Story = {
  render: () => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        placeholder="placeholder"
        error="Error message"
        icon={<ShoppingCart />}
      />
    </div>
  )
}
