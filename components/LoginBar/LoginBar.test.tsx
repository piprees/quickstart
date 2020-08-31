import React from 'react'

import { LoginBar } from './LoginBar'

describe('LoginBar', () => {
  it('Should render without an error', () =>
    expect(() => <LoginBar />).not.toThrow())

  it('Should match the snapshot', () => expect(<LoginBar />).toMatchSnapshot())
})
