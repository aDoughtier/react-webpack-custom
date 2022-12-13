//路由配置
import React, { lazy } from 'react'
import {
  Home,
  About
} from '@/pages'

let routes = [
  {
    name: 'home',
    text: '首页',
    path: '/home',
    element: Home
  },
  {
    name: 'about',
    text: '关于',
    path: '/about',
    element: About,
    children: []
  }
]

export default routes