import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePageComponent from '../components/HomePageComponent'
import LoginComponent from '../components/LoginComponent'

import CustomerDashBoard from '../components/CustomerComponents/CustomerDashBoard'
import CustomerHomePage from '../components/CustomerComponents/CustomerHomePage'
import ApplicationGeneration from '../components/CustomerComponents/ApplicationGeneration'
import CustomerRegistration from '../components/CustomerComponents/CustomerRegistration'
import { AdminDashBoard, AdminHomePage, AdminUser,CreateUser } from '../components/AdminComponents'
import AccountHeadDashBoard from '../components/AccountHeadComponent/AccountHeadDashBoard'
import AboutComponents from '../components/AboutComponent'
import SignUpComponent from '../components/SignUpComponent'
import AddStaffForm from '../components/AccountHeadComponent/AddStaffForm'
import ShowStaffMembers from '../components/AccountHeadComponent/ShowStaffForm'

function StartupSprintRoutes() {
  return (
    <>
      <Routes>
          <Route path='' element={<HomePageComponent/>}></Route>
          <Route path='/signup' element={<SignUpComponent/>}></Route>
          <Route path='/login' element={<LoginComponent/>}></Route>
          <Route path='/about' element={<AboutComponents/>}></Route>

          <Route path='/customer' element={<CustomerDashBoard/>}>
              <Route path='customer-home' element={<CustomerHomePage/>}></Route>
              <Route path='register' element={<CustomerRegistration/>}></Route>
              <Route path='application' element={<ApplicationGeneration/>}></Route>
          </Route>

          <Route path='/admin-dashboard' element={<AdminDashBoard/>}>
              <Route path='create-user' element={<CreateUser/>}></Route>
              <Route path='view-users' element={<AdminUser/>}></Route>
              <Route path='home' element={<AdminHomePage/>}></Route>
          </Route>

          <Route path='/accounts-head-dashboard' element={<AccountHeadDashBoard/>}></Route>
          <Route path='/staff' element={<AddStaffForm/>}></Route>
          <Route path='/show' element={<ShowStaffMembers/>}></Route>
      </Routes>
    
    </>
    
  )
}

export default StartupSprintRoutes