import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
//here we write all the routes possible in the webpage
//and we will import the layout we made
//all the components will show up as they are called in layout.
const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path:"about",
      element: <About />
    },
    {
      path:"contactus",
      element: <ContactUs />
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

//adding routerProvider which passes a value router in ehich router object is stored
//routerProvider router = {router}
//now we will define this router object
//const router = createBrowserRouter([
// {
//  path: "/",
//  element: <layout />
//  children:[{},{}]
//can pass multiple childern
// }
//])