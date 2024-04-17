import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>hello this is implemented in a function</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
  //app is a function returning html elements, so it can be implemented ads a regular function like app(),
  //but the best practice is to use the basic jsx syntax <App/
)
//1) the function name should be capital to prevent errors
//2) the file should be jsx format in vite+react app