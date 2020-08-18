import React from 'react'

import { Header, HeaderProps } from './Header'

describe('Header', () => {
  const props: HeaderProps = {
    onLogin: () => undefined,
    onLogout: () => undefined,
    onCreateAccount: () => undefined,
  }

  it('Should render without an error', () =>
    expect(() => <Header {...props} />).not.toThrow())

  it('Should match the snapshot', () =>
    expect(<Header {...props} />).toMatchSnapshot())
})
