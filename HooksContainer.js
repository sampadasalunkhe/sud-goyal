import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksContainer () {
  const numOfItems = useSelector(state => state.cake.numOfItems)
  const dispatch = useDispatch()
  return (
    <>
        <div className='grid grid-cols-4 gap-4'>
          <div>
       <input className='mt-4' type="text" placeholder="Search.."></input>
       <div>
      <h2>Number of items - {numOfItems} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Item + </button>
      </div>
      </div>
    </div>
    </>

  )
}

export default HooksContainer
