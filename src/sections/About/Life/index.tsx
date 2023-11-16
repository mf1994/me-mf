import React, { FC } from 'react'
import Timeline from '../../../components/Timeline'
import TimelineHeader from '../../../components/Timeline/Header'
import TimelineItem from '../../../components/Timeline/Item'
// import styles from './style.module.scss'
// import useTypes from '../../../hooks/useTypes'

// import uci from '../../../assets/icons/uci.jpg'
// import neu from '../../../assets/icons/neu.png'
// import dji from '../../../assets/icons/dji.png'
// import tencent from '../../../assets/icons/tencent.png'
// import bytedance from '../../../assets/icons/bytedance.png'
import HighLight from '../../../components/HighLight'

// const strings = ['码农', '社畜', '打工人', '程序员', '工程师', '前端开发']

const Life: FC = () => {
  // const el = useTypes(strings, { loop: true })
  return (
    <Timeline>
      <TimelineHeader>2015</TimelineHeader>
      <TimelineItem direction="right" time="7月" header={['🎓 本科毕业 🎉']}></TimelineItem>
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem
        header={['杭州盈贝资产管理有限公司🎉']}
        content={[
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>前端开发工程师</HighLight>
          </span>,
          '公司业务系统开发',
        ]}
      />
      <TimelineHeader>2018</TimelineHeader>
      <TimelineItem
        direction="right"
        time="4月"
        header={['深圳超桌网络科技有限公司 🎉']}
        content={[
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>前端开发工程师</HighLight>
          </span>,
          '公司核心业务微信公众号、小程序、管理系统开发',
        ]}
        // node={
        //   <span>
        //     <img src={neu} width={46} alt="" />
        //   </span>
        // }
        // content={[
        //   '沈阳，辽宁',
        //   // eslint-disable-next-line react/jsx-key
        //   <span>
        //     <HighLight>东北大学</HighLight> @ 软件工程（英语国际）
        //   </span>,
        //   '最初写 C 和 Java，慢慢转写 JavaScript，前端真好玩！',
        // ]}
      ></TimelineItem>
      {/* <TimelineItem
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
      /> */}
      <TimelineHeader>2020</TimelineHeader>
      <TimelineItem
        // node={
        //   <span className={styles.customNode}>
        //     <img width={30} src={dji} alt="dji" />
        //   </span>
        // }
        direction="left"
        time="5月"
        header={[' 深圳市小安时代互联网金融服务有限公司🎉']}
        content={[
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>前端开发工程师</HighLight>
          </span>,
          '公司核心业务系统开发',
        ]}
      />
      <TimelineHeader>2021</TimelineHeader>
      <TimelineItem
        direction="right"
        time="4月"
        header={['中建新疆建工华南公司 🎉']}
        content={[
          // '美国，加州，尔湾',
          // eslint-disable-next-line react/jsx-key
          <span>
            <HighLight>信息化管理岗</HighLight>
          </span>,
          '对接厂商单位和公司业务需求部门，进行需求文档编制、技术方案评审、原型图修订、研发进度管理、功能测试以及上线运营推广',
        ]}
      />
      <TimelineItem direction="left" header={['......']} />
      <TimelineHeader>⚰️</TimelineHeader>
    </Timeline>
  )
}

export default Life
