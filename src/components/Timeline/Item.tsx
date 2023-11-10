import React, { FC, ReactNode, useMemo } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import Paragraph from '../Paragraph'
import { detectMobile } from '../../utils'

interface Props {
  direction?: 'left' | 'right'
  node?: ReactNode
  time?: string | string[]
  header?: string | (string | ReactNode)[]
  content?: string | (string | ReactNode)[]
}

const isMobile = detectMobile()

const Item: FC<Props> = props => {
  const { direction = 'left', node, time, header, content } = props
  const times = useMemo(() => (Array.isArray(time) ? time : [time]), [time])
  const headers = useMemo(() => (Array.isArray(header) ? header : [header]), [header])
  const contents = useMemo(() => (Array.isArray(content) ? content : [content]), [content])
  return (
    <div
      className={classNames(styles.timelineItem, direction === 'left' ? styles.left : styles.right)}
    >
      <div className={styles.node}>{node || <div className={styles.defaultNode}></div>}</div>
      <Fade
        bottom={isMobile}
        left={!isMobile && direction === 'left'}
        right={!isMobile && direction === 'right'}
      >
        <div
          className={classNames(styles.content, direction === 'left' ? styles.left : styles.right)}
        >
          {times &&
            times.map(timeItem => (
              <Paragraph key={timeItem} className={styles.time}>
                {timeItem}
              </Paragraph>
            ))}
          {headers &&
            headers.map(headerItem => (
              <Paragraph key={headerItem ? headerItem.toString() : 0} className={styles.header}>
                {headerItem}
              </Paragraph>
            ))}
          {contents &&
            contents.map(contentItem => (
              <Paragraph key={contentItem ? contentItem.toString() : 0} className={styles.subtext}>
                {contentItem}
              </Paragraph>
            ))}
        </div>
      </Fade>
    </div>
  )
}

export default Item
