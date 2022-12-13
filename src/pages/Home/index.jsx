import React, { useState } from 'react'
import { DatePicker, message, Button } from 'antd'
import json from '../../../demo.json'
import './index.scss'


export default function Home(props) {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
    console.log('json', json)
  };
  return (
    <div className="zx-home">
      <DatePicker onChange={handleChange} />
      <Button>按钮</Button>
      <div style={{ marginTop: 16 }}>
        当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
      </div>
    </div>)
}

