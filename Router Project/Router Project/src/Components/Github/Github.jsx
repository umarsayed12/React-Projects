import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Github() {
    const {user} = useParams()
    const [data,setData] = useState(0)
    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}`)
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
        })
    },[]);
  return (
    <>
    <div className='text-center bg-violet-400 text-3xl'>Github Followers : {data.followers ?data.followers:0}</div>
    <div className='h-1/2 w-1/2 flex justify-center'><img className='rounded-md' src={data.avatar_url}/></div>
    </>
  )
}

export default Github