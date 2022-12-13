//公共路由配置
import {
  Login,
  NoAuth
} from '@/publicPages'

let routes = [
  {
    name: 'login',
    text: '登录',
    path: '/login',
    element: Login
  },
  {
    name: 'about',
    text: '无权限',
    path: '/no-auth',
    element: NoAuth
  }
]

export default routes