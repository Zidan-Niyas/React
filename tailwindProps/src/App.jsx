import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let newObj = {
        username: "Muhammed Zidan",
        age: 21
    }

    let newArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl hover:cursor-pointer hover:text-white hover:bg-black mb-4' >Tailwind Test</h1>
      <Card name="zidan" btnText="View Profile" />
      <Card name="niyas"/>
    </>
  )
}

export default App
