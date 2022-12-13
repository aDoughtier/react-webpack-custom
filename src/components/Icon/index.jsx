import React from 'react'
import './index.scss'
try {
  require('@/assets/fonts/iconfont.js')
} catch (error) {

}

export default function Icon(props) {
  const {
    type
  } = props
  return (
    <svg className="zx-iconfont" aria-hidden="true">
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>)
}

