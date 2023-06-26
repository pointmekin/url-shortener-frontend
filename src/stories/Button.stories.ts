import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      defaultValue: 'primary',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
}
