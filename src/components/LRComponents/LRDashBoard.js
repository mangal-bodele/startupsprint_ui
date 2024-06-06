import React from 'react'
import { Outlet } from 'react-router-dom'
import LRNavbar from './LRNavbar'

function LRDashBoard() {
  return (
    <>
      <LRNavbar/>
      <Outlet/>
    </>
  )
}

export default LRDashBoard