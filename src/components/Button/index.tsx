import React, { FC, useState, ButtonHTMLAttributes, CSSProperties } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean
  bg?: string
}

const Button: FC<Props> = props => {
  const { children, className, bg } = props
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({
    background: bg,
    borderColor: bg,
  })
  return (
    <button className={classNames(className, styles.button)} style={buttonStyle}>
      <span>{children}</span>
    </button>
  )
}

export default Button
