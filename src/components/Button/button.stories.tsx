import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'
import React from 'react'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Button',
    size: 'medium'
  }
}

export const OnlyIcon: StoryObj = {
  args: {
    children: null,
    size: 'small',
    icon: <AddShoppingCart />
  }
}

export const IconAndText: StoryObj = {
  args: {
    children: 'Button',
    size: 'small',
    icon: <AddShoppingCart />
  }
}

export const AsLink: StoryObj = {
  args: {
    children: 'Button',
    size: 'large',
    as: 'a',
    href: '/link'
  }
}
