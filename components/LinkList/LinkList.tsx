import React from 'react'

import ErrorBoundary from '../../util/ErrorBoundary'
import Styles from './LinkList.module.css'

export interface LinkListItem {
  /** The url of the link */
  href: string
  /** The title of the link */
  title: string
  /** The text description of the link */
  description: string
}

export interface LinkListProps {
  /** The collection of links to display */
  links: LinkListItem[]
}

export function LinkList({ links }: LinkListProps): JSX.Element {
  return (
    <ErrorBoundary>
      <div className={Styles.LinkList}>
        {links.map(({ href, title, description }) => (
          <a className={Styles.LinkItem} href={href} key={title}>
            <span>
              <strong>{title}</strong>
              {description}
            </span>
          </a>
        ))}
      </div>
    </ErrorBoundary>
  )
}

export default LinkList
