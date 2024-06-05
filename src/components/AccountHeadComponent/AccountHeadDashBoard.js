import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountHeadNavBar from './AccountHeadNavBar'

function AccountHeadDashBoard() {
  return (
    <>
    <h2>AccountHeadDashBoard</h2>
    <AccountHeadNavBar/>
    <Outlet/>
    </>
  )
}

export default AccountHeadDashBoard