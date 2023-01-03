import React, { useState } from 'react'
import { DatePicker, message, Button } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import './index.scss'


export default function Home(props) {
  // console.log(props)
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <div className="zx-home">
      <ul style={{ float: 'left' }}>
        <li>
          <NavLink
            to="c1"
            children="C1"
            // end 属性表示子路由高亮时此路由不再高亮，类名如果依然是 active 则依然有效
          />
        </li>
        <li>
          <NavLink
            to="c2"
            style={({ isActive }) => { console.log(isActive); return isActive ? { color: 'red' } : {} }}
          >
            C2
          </NavLink>
        </li>
      </ul>
      <DatePicker onChange={handleChange} />
      <Button>按钮</Button>
      <div style={{ marginTop: 16 }}>
        当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
      </div>
      <hr />
      <Outlet />
    </div>)
}

