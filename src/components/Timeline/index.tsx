import React, { FC, AllHTMLAttributes } from 'react'

import styles from './style.module.scss'

const Timeline: FC<AllHTMLAttributes<HTMLDivElement>> = props => {
  const { children } = props
  return <div className={styles.timeline}>{children}</div>
}

export default Timeline
