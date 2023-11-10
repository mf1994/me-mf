import React, { FC, AllHTMLAttributes } from 'react'
import styles from './style.module.scss'

const Header: FC<AllHTMLAttributes<HTMLDivElement>> = props => {
  const { children } = props
  return (
    <div className={styles.timelineHeader}>
      <span>{children}</span>
    </div>
  )
}

export default Header
