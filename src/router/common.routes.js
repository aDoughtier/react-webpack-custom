//公共路由配置
import React,{lazy} from 'react'
import {
  Login,
  NoAuth,
  NotFound
} from '@/publicPages'
import {
  Home,
  About,
  C1,
  C2,
} from '@/pages'
import { Navigate } from 'react-router-dom'
//如何解决部分路由不需要懒加载问题

let routes = [
  {
    path: '/login',
    element: lazy(() => import('@/publicPages/Login'))
  },
  {
    path: '/home',
    element: Home,
    children: [
      {
        index: true,
        element: C1 //index路由失效
      },
      {
        path: 'c1',
        element: C1
      },
      {
        path: 'c2',
        element: lazy(() => import('@/pages/Home/C2'))
      }
    ]
  },
  {
    path: '/about',
    element: lazy(() => import('@/pages/About'))
  },
  {
    path: '/no-auth',
    element: lazy(() => import('@/publicPages/NoAuth'))
  },
  {
    path: '*',
    element: lazy(() => import('@/publicPages/NotFound'))
  }
]

export default routes