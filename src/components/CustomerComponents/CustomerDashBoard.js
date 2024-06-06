import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerNavbar from './CustomerNavBar'

function CustomerDashBoard() {
  return (
    <>
      <CustomerNavbar/>
      <Outlet/>
    </>
  )
}

export default CustomerDashBoard