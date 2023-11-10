import React, { FC, AllHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

interface Props extends AllHTMLAttributes<HTMLSpanElement> {
  isDark?: boolean
}

const HighLight: FC<Props> = props => {
  const { isDark, children, className, ...resProps } = props
  const darkStyle = {
    backgroundImage: 'linear-gradient(0deg ,#00ff19,#00fff7 90%)',
  }
  return (
    <span
      {...resProps}
      className={classNames(className, styles.highlight)}
      style={isDark ? darkStyle : undefined}
    >
      {children}
    </span>
  )
}

export default HighLight
