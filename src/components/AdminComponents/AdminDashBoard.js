import React from 'react'
import AdminNavBar from './AdminNavBar'
import { Outlet } from 'react-router-dom'

function AdminDashBoard() {
  return (
    <>
    <h2>AdminDashBoard</h2>
    <AdminNavBar/>
    <Outlet/>
    </>
  )
}

export default AdminDashBoard