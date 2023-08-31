import React, { useEffect } from 'react'
import error from '../../img/error.jpg'
import { useNavigate } from 'react-router-dom'

export const Eror = () => {

  let navig = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navig('/')
    }, 3000);
  },[])

  return (
    <div className='error'>
      <img src={error} alt="" />
    </div>
  )
}
