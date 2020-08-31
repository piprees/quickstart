import Link from 'next/link'
import React from 'react'

import {
  STYLES_BASE,
  STYLES_LARGE,
  STYLES_MEDIUM,
  STYLES_PRIMARY,
  STYLES_SECONDARY,
  STYLES_SMALL,
} from './constants'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * Is this button currently disabled
   */
  disabled?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional click handler
   */
  href?: string
}

/**
 * Primary UI component for user interaction
 */
export function Button({
  primary = false,
  disabled = false,
  size = 'medium',
  label,
  href,
  onClick,
}: ButtonProps): JSX.Element {
  const modeClass = primary ? STYLES_PRIMARY : STYLES_SECONDARY
  const sizeClass =
    size === 'small'
      ? STYLES_SMALL
      : size === 'large'
      ? STYLES_LARGE
      : STYLES_MEDIUM

  const styles = [STYLES_BASE, sizeClass, modeClass].join(' ')

  if (disabled) {
    return (
      <button type="button" disabled className={styles}>
        {label}
      </button>
    )
  }

  if (typeof href === 'string' && href.length > 0) {
    return (
      <Link href={href}>
        <a className={styles} href={href}>
          {label}
        </a>
      </Link>
    )
  }

  return (
    <button type="button" className={styles} onClick={onClick}>
      {label}
    </button>
  )
}
