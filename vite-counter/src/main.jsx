import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //important for interviewss
  //react fibre
  //this create root method creates a dom like structure behind the scene, like dom in js (browser's dom)
  //react use react fibre to update virtual dom.
  //react use to update immediately if any call is made to the dom. but 
  //then,further only the relevant call are now made to dom, time delay or priority can be set.
  //react fibre has the ability to assign priorities to different updates or call.
  //reconcillation - imp - comparison between virtual dom and browser's dom.
  //for more search google https://github.com/acdlite/react-fiber-architecture

  //IMPORTANT!
  //when you render a React application, a tree of nodes that describes the app is generated and saved in 
  //memory. This tree is then flushed to the rendering environment — for example, in the case of a 
  //browser application, it's translated to a set of DOM operations. When the app is updated 
  //(usually via setState), a new tree is generated. The new tree is diffed with the previous tree to 
  //compute which operations are needed to update the rendered app.

  //The updates are applied to the Virtual DOM first, which serves as a lightweight, in-memory representation 
  //of the actual browser DOM.
  //Once the updates are applied to the Virtual DOM, React Fiber enters the commit phase, where it applies
  // the changes to the actual browser DOM.


  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
