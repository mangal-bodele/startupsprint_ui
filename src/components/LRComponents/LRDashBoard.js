import React from 'react'
import { Outlet } from 'react-router-dom'
import LRNavbar from './LRNavbar'

function LRDashBoard() {
  return (
    <>
      <h2>LRDashBoard</h2>
      <LRNavbar/>
      <Outlet/>
    </>
  )
}

export default LRDashBoard