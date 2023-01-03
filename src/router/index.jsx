import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate, NavLink, useRoutes } from 'react-router-dom'
//安装react-router-dom@6.2.2，6,3版本加了一个兼容v5的包，6.4.x版本加了dataAPI，不太习惯
//私有路由可能不同用户不一样
import privateRoutes from './private.routes'
import commonRoutes from './common.routes'
//路由懒加载和路由鉴权
//公共路由与权限路由
//公共路由：前端自定义
//权限路由，后端返回
//navigate and display 一般通过Layout组件来渲染，但是现在没有Layout

const Index = () => {
  const asyncRouter = (table) => {
    let mRouteTable = []
    table.forEach(route => {
      mRouteTable.push({
        path: route.path,
        element: (
          <Suspense fallback={<div>路由加载ing...</div>}>
            <route.element />
          </Suspense>
        ),
        children: route.children && asyncRouter(route.children)
      })
    })
    return mRouteTable
  }
  const element = useRoutes(asyncRouter(commonRoutes))
  return (
    <>
      {element}
    </>
  )
}
export default function RootRouter(props) {
  return (
    <BrowserRouter>
      <ul style={{ display: 'flex', height: 24, lineHeight: 1, justifyContent: "space-evenly", listStyle: 'none', padding: 10 }}>
        <li><NavLink to="/home">home</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/login">login</NavLink></li>
        <li><NavLink to="/no-auth">noanth</NavLink></li>
        <li><NavLink to="/not-found">404</NavLink></li>
      </ul>
      <hr />
      <Index />
      {/* <Route to="/" Navigate="/home"></Route> */}
    </BrowserRouter>)
}