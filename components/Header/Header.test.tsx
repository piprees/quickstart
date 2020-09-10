import React from 'react'

import { Header } from './Header'

export const title = 'Unit/Components/Header'

describe(title, () => {
  it('Should render without an error', () =>
    expect(() => <Header />).not.toThrow())

  it('Should match the snapshot', () => expect(<Header />).toMatchSnapshot())
})
