import React, { FC } from 'react'
import Title from '../../components/Title'
import styles from './styles.module.scss'
import Profile from './Profile'
import Life from './Life'
import Fade from 'react-reveal/Fade'
import Paragraph from '../../components/Paragraph'
import HighLight from '../../components/HighLight'
import Button from '../../components/Button'

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Title tag="h2">关于</Title>
      <Title tag="h3">
        哈喽，我是海怪 👻
        <br />
        聊聊我自己
      </Title>
      <Profile></Profile>
      <Life></Life>
      <Fade bottom>
        <Paragraph className={styles.goal}>
          喜欢 <HighLight>写代码</HighLight>， 并不是为了做一个 🐂 🍺 的项目
          <br />
          而是可以把那些好玩的想法实现出来 👉{' '}
          <span className={styles.justForFun}>Just for fun ~</span>
        </Paragraph>
      </Fade>
      {/* <Fade bottom>
        <div className={styles.buttonwrapper}>
          <Button className={styles.pulse}>我的简历</Button>
        </div>
      </Fade> */}
    </div>
  )
}

export default About
