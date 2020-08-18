import React from 'react'

import { Button, ButtonProps } from './Button'

describe('Button', () => {
  const props: ButtonProps = {
    label: 'Test Button',
  }
  it('Should render without an error', () =>
    expect(() => <Button {...props} />).not.toThrow())

  it('Should match the snapshot', () =>
    expect(<Button {...props} />).toMatchSnapshot())
})
