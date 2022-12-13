import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, Navigate, NavLink } from 'react-router-dom'
//安装react-router-dom@6.2.2，6,3版本加了一个兼容v5的包，6.4.x版本加了dataAPI，不太习惯
//私有路由可能不同用户不一样
import privateRoutes from './private.routes'
import commonRoutes from './common.routes'
import About from '@/pages/About/index'
import Home from '@/pages/Home/index'
//路由懒加载和路由鉴权
//公共路由与权限路由
//公共路由：前端自定义
//权限路由，后端返回
//navigate and display 一般通过Layout组件来渲染，但是现在没有Layout
export default function RootRouter(props) {

  return (<BrowserRouter>
    <ul>
      <li><NavLink to="/about">about</NavLink></li>
      <li><NavLink to="/home">home</NavLink></li>
    </ul>

    <hr />
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Routes>
  </BrowserRouter>)
}