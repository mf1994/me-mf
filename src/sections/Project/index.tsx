import React, { FC } from 'react'
import styles from './style.module.scss'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Masonry from 'react-masonry-css'
import { projects } from './constant'
import Item from './Item'

const Project: FC = () => {
  return (
    <Section id="project" className={styles.project}>
      <Title tag="h2">个人项目</Title>
      {/* <Title tag="h3">超多好玩、沙雕的项目</Title> */}
      <Masonry
        breakpointCols={{ default: 3, 992: 2, 786: 1 }}
        className={styles.projectList}
        columnClassName={styles.projectListColumn}
      >
        {projects.map(project => (
          <Item {...project} key={project.logo}></Item>
        ))}
        {/* <Title className={styles.footerTitle} tag="h3">
          😋 更多好玩，有趣的项目（和 <i>文章</i> ）正在路上 🕑
        </Title> */}
      </Masonry>
    </Section>
  )
}

export default Project
