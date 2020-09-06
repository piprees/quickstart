import fixHref from 'next-translate/fixHref'
import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import {
  STYLES_BASE,
  STYLES_DISABLED,
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
  ...props
}: ButtonProps): JSX.Element {
  const { lang } = useTranslation()
  const modeClass = disabled
    ? STYLES_DISABLED
    : primary
    ? STYLES_PRIMARY
    : STYLES_SECONDARY

  const sizeClass =
    size === 'small'
      ? STYLES_SMALL
      : size === 'large'
      ? STYLES_LARGE
      : STYLES_MEDIUM

  const styles = [STYLES_BASE, sizeClass, modeClass].join(' ')

  if (disabled) {
    return (
      <button {...props} type="button" disabled className={styles}>
        {label}
      </button>
    )
  }

  if (typeof href === 'string' && href.length > 0) {
    const languageFixedHref = fixHref(href, lang)
    if (href.startsWith('/'))
      return (
        <Link href={languageFixedHref}>
          <a {...props} href={languageFixedHref} className={styles}>
            {label}
          </a>
        </Link>
      )

    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={styles}
      >
        {label}
      </a>
    )
  }

  return (
    <button {...props} type="button" className={styles} onClick={onClick}>
      {label}
    </button>
  )
}
