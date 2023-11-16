import React from 'react'
import { Image } from 'antd'
import { ProjectItem } from './Item'
import HighLight from '../../components/HighLight'

// jest-tutorial
import jestTutorialScreenshot from '../../assets/images/project-1.png'

// linter-guide
import linterGuideScreenshot from '../../assets/images/project-2.jpeg'

// 企业微信
import qywx from '../../assets/icons/qywx.png'
import qywxGithub from '../../assets/images/project-3.jpeg'
// import qiankun from '../../assets/icons/qiankun.png'
// import express from '../../assets/icons/express.png'

// 造轮子
import npmWheelScreenshot from '../../assets/images/project-4.jpg'

// OverWatch UI
// import overwatchLogo from '../../assets/icons/overwatch-logo.png'
// import overwatchUI from '../../assets/screenshots/overwatch-ui.png'

// Code Block Beautifier
// import beautifierLogo from '../../assets/icons/beautifier.jpg'

// // Guitar Editor
// import guitarLogo from '../../assets/icons/guitar-logo.jpg'
// import guitarEditor from '../../assets/screenshots/guitar-editor.png'

// // 仿微信记账本
// import weixin from '../../assets/svgs/weixin.svg'
// import weixinCash from '../../assets/screenshots/weixin-cash.png'

// // lintcode
// import leetcode from '../../assets/icons/leetcode.png'
// import lintcode from '../../assets/svgs/lintcode.svg'
// import lintcodeScreenShot from '../../assets/screenshots/lintcode.png'

// // tenet
// import tenet from '../../assets/icons/tenet.webp'
// import vscode from '../../assets/icons/vscode.webp'
// import tenetScreenshot from '../../assets/screenshots/tenet.gif'

// node-autodoc
// import nodeAutodoc from '../../assets/screenshots/node-autodoc.png'

// 技术栈
import vue from '../../assets/icons/vue.png'
// import react from '../../assets/icons/react.png'
import vant from '../../assets/icons/vantUI.png'
// import scss from '../../assets/icons/sass.png'
// import css from '../../assets/icons/css.png'
// import js from '../../assets/icons/js.png'
// import ts from '../../assets/icons/ts.png'
import npm from '../../assets/icons/npm.png'
// import hljs from '../../assets/icons/hljs.png'
// import python from '../../assets/icons/python.png'
// import styledComponents from '../../assets/icons/styled-components.png'
// import babel from '../../assets/icons/babel.png'
// import webpack from '../../assets/icons/webpack.png'
// import karma from '../../assets/icons/karma.png'
// import mocha from '../../assets/icons/mocha.png'
// import sinon from '../../assets/icons/sinon.png'
// import travis from '../../assets/icons/travis.webp'
import jest from '../../assets/icons/jest.png'
import eslint from '../../assets/icons/eslint.png'

// links
// import link from '../../assets/svgs/link.svg'
// import chromeExt from '../../assets/icons/chrome-ext.png'
// import github from '../../assets/svgs/github.svg'
// import juejin from '../../assets/svgs/juejin.svg'

// 可视项目
export const projects: ProjectItem[] = [
  {
    logo: jest,
    title: '中建新越工期管理系统',
    badges: [
      'https://img.shields.io/github/stars/haixiangyan/jest-tutorial?style=flat-square',
      'https://coveralls.io/repos/github/haixiangyan/jest-tutorial-example/badge.svg?branch=main',
    ],
    content: <Image src={jestTutorialScreenshot} />,
    description: (
      <div>
        <p>
          {/* Jest 上手 <HighLight isDark>完全指南</HighLight>， 从 0 到 1
          学会前端测试的技巧、思路、策略和套路。 */}
          中建新越工期管理系统平台以<HighLight isDark>工期计划</HighLight>
          为基础、从计划<HighLight isDark>录入、比对、提醒、考核、预警</HighLight>
          等多个方面对建设工程工期的全生命周期实行监控管理，实现数据与流程的互联互通。系统包含
          <HighLight isDark>
            决策驾驶舱、工期计划、工期提醒、工期考核、工期预警、权限管理、用户管理、流程管理
          </HighLight>
          等模块，其中决策驾驶舱、工期提醒、工期预警开发移动端并内嵌至
          <HighLight isDark>企业微信工作台</HighLight>。
        </p>
      </div>
    ),
    links: [
      // {
      //   content: 'https://github.yanhaixiang.com/jest-tutorial/',
      //   image: link,
      // },
    ],
    techUsed: [
      // { content: 'VuePress', image: vue },
      // { content: 'Jest', image: jest },
    ],
  },
  {
    logo: eslint,
    title: '圆桌爆文',
    badges: ['https://img.shields.io/github/stars/haixiangyan/linter-tutorial?style=flat-square'],
    content: <Image src={linterGuideScreenshot} />,
    description: (
      <div>
        <p>
          {/* 前端最全
          <HighLight isDark>解决方案</HighLight>的 Linter 上手指南。 */}
          圆桌爆文是一款供保险代理人进行展业获客的<HighLight isDark>保险资讯平台公众号</HighLight>
          ，可供用户自主生成文章并提供收集微信访客信息的能力，项目采用
          <HighLight isDark>Vue全家桶+Vant UI组件库</HighLight>技术栈。
        </p>
      </div>
    ),
    links: [
      // {
      //   content: 'https://github.yanhaixiang.com/linter-tutorial/',
      //   image: link,
      // },
    ],
    techUsed: [
      { content: 'vue', image: vue },
      { content: 'vant UI', image: vant },
    ],
  },
  {
    logo: qywx,
    title: '超级圆桌7.8全国保险公众宣传日运营活动',
    content: <Image src={qywxGithub} />,
    badges: ['https://img.shields.io/github/stars/wecom-sidebar?style=flat-square'],
    description: (
      <div>
        <p>
          {/* 提供开发企业微信侧边栏的一些
          <HighLight isDark>解决方案</HighLight>和<HighLight isDark>开发模板</HighLight>。 */}
          7.8保险宣传活动是给代理人提供了一个
          <HighLight isDark>在线宣传保险和树立个人品牌的在线活动</HighLight>
          ，用户通过收集访客的点赞可以获得抽奖机会，页面呈现将
          <HighLight isDark>点赞者的头像铺满中国地图的效果</HighLight>
          ，帮助保险业务人员提升展业效率和转化率。
        </p>
      </div>
    ),
    links: [
      // { content: 'https://wecom-sidebar.github.io/', image: link },
      // { content: 'https://github.com/wecom-sidebar', image: github },
    ],
    techUsed: [
      { content: 'vue', image: vue },
      { content: 'vant UI', image: vant },
    ],
  },
  {
    logo: npm,
    badges: ['https://img.shields.io/github/stars/haixiangyan/make-wheels?style=flat-square'],
    title: '超桌日常活动编辑器后台管理系统',
    content: <Image src={npmWheelScreenshot} />,
    description: (
      <div>
        <p>
          {/* 这本小书会带你造 10 个非常实用的
          <HighLight isDark>npm 库 📦</HighLight>。 */}
          超桌日常活动编辑器是提供给公司运营人员使用的
          <HighLight isDark>可快速生成运营活动的模板工具</HighLight>
          。在编辑器中可配置活动页图片、内容及分享文案、跳转链接、配色等并支持在后台实时查看页面效果，项目采用
          <HighLight isDark>移动端Vue+Vant UI、管理系统Vue+Element UI</HighLight>技术栈
        </p>
        {/* <p>
          每篇文章里的对每个轮子都会从简单的需求开始，首先做一个最 Low 的解决方法出来，
          然后慢慢优化它，最后推导成 <HighLight isDark>源码</HighLight> 的样子。整个从 0 到 1
          的设计与思考过程会完整地呈现给读者。
        </p> */}
      </div>
    ),
    links: [
      // {
      //   content: 'https://github.com/haixiangyan/make-wheels',
      //   image: link,
      // },
      // {
      //   content: 'https://juejin.cn/column/6965512526624718856',
      //   image: juejin,
      // },
    ],
    techUsed: [
      { content: 'vue', image: vue },
      { content: 'vant UI', image: vant },
      {
        content: 'Element UI',
        image:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0NnB4IiBoZWlnaHQ9IjM4cHgiIHZpZXdCb3g9IjAgMCAxNDYgMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQwICgzMzc2MikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGUgQ29weTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ2Mi4yLjAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLpppbpobUt6buY6K6k5pWI5p6cLWNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwLjAwMDAwMCwgLTE5LjAwMDAwMCkiIGZpbGw9IiM0MDlFRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IEMyMTIuMTM1NDQxLDQ1LjE1NzgwNzcgMjEyLjQyMDIzNyw0NS4xNTA1MTA1IDIxMi45NjA5MzcsNDUuMTU3ODA3NyBDMjEzLjUwMTYzNyw0NS4xNjUxMDQ5IDIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTMuNjQ4ODUxLDQ1LjU3MDg1NTYgQzIxMy42NDg4NTEsNDUuNTcwODU1NiAyMTQuNzMzODI4LDQ3LjU2NjU2NTcgMjE1LjAyNDY3Nyw0OC4wNDkxNDM0IEMyMTUuMjgzNjA4LDQ4LjQ3ODcxMzMgMjE0Ljk3MzIyMSw0OC40NzA4NjU0IDIxNC45MDE4MTYsNDguNDYzODQzNiBDMjE0LjkwMjUwNCw0OC40NjI4Nzk4IDIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODg3MDk1LDQ4LjQ2MjE5MTQgQzIxNC44ODcwOTUsNDguNDYyMTkxNCAyMTQuODkzMDExLDQ4LjQ2MzAxNzUgMjE0LjkwMTgxNiw0OC40NjM4NDM2IEMyMTQuODk4NjUyLDQ4LjQ2ODI0OTUgMjE0LjU5NDczMSw0OC40NzgzMDAzIDIxMS40NDc1MjgsNDguNDYyMTkxNCBDMjA3LjA1ODY0MSw0Ny44NjY1NzYyIDIwNi45MDczLDQzLjkxODY2MzggMjA2LjkwNzMsNDMuOTE4NjYzOCBMMjA2LjkwNzMsMzYuODk2ODQ4MyBMMjA0LjQzMDgxMiwzNi44OTY4NDgzIEwyMDQuNDMwODEyLDM0LjI4MDg3NzkgQzIwNC40MzA4MTIsMzMuOTI0Mjc5OCAyMDQuODQzNTYsMzMuODY3ODI5OSAyMDQuODQzNTYsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzMuODY3ODI5OSBMMjA2LjkwNzMsMzEuMjUxODU5NCBDMjA2LjkwNzMsMzAuODI1MTgwOSAyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA3LjMyMDA0OCwzMC43MDExMjg4IEMyMDcuMzIwMDQ4LDMwLjcwMTEyODggMjA4Ljc3MjY0NiwzMC4yODU4Nzc5IDIwOS42MTc4MTYsMzAuMDQ0MTA3MiBDMjA5Ljk2NDY2MiwyOS45NDQ5NzU2IDIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMDcxNzAxLDMwLjE1MDM5ODIgQzIxMC4wNzE3MDEsMzAuMTUwMzk4MiAyMTAuMjA5Mjg0LDMwLjA3NzQyNjQgMjEwLjIwOTI4NCwzMC4zOTI3MTk2IEwyMTAuMjA5Mjg0LDM0LjAwNTUxMjUgTDIxMy43ODY0MzMsMzQuMDA1NTEyNSBDMjE0LjEzNDY1NSwzNC4wMDU1MTI1IDIxNC4xOTkxODEsMzQuNDE4NTYwNSAyMTQuMTk5MTgxLDM0LjQxODU2MDUgTDIxNC4xOTkxODEsMzcuMDM0NTMxIEwyMTAuMjA5Mjg0LDM3LjAzNDUzMSBMMjEwLjIwOTI4NCw0My4wOTI1Njc4IEMyMTAuMjA5Mjg0LDQ0Ljg1MzM5MTMgMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IDIxMi4xMzU0NDEsNDUuMTU3ODA3NyBMMjEyLjEzNTQ0MSw0NS4xNTc4MDc3IFogTTIwMS41NDE1NzYsNDguMTg2ODI2MSBMMTk5LjM0MDI1Myw0OC4xODY4MjYxIEMxOTguOTA4MzgxLDQ4LjE4NjgyNjEgMTk4LjkyNzUwNSw0Ny42MzYwOTU1IDE5OC45Mjc1MDUsNDcuNjM2MDk1NSBMMTk4LjkyNzUwNSwzNy40NDc1Nzg5IEMxOTguOTI3NTA1LDM2LjgyODY5NTQgMTk4LjEwMjAwOSwzNi42MjE0ODMgMTk4LjEwMjAwOSwzNi42MjE0ODMgTDE5My41NjE3ODEsMzYuNjIxNDgzIEMxOTIuODg0NDYyLDM2LjYyMTQ4MyAxOTIuODczODY4LDM3LjQ0NzU3ODkgMTkyLjg3Mzg2OCwzNy40NDc1Nzg5IEwxOTIuODczODY4LDQ3Ljc3Mzc3ODEgQzE5Mi44NzM4NjgsNDguMTc4NzAyOCAxOTIuNDYxMTIsNDguMTg2ODI2MSAxOTIuNDYxMTIsNDguMTg2ODI2MSBMMTkwLjI1OTc5Nyw0OC4xODY4MjYxIEMxODkuNzc1NzgyLDQ4LjE4NjgyNjEgMTg5Ljg0NzA0OSw0Ny42MzYwOTU1IDE4OS44NDcwNDksNDcuNjM2MDk1NSBMMTg5Ljg0NzA0OSwzNC44MzE2MDg1IEMxODkuODQ3MDQ5LDMzLjgwMzExOSAxOTEuMDg1MjkzLDMzLjU5MjQ2NDYgMTkxLjA4NTI5MywzMy41OTI0NjQ2IEwyMDAuNzE2MDgsMzMuNTkyNDY0NiBDMjAxLjY3Nzc4MywzMy41OTI0NjQ2IDIwMS45NTQzMjQsMzQuODMxNjA4NSAyMDEuOTU0MzI0LDM0LjgzMTYwODUgTDIwMS45NTQzMjQsNDcuNDk4NDEyOCBDMjAxLjk1NDMyNCw0OC4yMTg2MzA4IDIwMS41NDE1NzYsNDguMTg2ODI2MSAyMDEuNTQxNTc2LDQ4LjE4NjgyNjEgTDIwMS41NDE1NzYsNDguMTg2ODI2MSBaIE0xODUuODU3MTUyLDQyLjQwNDE1NDYgTDE3Ny4zMjcwMjcsNDIuNDA0MTU0NiBMMTc3LjMyNzAyNyw0NC40NjkzOTQ0IEMxNzcuMzI3MDI3LDQ1LjIxMzU2OTEgMTc4LjI5MDEwNiw0NS40MzMxNzMgMTc4LjI5MDEwNiw0NS40MzMxNzMgTDE4NS4xNjkyMzksNDUuNDMzMTczIEMxODUuNjU4NzU4LDQ1LjQzMzE3MyAxODUuOTk0NzM1LDQ1Ljg0NjIyMSAxODUuOTk0NzM1LDQ1Ljg0NjIyMSBDMTg1Ljk5NDczNSw0NS44NDYyMjEgMTg2LjU5NTAwOCw0Ny4wOTUxNDAzIDE4Ni44MjAyMzEsNDcuNjM2MDk1NSBDMTg3LjA0NTQ1NCw0OC4xNzcwNTA2IDE4Ni40MDc0ODMsNDguMTg2ODI2MSAxODYuNDA3NDgzLDQ4LjE4NjgyNjEgTDE3Ni4wODg3ODMsNDguMTg2ODI2MSBDMTc0Ljg0NjEzNiw0OC4xODY4MjYxIDE3NC41NzUzNzQsNDYuNjcyMzE2OSAxNzQuNTc1Mzc0LDQ2LjY3MjMxNjkgTDE3NC41NzUzNzQsMzQuOTY5MjkxMSBDMTc0LjU3NTM3NCwzNC4yOTYyOTgzIDE3NS41Mzg0NTIsMzQuMDA1NTEyNSAxNzUuNTM4NDUyLDM0LjAwNTUxMjUgTDE4NS44NTcxNTIsMzQuMDA1NTEyNSBDMTg2Ljg5NDExMywzNC4wMDU1MTI1IDE4Ny4wOTUzOTYsMzUuMjQ0NjU2NCAxODcuMDk1Mzk2LDM1LjI0NDY1NjQgTDE4Ny4wOTUzOTYsNDEuMTY1MDEwNyBDMTg3LjA5NTM5Niw0Mi4xNjM4OTgzIDE4NS44NTcxNTIsNDIuNDA0MTU0NiAxODUuODU3MTUyLDQyLjQwNDE1NDYgTDE4NS44NTcxNTIsNDIuNDA0MTU0NiBaIE0xODQuMzQzNzQzLDM3LjQ0NzU3ODkgQzE4NC4zNDM3NDMsMzcuNDQ3NTc4OSAxODQuMjU3MDY2LDM2Ljc1OTE2NTcgMTgzLjY1NTgzLDM2Ljc1OTE2NTcgTDE3OC4wMTQ5NCwzNi43NTkxNjU3IEMxNzguMDE0OTQsMzYuNzU5MTY1NyAxNzcuMzI3MDI3LDM2Ljk0Mzc5ODEgMTc3LjMyNzAyNywzNy40NDc1Nzg5IEwxNzcuMzI3MDI3LDM4Ljk2MjA4ODIgQzE3Ny4zMjcwMjcsMzguOTYyMDg4MiAxNzcuMzQ2ODM5LDM5LjY1MDUwMTQgMTc4LjAxNDk0LDM5LjY1MDUwMTQgTDE4My42NTU4MywzOS42NTA1MDE0IEMxODMuNjU1ODMsMzkuNjUwNTAxNCAxODQuMzQzNzQzLDM5LjQ4MDQ2MzQgMTg0LjM0Mzc0MywzOC44MjQ0MDU1IEwxODQuMzQzNzQzLDM3LjQ0NzU3ODkgTDE4NC4zNDM3NDMsMzcuNDQ3NTc4OSBaIE0xNzEuNDEwOTcyLDQ4LjE4NjgyNjEgTDE2OS4yMDk2NSw0OC4xODY4MjYxIEMxNjguOTE5MjEzLDQ4LjE4NjgyNjEgMTY4Ljc5NjkwMiw0Ny43NzM3NzgxIDE2OC43OTY5MDIsNDcuNzczNzc4MSBMMTY4Ljc5NjkwMiwzNy40NDc1Nzg5IEMxNjguNzk2OTAyLDM2LjgwNzIxNjkgMTY3Ljk3MTQwNiwzNi42MjE0ODMgMTY3Ljk3MTQwNiwzNi42MjE0ODMgTDE2NS45MDc2NjYsMzYuNjIxNDgzIEMxNjUuMzMxODgyLDM2LjYyMTQ4MyAxNjUuMjE5NzUyLDM3LjQ0NzU3ODkgMTY1LjIxOTc1MiwzNy40NDc1Nzg5IEwxNjUuMjE5NzUyLDQ3Ljc3Mzc3ODEgQzE2NS4yMTk3NTIsNDguMTE2MzMyNiAxNjQuODA3MDA0LDQ4LjE4NjgyNjEgMTY0LjgwNzAwNCw0OC4xODY4MjYxIEwxNjIuNjA1NjgyLDQ4LjE4NjgyNjEgQzE2Mi4yOTk1Niw0OC4xODY4MjYxIDE2Mi4xOTI5MzQsNDcuNzczNzc4MSAxNjIuMTkyOTM0LDQ3Ljc3Mzc3ODEgTDE2Mi4xOTI5MzQsMzcuNDQ3NTc4OSBDMTYyLjE5MjkzNCwzNi43OTI4OTc5IDE2MS4zNjc0MzgsMzYuNjIxNDgzIDE2MS4zNjc0MzgsMzYuNjIxNDgzIEwxNTkuMzAzNjk4LDM2LjYyMTQ4MyBDMTU4LjY3Mzk4MiwzNi42MjE0ODMgMTU4LjYxNTc4NCwzNy40NDc1Nzg5IDE1OC42MTU3ODQsMzcuNDQ3NTc4OSBMMTU4LjYxNTc4NCw0Ny43NzM3NzgxIEMxNTguNjE1Nzg0LDQ4LjIxNTczOTUgMTU4LjIwMzAzNiw0OC4xODY4MjYxIDE1OC4yMDMwMzYsNDguMTg2ODI2MSBMMTU2LjAwMTcxNCw0OC4xODY4MjYxIEMxNTUuNTg5Mzc4LDQ4LjE4NjgyNjEgMTU1LjU4ODk2Niw0Ny43NzM3NzgxIDE1NS41ODg5NjYsNDcuNzczNzc4MSBMMTU1LjU4ODk2NiwzNC42OTM5MjU4IEMxNTUuNTg4OTY2LDMzLjkzNjI1ODIgMTU2LjY4OTYyNywzMy41OTI0NjQ2IDE1Ni42ODk2MjcsMzMuNTkyNDY0NiBMMTcwLjQ0Nzg5NCwzMy41OTI0NjQ2IEMxNzEuNTUyMjcsMzMuNTkyNDY0NiAxNzEuODIzNzIsMzQuOTY5MjkxMSAxNzEuODIzNzIsMzQuOTY5MjkxMSBMMTcxLjgyMzcyLDQ3Ljc3Mzc3ODEgQzE3MS44MjM3Miw0OC4yNDkzMzQgMTcxLjQxMDk3Miw0OC4xODY4MjYxIDE3MS40MTA5NzIsNDguMTg2ODI2MSBMMTcxLjQxMDk3Miw0OC4xODY4MjYxIFogTTE1MS40NjE0ODYsNDIuNDA0MTU0NiBMMTQyLjkzMTM2LDQyLjQwNDE1NDYgTDE0Mi45MzEzNiw0NC40NjkzOTQ0IEMxNDIuOTMxMzYsNDUuMjEzNTY5MSAxNDMuODk0NDM5LDQ1LjQzMzE3MyAxNDMuODk0NDM5LDQ1LjQzMzE3MyBMMTUwLjc3MzU3Miw0NS40MzMxNzMgQzE1MS4yNjMwOTIsNDUuNDMzMTczIDE1MS41OTkwNjgsNDUuODQ2MjIxIDE1MS41OTkwNjgsNDUuODQ2MjIxIEMxNTEuNTk5MDY4LDQ1Ljg0NjIyMSAxNTIuMTk5MjA0LDQ3LjA5NTE0MDMgMTUyLjQyNDU2NCw0Ny42MzYwOTU1IEMxNTIuNjQ5Nzg3LDQ4LjE3NzA1MDYgMTUyLjAxMTgxNiw0OC4xODY4MjYxIDE1Mi4wMTE4MTYsNDguMTg2ODI2MSBMMTQxLjY5MzExNyw0OC4xODY4MjYxIEMxNDAuNDUwNDcsNDguMTg2ODI2MSAxNDAuMTc5NzA3LDQ2LjY3MjMxNjkgMTQwLjE3OTcwNyw0Ni42NzIzMTY5IEwxNDAuMTc5NzA3LDM0Ljk2OTI5MTEgQzE0MC4xNzk3MDcsMzQuMjk2Mjk4MyAxNDEuMTQyNzg2LDM0LjAwNTUxMjUgMTQxLjE0Mjc4NiwzNC4wMDU1MTI1IEwxNTEuNDYxNDg2LDM0LjAwNTUxMjUgQzE1Mi40OTg0NDYsMzQuMDA1NTEyNSAxNTIuNjk5NzMsMzUuMjQ0NjU2NCAxNTIuNjk5NzMsMzUuMjQ0NjU2NCBMMTUyLjY5OTczLDQxLjE2NTAxMDcgQzE1Mi42OTk3Myw0Mi4xNjM4OTgzIDE1MS40NjE0ODYsNDIuNDA0MTU0NiAxNTEuNDYxNDg2LDQyLjQwNDE1NDYgTDE1MS40NjE0ODYsNDIuNDA0MTU0NiBaIE0xNDkuOTQ4MDc2LDM3LjQ0NzU3ODkgQzE0OS45NDgwNzYsMzcuNDQ3NTc4OSAxNDkuODYxMzk5LDM2Ljc1OTE2NTcgMTQ5LjI2MDE2MywzNi43NTkxNjU3IEwxNDMuNjE5Mjc0LDM2Ljc1OTE2NTcgQzE0My42MTkyNzQsMzYuNzU5MTY1NyAxNDIuOTMxMzYsMzYuOTQzNzk4MSAxNDIuOTMxMzYsMzcuNDQ3NTc4OSBMMTQyLjkzMTM2LDM4Ljk2MjA4ODIgQzE0Mi45MzEzNiwzOC45NjIwODgyIDE0Mi45NTExNzIsMzkuNjUwNTAxNCAxNDMuNjE5Mjc0LDM5LjY1MDUwMTQgTDE0OS4yNjAxNjMsMzkuNjUwNTAxNCBDMTQ5LjI2MDE2MywzOS42NTA1MDE0IDE0OS45NDgwNzYsMzkuNDgwNDYzNCAxNDkuOTQ4MDc2LDM4LjgyNDQwNTUgTDE0OS45NDgwNzYsMzcuNDQ3NTc4OSBMMTQ5Ljk0ODA3NiwzNy40NDc1Nzg5IFogTTEzOC4xMTU5NjcsNDguMTg2ODI2MSBMMTMyLjg4NzgyNiw0OC4xODY4MjYxIEMxMzIuODg3ODI2LDQ4LjE4NjgyNjEgMTI5LjA2MTkyNyw0OC4wMDYxODY1IDEyOC43NjAzNDYsNDQuMTk0MDI5MSBDMTI4Ljc0ODIzOSw0MC4yNzkwMjI4IDEyOC43NjAzNDYsMjguMDg1MTU4MyAxMjguNzYwMzQ2LDI4LjA4NTE1ODMgTDEzMS4yMzY4MzQsMjguMDg1MTU4MyBDMTMxLjIzNjgzNCwyOC4wODUxNTgzIDEzMi4wNjIzMywyOC4wNzAxNTA5IDEzMi4wNjIzMywyOC45MTEyNTQzIEwxMzIuMDYyMzMsNDMuMzY3OTMzMSBDMTMyLjA2MjMzLDQzLjM2NzkzMzEgMTMyLjM1MDAxNSw0NC41NjM4NDQ3IDEzMy45ODg0ODcsNDUuMDIwMTI1IEMxMzUuODM5OCw0NS4wMTA3NjI2IDEzNi4xODk4MSw0NS4wMjAxMjUgMTM2LjE4OTgxLDQ1LjAyMDEyNSBDMTM2LjE4OTgxLDQ1LjAyMDEyNSAxMzYuOTA3MzAzLDQ0Ljc5MDE5NSAxMzcuNDI4MDU0LDQ1LjcwODUzODMgQzEzNy45NDg4MDQsNDYuNjI2ODgxNiAxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjUyODcxNSw0Ny42MzYwOTU1IEMxMzguNTI4NzE1LDQ3LjYzNjA5NTUgMTM4LjYxMTU0LDQ4LjE4NjgyNjEgMTM4LjExNTk2Nyw0OC4xODY4MjYxIEwxMzguMTE1OTY3LDQ4LjE4NjgyNjEgWiBNMTExLjU2MjUxMyw0Ny4zNjA3MzAyIEwxMTEuNTYyNTEzLDI5LjE4NjYxOTYgQzExMS41NjI1MTMsMjguMzgwNzYzIDExMi4yNTA0MjYsMjguMjIyODQxIDExMi4yNTA0MjYsMjguMjIyODQxIEwxMjUuMTgzMTk3LDI4LjIyMjg0MSBDMTI1LjkwNjQ2OSwyOC4yMjI4NDEgMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS41OTU5NDUsMjkuMDQ4OTM2OSBDMTI1LjU5NTk0NSwyOS4wNDg5MzY5IDEyNS4xOTI4MjcsMzAuMTY2MDk0IDEyNC45MDgwMzEsMzAuNzAxMTI4OCBDMTI0LjYyMzIzNSwzMS4yMzYxNjM2IDEyNC4wODI1MzUsMzEuMjUxODU5NCAxMjQuMDgyNTM1LDMxLjI1MTg1OTQgTDExNS42ODk5OTMsMzEuMjUxODU5NCBDMTE0LjkwODUyMywzMS4yNTE4NTk0IDExNC44NjQ0OTcsMzEuOTQwMjcyNyAxMTQuODY0NDk3LDMxLjk0MDI3MjcgTDExNC44NjQ0OTcsMzYuNDgzODAwMyBMMTI0LjM1NzcwMSwzNi40ODM4MDAzIEMxMjQuOTE0NjM1LDM2LjQ4MzgwMDMgMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyNC42MzI4NjYsMzcuMTcyMjEzNiBDMTI0LjYzMjg2NiwzNy4xNzIyMTM2IDEyMy45MjE4MzksMzguNjg4OTI1OCAxMjMuNjY5Nzg3LDM5LjA5OTc3MDggQzEyMy40MTc3MzYsMzkuNTEwNjE1OSAxMjIuODQ0MjkxLDM5LjUxMjgxODggMTIyLjg0NDI5MSwzOS41MTI4MTg4IEwxMTQuODY0NDk3LDM5LjUxMjgxODggTDExNC44NjQ0OTcsNDQuMzMxNzExNyBDMTE0Ljg2NDQ5Nyw0NC45ODg0NTggMTE1LjU1MjQxLDQ1LjE1NzgwNzcgMTE1LjU1MjQxLDQ1LjE1NzgwNzcgTDEyNC4zNTc3MDEsNDUuMTU3ODA3NyBDMTI0Ljk5NjIyMiw0NS4xNTc4MDc3IDEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjUuMTgzMTk3LDQ1LjU3MDg1NTYgQzEyNS4xODMxOTcsNDUuNTcwODU1NiAxMjYuMDU1MTk2LDQ2LjkzMjM5OTQgMTI2LjQyMTQ0MSw0Ny40OTg0MTI4IEMxMjYuNzg3ODIzLDQ4LjA2NDQyNjIgMTI2LjI4Mzg1OCw0OC4xODY4MjYxIDEyNi4yODM4NTgsNDguMTg2ODI2MSBMMTEyLjM4ODAwOSw0OC4xODY4MjYxIEMxMTEuODE0MTUxLDQ4LjE4NjgyNjEgMTExLjU2MjUxMyw0Ny4zNjA3MzAyIDExMS41NjI1MTMsNDcuMzYwNzMwMiBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
      },
    ],
  },
  // {
  //   logo: overwatchLogo,
  //   badges: [
  //     'https://img.shields.io/github/stars/haixiangyan/overwatch-ui?style=flat-square',
  //     'https://img.shields.io/npm/dm/overwatch-ui?style=flat-square',
  //   ],
  //   title: 'Overwatch UI',
  //   content: <Image src={overwatchUI} />,
  //   description: (
  //     <p>
  //       一个基于
  //       <HighLight isDark>守望先锋</HighLight> 样式的 UI 库，通过 Vue.js 开发。
  //     </p>
  //   ),
  //   links: [
  //     {
  //       content: 'https://github.yanhaixiang.com/overwatch-ui-doc/#/',
  //       image: link,
  //     },
  //     {
  //       content: 'https://github.com/haixiangyan/overwatch-ui',
  //       image: github,
  //     },
  //   ],
  //   techUsed: [
  //     { content: 'Vue.js', image: vue },
  //     { content: 'Sass', image: scss },
  //     { content: 'JavaScript', image: js },
  //     { content: 'NPM', image: npm },
  //     { content: 'Babel', image: babel },
  //     { content: 'Webpack', image: webpack },
  //     { content: 'Karma', image: karma },
  //     { content: 'Sinon', image: sinon },
  //     { content: 'Mocha', image: mocha },
  //     { content: 'Travis CI', image: travis },
  //   ],
  // },
  // {
  //   logo: beautifierLogo,
  //   badges: [
  //     'https://img.shields.io/chrome-web-store/users/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square',
  //     'https://img.shields.io/github/stars/haixiangyan/codeblock-beautifier?style=flat-square',
  //     'https://img.shields.io/chrome-web-store/stars/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square',
  //   ],
  //   title: '代码高亮 - Chrome 插件',
  //   content: (
  //     <iframe
  //       title="codeblock-beautifier"
  //       src="//player.bilibili.com/player.html?aid=40197852&bvid=BV1Nt411s7Gy&cid=70598189&page=1"
  //       scrolling="no"
  //       frameBorder="no"
  //       allowFullScreen
  //     />
  //   ),
  //   description: (
  //     <p>
  //       一个 <HighLight isDark>Chrome 插件</HighLight>
  //       。主要用于高亮 Medium 里文章的代码块， 现在已经可以高亮所有带有 pre 元素的网站，如简书,
  //       知乎等。
  //     </p>
  //   ),
  //   links: [
  //     {
  //       content:
  //         'https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn',
  //       image: chromeExt,
  //     },
  //     {
  //       content: 'https://github.com/haixiangyan/codeblock-beautifier',
  //       image: github,
  //     },
  //   ],
  //   techUsed: [
  //     { content: 'JavaScript', image: js },
  //     { content: 'Highlight.js', image: hljs },
  //   ],
  // },
  // {
  //   logo: guitarLogo,
  //   title: '吉他谱编辑器',
  //   badges: [
  //     'https://img.shields.io/github/stars/haixiangyan/guitar-tabs-editor?style=flat-square',
  //   ],
  //   content: <Image src={guitarEditor} />,
  //   description: (
  //     <div>
  //       <p>
  //         使用 React.js 开发的
  //         <HighLight isDark>吉他谱编辑器</HighLight>
  //         ，在线编辑和生成吉他谱。
  //       </p>
  //       <p>
  //         还能提供自动生成和弦的
  //         <HighLight isDark>React 组件</HighLight>
  //         ，一键生成和弦 SVG。
  //       </p>
  //     </div>
  //   ),
  //   links: [
  //     {
  //       content: 'https://github.yanhaixiang.com/guitar-tabs-editor/#/',
  //       image: link,
  //     },
  //     {
  //       content: 'https://github.com/haixiangyan/guitar-tabs-editor',
  //       image: github,
  //     },
  //   ],
  //   techUsed: [
  //     { content: 'React.js', image: react },
  //     { content: 'CSS', image: css },
  //     { content: 'JavaScript', image: js },
  //     { content: 'Babel', image: babel },
  //     { content: 'Webpack', image: webpack },
  //   ],
  // },
  // {
  //   logo: leetcode,
  //   title: 'LeetCode/LintCode 题解',
  //   badges: ['https://img.shields.io/github/stars/haixiangyan/leetcode-python?style=flat-square'],
  //   content: <Image src={lintcodeScreenShot} />,
  //   description: (
  //     <p>
  //       难受一批的
  //       <HighLight isDark>LeetCode/LintCode 题解</HighLight>
  //       ，使用 Python 解题。
  //     </p>
  //   ),
  //   links: [
  //     { content: 'https://www.lintcode.com/user/Haixiang', image: lintcode },
  //     { content: 'https://leetcode.com/HaixiangYan/', image: leetcode },
  //     {
  //       content: 'https://github.com/haixiangyan/leetcode-python',
  //       image: github,
  //     },
  //   ],
  //   techUsed: [{ content: 'Python', image: python }],
  // },
  // {
  //   logo: weixin,
  //   title: '仿微信记账本',
  //   badges: ['https://img.shields.io/github/stars/haixiangyan/weixin-cash?style=flat-square'],
  //   content: <Image src={weixinCash} />,
  //   description: (
  //     <div>
  //       <p>
  //         用<HighLight isDark>React.js + TypeScript + ECharts </HighLight> 写的一个仿微信记账本。
  //       </p>
  //       <p>没有花里胡哨的操作，仅仅是一个记账本 😋。</p>
  //     </div>
  //   ),
  //   links: [
  //     { content: 'https://github.yanhaixiang.com/weixin-cash/#/', image: link },
  //     { content: 'https://github.com/haixiangyan/weixin-cash', image: github },
  //   ],
  //   techUsed: [
  //     { content: 'React.js', image: react },
  //     { content: 'Styled-Components', image: styledComponents },
  //     { content: 'TypeScript', image: ts },
  //     { content: 'Babel', image: babel },
  //     { content: 'Webpack', image: webpack },
  //   ],
  // },
  // {
  //   logo: tenet,
  //   title: 'Tenet',
  //   badges: [
  //     'https://img.shields.io/github/stars/haixiangyan/tenet?style=flat-square',
  //     'https://img.shields.io/visual-studio-marketplace/i/HaixiangYan.tenet?style=flat-square',
  //     'https://img.shields.io/visual-studio-marketplace/stars/HaixiangYan.tenet',
  //   ],
  //   content: <Image src={tenetScreenshot} />,
  //   description: (
  //     <div>
  //       <p>
  //         最近看《信条》没怎么看懂，到是觉得里面“逆向思维”的有点意思， 想试试用{' '}
  //         <HighLight isDark>“逆向思维”</HighLight> 来写代码会怎么样
  //       </p>
  //       <p>
  //         哈哈哈哈，然后造了一个沙雕
  //         <HighLight isDark> VsCode 插件 - tenet</HighLight>。
  //       </p>
  //     </div>
  //   ),
  //   links: [
  //     {
  //       content: 'https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet',
  //       image: vscode,
  //     },
  //     { content: 'https://github.com/haixiangyan/tenet', image: github },
  //   ],
  //   techUsed: [{ content: 'TypeScript', image: ts }],
  // },
  // {
  //   logo: jest,
  //   title: 'node-autodoc',
  //   badges: [
  //     'https://img.shields.io/github/stars/haixiangyan/node-autodoc?style=flat-square',
  //     'https://coveralls.io/repos/github/Haixiang6123/node-autodoc/badge.svg?branch=main',
  //     'https://img.shields.io/npm/dm/node-autodoc?style=flat-square',
  //   ],
  //   content: <Image src={nodeAutodoc} />,
  //   description: (
  //     <div>
  //       <p>
  //         一个
  //         <HighLight isDark>测试驱动文档</HighLight> 的生成器。灵感来源于 Ruby 的 autodoc 和
  //         JavaScript 社区的 supertest。
  //       </p>
  //       <p>希望通过测试来保证 API 文档的正确性。</p>
  //     </div>
  //   ),
  //   links: [
  //     { content: 'https://www.npmjs.com/package/node-autodoc', image: npm },
  //     {
  //       content: 'https://github.com/haixiangyan/node-autodoc',
  //       image: github,
  //     },
  //   ],
  //   techUsed: [
  //     { content: 'Eslint', image: eslint },
  //     { content: 'JavaScript', image: js },
  //     { content: 'Jest', image: jest },
  //     { content: 'Travis CI', image: travis },
  //   ],
  // },
]
