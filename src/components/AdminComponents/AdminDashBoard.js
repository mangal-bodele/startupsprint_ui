import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminDashBoard() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    </>
  )
}

export default AdminDashBoard