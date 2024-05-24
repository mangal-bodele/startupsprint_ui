import React from 'react'
import CustomerNavBar from './CustomerNavBar'
import { Outlet } from 'react-router-dom'

function CustomerDashBoard() {
  return (
    <>
        <CustomerNavBar/>
        <Outlet />
    </>
  )
}

export default CustomerDashBoard