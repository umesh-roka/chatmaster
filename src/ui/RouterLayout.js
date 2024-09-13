import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const RouterLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default RouterLayout
