import React, { FC } from 'react'
import { Row, Col } from 'antd'
import Fade from 'react-reveal/Fade'
import Paragraph from '../../../components/Paragraph'
import HighLight from '../../../components/HighLight'
import styles from './style.module.scss'
import { toysLottie } from './constants'
import useLottie from '../../../hooks/useLottie'
// import avatar from '../../../assets/images/avatar.webp'

const Profile: FC = () => {
  const toysLottieRef = useLottie(toysLottie)
  return (
    <Row gutter={36} className={styles.profile}>
      <Col span={24} order={3} lg={{ span: 11, order: 1 }} className={styles.detail}>
        <Fade bottom>
          <Paragraph>
            {/* 一个<HighLight>前端工程师</HighLight>，广东佛山 👴。 之前在{' '}
            <HighLight>腾讯 @ 深圳</HighLight>做在线教育的前端，现在在{' '}
            <HighLight>字节跳动 @ 深圳</HighLight>做{' '}
            <a
              href="https://www.capcut.cn/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'pink' }}
            >
              CapCut App
            </a>{' '}
            前端开发。 */}
            8年<HighLight>前端开发经验</HighLight>
            ，在系统工程化、业务性能优化及提高可用性等方面有较丰富的经验；
          </Paragraph>
          {/* <Paragraph>
            高考之后，飞去 <HighLight>东北大学 @ 沈阳</HighLight> 上了 4 年学，毕业之后去{' '}
            <HighLight>加州大学 @ 尔湾分校</HighLight> 读了 2 年研究生。 刷了不少
            LeetCode、掉了不少头发、去过不少地方，感叹过世界之大。
          </Paragraph> */}
        </Fade>
        <Fade bottom>
          <Paragraph>
            {/* 经常天马行空想一些 idea，然后实现出来 🌟。偶尔累了就弹一下吉他 🎸，或者畅游{' '}
            <HighLight>守望先锋</HighLight> 的鱼塘 🎮。
            喜欢好看，酷炫的东西，可能这就是喜欢前端的原因吧 @_@。 喜欢折腾东西，比如
            Vim、五笔打字、魔方...... */}
            技术栈：熟练掌握 <HighLight>JS、H5、CSS3、Vue+Vuex+Vue-router、React、Vue3</HighLight>
            等前端技术栈
          </Paragraph>
          {/* <Paragraph>🐸 冲！</Paragraph> */}
        </Fade>
        <div className={styles.toys} ref={toysLottieRef}></div>
      </Col>
      {/* <Col span={14} order={1} lg={{ span: 7, order: 2 }} className={styles.avatar}>
        <Fade top>
          <img src={avatar} alt="" />
        </Fade>
      </Col>
      <Col span={24} order={2} lg={{ span: 5, order: 3 }} className={styles.name}>
        <p>海</p>
        <p>怪</p>
      </Col> */}
    </Row>
  )
}

export default Profile
