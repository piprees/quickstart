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
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}) => {
  const modeClass = primary ? STYLES_PRIMARY : STYLES_SECONDARY
  const sizeClass =
    size === 'small'
      ? STYLES_SMALL
      : size === 'large'
      ? STYLES_LARGE
      : STYLES_MEDIUM

  const styles = [STYLES_BASE, sizeClass, modeClass].join(' ')

  return (
    <button type="button" className={styles} {...props}>
      {label}
    </button>
  )
}

export default Button
