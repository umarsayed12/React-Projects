import { useState } from 'react'
import './App.css'
import Card from './Components/Cards'

function App() {
  

  return (
    <div className='flex gap-5'>
      <Card brand_name = "Macbook"/>
      <Card brand_name = "HP"/>
      <Card brand_name = "Lenovo"/>
    </div>
  )
}

export default App
