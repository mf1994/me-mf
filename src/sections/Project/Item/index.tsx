import React, { FC, ReactNode } from 'react'
import Fade from 'react-reveal/Fade'
import { Tooltip } from 'antd'

import styles from './style.module.scss'

interface Image {
  image: string
  content: string
}

export type ProjectItem = {
  logo?: string
  title?: string
  badges?: string[]
  content?: string | ReactNode
  description?: string | ReactNode
  links?: Image[]
  techUsed?: Image[]
}

const ProjectItem: FC<ProjectItem> = props => {
  const { title, content, description, links, techUsed } = props
  return (
    <div className={styles.item}>
      <Fade>
        <div className={styles.container}>
          {/* {logo && <img src={logo} className={styles.logo}></img>} */}
          {title && <h4 className={styles.title}>{title}</h4>}
          {/* {badges && (
            <div className={styles.badges}>
              {badges.map(b => (
                <img key={b} src={b} />
              ))}
            </div>
          )} */}
          {content && <div className={styles.content}>{content}</div>}
          {description && <div className={styles.description}>{description}</div>}
          {links && (
            <div className={styles.links}>
              {links.map(l => (
                <a key={l.image} href={l.content} target="_blank" rel="noreferrer">
                  <img src={l.image} />
                </a>
              ))}
            </div>
          )}
          {techUsed && (
            <div className={styles.techUsed}>
              <h4>技术栈</h4>
              <ul>
                {techUsed.map((tech, index) => (
                  <li key={tech.content} style={{ animationDelay: `${index * 300}ms` }}>
                    <Tooltip placement="top" title={tech.content} color="black">
                      <img src={tech.image} alt="" />
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Fade>
    </div>
  )
}

export default ProjectItem
