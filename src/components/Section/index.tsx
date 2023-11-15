import React, { FC, AllHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Section: FC<AllHTMLAttributes<HTMLElement>> = props => {
  const { children, className, ...resProps } = props
  return (
    <div {...resProps} className={classNames(className, styles.section)}>
      {children}
    </div>
  )
}

export default Section
