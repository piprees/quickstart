import React from 'react'

import { LoginBar } from './LoginBar'

export const title = 'Unit/Components/LoginBar'

describe(title, () => {
  it('Should render without an error', () =>
    expect(() => <LoginBar />).not.toThrow())

  it('Should match the snapshot', () => expect(<LoginBar />).toMatchSnapshot())
})
