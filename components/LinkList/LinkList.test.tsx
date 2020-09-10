import React from 'react'

import { LinkList } from './LinkList'

export const title = 'Unit/Components/LinkList'

const LinkListProps = {
  links: [
    {
      href: 'https://nextjs.org/docs/routing/introduction',
      title: 'File system routing with Next.js',
      description: "Learn the basics of Next.js's file-based routing system",
    },
  ],
}
describe(title, () => {
  it('Should render without an error', () =>
    expect(() => <LinkList {...LinkListProps} />).not.toThrow())

  it('Should match the snapshot', () =>
    expect(<LinkList {...LinkListProps} />).toMatchSnapshot())
})
