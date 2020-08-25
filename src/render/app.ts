/**
 * 自定义运行时配置
 * https://umijs.org/zh-CN/docs/runtime-config
 */
import React from 'react'
import { history } from 'umi'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import RightClickMenuFuc from './utils/rightClickMenuFuc'

// // 注入右键复制黏贴
RightClickMenuFuc()

// 是否开启app自动更新
window.isOpenAutoUpdate = false

// 是否为浏览器环境
const isWeb = process.env.TARGET === 'web'

// 关闭electron的loading
setTimeout(() => window.stopLoading(), 1000)

// 覆写 render
export function render(oldRender: () => void) {
  oldRender()
}


// 修改交给 react-dom 渲染时的根组件
export function rootContainer(container: React.ReactDOM) {
  return React.createElement(ConfigProvider, { locale: zhCN }, container)
}