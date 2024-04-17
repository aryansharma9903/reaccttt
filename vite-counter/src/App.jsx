import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 5;
  const addValue = () => {
    console.log("value added");
    counter = counter + 1;
    console.log(counter);
  }
  const decreaseValue = () => {
    console.log("value decreased");
    counter = counter - 1;
    console.log(counter);
  }
  return (
    <>
      <h1>vite-counter</h1>
      <h2>counter value: {counter} </h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
