import React, { FC } from 'react'
import Timeline from '../../../components/Timeline'
import TimelineHeader from '../../../components/Timeline/Header'
import TimelineItem from '../../../components/Timeline/Item'
import styles from './style.module.scss'
import useTypes from '../../../hooks/useTypes'

import uci from '../../../assets/icons/uci.jpg'
import neu from '../../../assets/icons/neu.png'
import dji from '../../../assets/icons/dji.png'
import tencent from '../../../assets/icons/tencent.png'
import bytedance from '../../../assets/icons/bytedance.png'
import HighLight from '../../../components/HighLight'

const strings = ['码农', '社畜', '打工人', '程序员', '工程师', '前端开发']

const Life: FC = () => {
  const el = useTypes(strings, { loop: true })
  return (
    <Timeline>
      <TimelineHeader>1996</TimelineHeader>
      <TimelineItem direction="right" time="6月" header="👶🏻"></TimelineItem>
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem header="🙇‍♂️ 好好学习..." />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="6月"
        header={['🎓 本科毕业 🎉']}
        node={
          <span>
            <img src={neu} width={46} alt="" />
          </span>
        }
        content={[
          '沈阳，辽宁',
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>东北大学</HighLight> @ 软件工程（英语国际）
          </span>,
          '最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！',
        ]}
      ></TimelineItem>
      <TimelineItem
        time={['9月', '10月']}
        node={
          <span className={styles.customNode}>
            <img width={34} src={uci} alt="neu" />
          </span>
        }
        header={[
          '✈️ 美国',
          // eslint-disable-next-line react/jsx-key
          <span>
            研究生入学 <HighLight>UCI</HighLight>
          </span>,
        ]}
        content={['刷题，刷题，刷题... 面经，面经，面经...']}
      />
      <TimelineHeader>2019</TimelineHeader>
      <TimelineItem
        node={
          <span className={styles.customNode}>
            <img width={30} src={dji} alt="dji" />
          </span>
        }
        direction="right"
        time="6月"
        header={[
          '🚗 一路向北去 Palo Alto',
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>DJI</HighLight> 实习 @ Frontend Engineer
          </span>,
        ]}
      />
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        time="3月"
        header={['🎓 研究生毕业 🎉']}
        content={[
          '美国，加州，尔湾',
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>University of California, Irvine</HighLight> @ Computer Science
          </span>,
        ]}
      />
      <TimelineItem
        direction="right"
        node={<span className={styles.customNode}>🇨🇳</span>}
        time="5月"
        header={['回国 🛬，隔离 😷，见家人 👨‍👩‍👦']}
      />
      <TimelineItem
        time="7月"
        node={
          <span className={styles.customNode}>
            <img width={30} src={tencent} alt="tencent" />
          </span>
        }
        header={[
          '深圳，广东',
          // eslint-disable-next-line react/jsx-key
          <span className={styles.position}>
            入职 <HighLight>腾讯</HighLight> 🐧 @ <span className={styles.typed} ref={el} />
          </span>,
        ]}
      />
      <TimelineHeader>2022</TimelineHeader>
      <TimelineItem
        direction="right"
        node={
          <span className={styles.customNode}>
            <img width={30} src={bytedance} alt="bytdance" />
          </span>
        }
        time="10月"
        header={[
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>字节跳动</HighLight> @ 跨端开发
          </span>,
        ]}
        content={['CapCut App 🎬（海外版剪映）', 'Lynx 开发']}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem direction="left" header={['？？？']} />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  )
}

export default Life
