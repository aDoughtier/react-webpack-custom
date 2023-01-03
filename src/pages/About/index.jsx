import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, selectPage1 } from '@/store//slice/page1'
import './index.scss'

export default function About(props) {
  // const count = useSelector(state => { console.log(state); return state.page1.count })
  const { count } = useSelector(selectPage1)
  const dispatch = useDispatch()
  const {

  } = props
  return (
    <div className="zx-about">
      about
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}  //会传递给action对象的payload属性中
        >
          IncrementByMount
        </button>
      </div>
    </div>)
}

