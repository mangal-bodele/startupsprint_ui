import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

function AdminDashBoard() {
  return (
    <>
    <h2>AdminDashBoard</h2>
    <AdminNavbar/>
    <Outlet/>
    </>
  )
}

export default AdminDashBoard