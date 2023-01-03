import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import '@/assets/fonts/iconfont.css',如果只symbol引入的话，不需要这个
import Router from '@/router'
import store from '@/store'
import { Provider } from 'react-redux' //引入Provider,智能给容器组件注入store
import '@/assets/css/common.scss'
import 'dayjs/locale/zh-cn';//汉化日期

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ConfigProvider>
)