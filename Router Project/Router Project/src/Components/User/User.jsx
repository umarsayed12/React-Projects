import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div className='bg-violet-400 text-white text-3xl text-center'> Hello, User : {id}</div>
  )
}

export default User