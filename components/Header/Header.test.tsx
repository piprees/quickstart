import React from 'react'

import { Header } from './Header'

describe('Header', () => {
  it('Should render without an error', () =>
    expect(() => <Header />).not.toThrow())

  it('Should match the snapshot', () => expect(<Header />).toMatchSnapshot())
})
