import React from 'react'

import { Tip, TipProps } from './Tip'

describe('Tip', () => {
  const props: TipProps = {
    label: 'Test Tip',
  }
  it('Should render without an error', () =>
    expect(() => <Tip {...props} />).not.toThrow())

  it('Should match the snapshot', () =>
    expect(<Tip {...props} />).toMatchSnapshot())
})
