import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Col, Row } from 'antd'
import useTypes from '../../hooks/useTypes'
import useLottie from '../../hooks/useLottie'
import { rockLottie, arrowDownLottie } from './constants'
import classNames from 'classnames'
import Fade from 'react-reveal/Fade'

const hobbys = ['企业微信应用开发', '微信公众号开发', '微信小程序开发']
const Home: FC = () => {
  const el = useTypes(hobbys, { loop: true })
  const rockLottieRef = useLottie(rockLottie)
  const arrowDownLottieRef = useLottie(arrowDownLottie)

  const next = () => {
    const $about = document.querySelector('#about')
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是梅凡</p>
          <p>
            目前就职于<span className={styles.zijie}>中建新疆建工</span>
            <span className={styles.tiaodong}>华南公司</span>
            {/* 在
            <span>系统工程化、业务性能优化及提高可用性</span>
            等方面有较丰富的经验。 */}
          </p>
          {/* <p>喜欢设计 💅，</p> */}
          {/* <p>
            拒绝<span className={styles.del}>996</span>和<span className={styles.del}>内卷</span>
          </p> */}
          <p>
            熟练掌握
            <span className={classNames(styles.sometime, styles.react)} ref={el}></span>
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
              <div ref={arrowDownLottieRef} onClick={next}></div>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}

export default Home
