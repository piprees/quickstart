import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LoginBar } from './LoginBar'

const config: Meta = {
  title: 'Components/LoginBar',
  component: LoginBar,
}

export default config

const Template: Story = (args) => <LoginBar {...args} />

export const Default = Template.bind({})
Default.parameters = {
  jest: ['LoginBar.test.tsx'],
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
