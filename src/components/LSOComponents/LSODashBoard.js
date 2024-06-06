import React from 'react'
import LSONavbar from './LSONavbar'
import { Outlet } from 'react-router-dom'

function LSODashBoard() {
  return (
    <>
        <h2>LSODashBoard</h2>
        <LSONavbar/>
        <Outlet/>
    </>
    
  )
}

export default LSODashBoard