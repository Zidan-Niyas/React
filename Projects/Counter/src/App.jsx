import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [value, setValue] = useState(0);

  const increaseValue = () => {
    if (value < 20) {
      setValue(value + 1);
    }
  }

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter Value : {value}</h3>
      <button
        onClick={increaseValue}>
        Increase value</button>
      <button
        onClick={decreaseValue}>
        Decrease value</button>

    </>
  )
}

export default App
