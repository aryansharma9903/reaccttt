import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Aryan Sharma",
    age: 20
  }
  let myArr = [ 1, 2, 3 ]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card name= "oliioo" obj={myobj} arr= {myArr} btntext = "click me"/>
      <Card name="delba" btntext = "view my profile"/>
    </>
  )
}
// IMPORTANT!!!
// we can use props to display such multiple cards with different variable or names or images
// for different names in card, any value we pass in the function (while calling) will be available in 
// the props object
// ex) <Card username="aryan" />,  itts that easy
// but if we want to pass an object rather than just a variable,
// then we declare an object first, and then inject that into the function call
// <card obj = {myobj} />, where myobj is the object we declared.
// we can do the same if we want to pass an array

export default App
