import React, { FC, createElement, AllHTMLAttributes } from 'react'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import styles from './style.module.scss'

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2' | 'h3'
}

const Title: FC<Props> = props => {
  const { tag, className, children, ...resProps } = props
  console.log(tag, className, children, resProps)
  return (
    <Fade bottom>
      <div {...resProps} className={classNames(className, styles.title)}>
        {createElement(`${tag}`, '', children)}
      </div>
    </Fade>
  )
}
export default Title
