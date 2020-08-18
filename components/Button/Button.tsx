import React from 'react'

import Styles from './Button.module.css'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
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
  size = 'Medium',
  backgroundColor,
  label,
  ...props
}) => {
  const modeClass = primary ? Styles.Primary : Styles.Secondary
  const sizeClass =
    size === 'small'
      ? Styles.Small
      : size === 'large'
      ? Styles.Large
      : Styles.Medium

  return (
    <button
      type="button"
      className={[Styles.Button, sizeClass, modeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
