import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Col, Row } from 'antd'
import useTypes from '../../hooks/useTypes'
import useLottie from '../../hooks/useLottie'
import { rockLottie, arrowDownLottie } from './constants'
import Fade from 'react-reveal/Fade'

const hobbys = ['聊聊技术lafae。', '吹吹水。', '打打游戏。', '唱唱歌。']
const Home: FC = () => {
  const el = useTypes(hobbys, { loop: true })
  const rockLottieRef = useLottie(rockLottie)
  const arrowDownLottieRef = useLottie(arrowDownLottie)
  return (
    <div className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是海怪</p>
          <p>
            目前在<span className={styles.zijie}>字节</span>
            <span className={styles.tiaodong}>跳动</span>，主用
            <span className={styles.react}>React</span>。
          </p>
          <p>喜欢设计 💅，</p>
          {/* <p>
            拒绝<span className={styles.del}>996</span>和<span className={styles.del}>内卷</span>
          </p> */}
          <p>
            偶尔
            <span className={styles.sometime} ref={el}></span>
          </p>
        </Col>
        <Col span={24} md={9} className={styles.rockWrapper}>
          <Fade bottom>
            <div className={styles.rock}>
              <div ref={rockLottieRef}></div>
            </div>
          </Fade>
        </Col>
        <Col span={24} className={styles.next}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef}></div>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}

export default Home
