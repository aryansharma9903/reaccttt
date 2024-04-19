import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)//hooks
  //where counter is the variable
  //setCounter is function responsible for changing the value of counter in front end


  //let counter = 5;
  const addValue = () => {
    console.log("value added");
    counter = counter + 1;
    if (counter == 21) {
      counter = counter - 1;
    }
    console.log(counter);
    setCounter(counter)
  }
  const decreaseValue = () => {
    console.log("value decreased");
    counter = counter - 1;
    if (counter == 0) {
      counter = counter + 1;
    }
    console.log(counter);
    setCounter(counter);
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
//for ui updation, ie to chnage the value of the variabkle in the frontend we use react hooks
//import { useState } from 'react'
//effect state
//custom hooks

export default App
