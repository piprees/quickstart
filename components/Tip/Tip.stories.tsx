import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Tip, TipProps } from './Tip'

const config: Meta = {
  title: 'Components/Tip',
  component: Tip,
}

export default config

const Template: Story<TipProps> = (args) => <Tip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Tip',
}
Default.parameters = {
  jest: ['Tip.test.tsx'],
}

export const WithChildren = Template.bind({})
WithChildren.args = {
  label: 'Tip',
  children: <>Hello</>,
}
