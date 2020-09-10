import React, { ReactNode } from 'react'

import Styles from './Tip.module.css'

export interface TipProps {
  /**
   * Give the tip a label
   */
  label: string
  /**
   * The content to show inside the tip
   */
  children?: ReactNode
}

export function Tip({ label, children }: TipProps): JSX.Element {
  return (
    <div className={Styles.TipWrapper}>
      <span className={Styles.Tip}>{label}</span> {children}
    </div>
  )
}
