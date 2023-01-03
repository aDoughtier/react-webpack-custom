import React from 'react'
import { useLocation, useParams,useSearchParams,useNavigate } from 'react-router-dom'
import './index.scss'
try {
  require('@/assets/fonts/iconfont.js')
} catch (error) {
  console.log(error)
}
export default function Icon(props) {
  const {
    type
  } = props
  const navigate = useNavigate() //第一个参数：去哪里，第二个参数：携带的数据，编程式路由导航
  console.log(navigate)
  const location = useLocation()
  const dynamic = useParams()  //获取动态路由
  const [getSearch, setSearch] = useSearchParams()
  //setParam({ name:'alien' , age: 29  })  //可以设置 url 中 param 信息
  return (
    <svg className="zx-iconfont" aria-hidden="true">
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>)
}

