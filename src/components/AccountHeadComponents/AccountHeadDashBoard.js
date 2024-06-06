import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountHeadNavbar from './AccountHeadNavbar'

function AccountHeadDashBoard() {
  return (
    <>
    <AccountHeadNavbar/>
    <Outlet/>
    </>
  )
}

export default AccountHeadDashBoard