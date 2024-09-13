import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './features/Home'
import RouterLayout from './ui/RouterLayout'
import Footer from './ui/Footer'
import Signup from './features/auth/Signup'
import Login from './features/auth/Login'

const router = createBrowserRouter([{
  path:'/',element:<RouterLayout/>,
  children:[
    {index:true,element:<Home/>},
    {path:'footer',element:<Footer/>},
    {path:'signup',element:<Signup/>},
    {path:'login',element:<Login/>},

  ]
}])
const App = () => {

  return <RouterProvider router = {router}/>
}

export default App
