import React, { FC, ButtonHTMLAttributes } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean
  bg?: string
}

const Button: FC<Props> = props => {
  const { children, className } = props
  return (
    <button className={classNames(className, styles.button)}>
      <span>{children}</span>
    </button>
  )
}

export default Button
