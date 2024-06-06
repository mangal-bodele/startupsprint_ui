import React from 'react'
import LSONavbar from './LSONavbar'
import { Outlet } from 'react-router-dom'

function LSODashBoard() {
  return (
    <>
        <LSONavbar/>
        <Outlet/>
    </>
    
  )
}

export default LSODashBoard