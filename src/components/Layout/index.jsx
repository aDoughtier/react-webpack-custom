import React from 'react'
import ZxHeader from './ZxHeader'
import ZxFooter from './ZxFooter'
import './index.scss'

export default function Layout(props) {
  const {

  } = props
  return (
    <div className="zx-layout">
      <ZxHeader />
      <div>main</div>
      <ZxFooter />
    </div>)
}

