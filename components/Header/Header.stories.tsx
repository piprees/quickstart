import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Header } from './Header'

const config: Meta = {
  title: 'Components/Header',
  component: Header,
}

export default config

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.parameters = {
  jest: ['Header.test.tsx'],
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
