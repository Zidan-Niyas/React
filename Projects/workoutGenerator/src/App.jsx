import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full min-h-screen bg-[rgb(255,242,225)]/50'>
        <h1 className='text-3xl text-center bg-red-500 py-6 bg-[rgb(234,216,192)]/50'>Workout Generator</h1>
        <div className='grid grid-cols-2 gap-4 my-4 bg-[rgb(209,187,158)]/50 mx-5 rounded-lg'>
        <form>
          <div className='flex flex-col mx-2 py-4'>
          <h1 className='text-2xl py-3 px-3'>Choose your preferences : </h1>
            <div className='flex flex-row py-3 mx-3'>
              <h4 className='text-lg mx-3'>Location :</h4>
              <label className='cursor-pointer'><input type="radio" name='Location' className='mx-3'/>Home</label>
              <label className='cursor-pointer'><input type="radio" name='Location' className='mx-3' />Gym</label>
            </div>
            <div className='flex flex-col py-3 px-3'>
              <h4 className='text-lg mx-3'>Difficulty : </h4>
              <label className='cursor-pointer'><input type="radio" name='difficulty' className='mx-3'/>Beginner</label>          
                <label className='cursor-pointer'><input type="radio" name='difficulty' className='mx-3' />Intermediate</label> 
                <label className='cursor-pointer'><input type="radio" name='difficulty' className='mx-3'/>Advanced</label>
            </div>
            <div className='flex flex-col py-3 px-3'>
            <h4 className='text-lg mx-3'>Split : </h4>
              <label className='cursor-pointer'><input type="radio" name='split' className='mx-3'/>Full Body (3 days a week)</label>
                <label className='cursor-pointer'><input type="radio" name='split' className='mx-3' />Bro Split (5 days a week)</label>
                <label className='cursor-pointer'><input type="radio" name='split' className='mx-3'/>PPL (6 days a week)</label>
            </div>
            <div>
              <input type="submit" value="Generate Workout" className='my-5 mx-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full cursor-pointer'/>
            </div>
          </div>
          </form> 
            

          <div className='flex flex-col mx-2 py-4 bg-[rgb(167,146,119)]/50 '>
            <h1 className='text-2xl py-3 px-3'>Workout Routine : </h1>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App
