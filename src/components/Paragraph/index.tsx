import React, { FC, AllHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Paragraph: FC<AllHTMLAttributes<HTMLParagraphElement>> = props => {
  const { children, className } = props
  return <p className={classNames(className, styles.paragraph)}>{children}</p>
}

export default Paragraph
