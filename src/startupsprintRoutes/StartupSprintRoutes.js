import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePageComponent from '../components/HomePageComponent'
import LoginComponent from '../components/LoginComponent'

import CustomerDashBoard from '../components/CustomerComponents/CustomerDashBoard'
import CustomerHomePage from '../components/CustomerComponents/CustomerHomePage'
import ApplicationGeneration from '../components/CustomerComponents/ApplicationGeneration'
import CustomerRegistration from '../components/CustomerComponents/CustomerRegistration'
import { AdminDashBoard, AdminHomePage, AdminUsers, CreateUser } from '../components/AdminComponents'
import { LSODashBoard, LoanForm } from '../components/LSOComponents'
import { CustomerDetails, LRDashBoard, LoanApplications } from '../components/LRComponents'
import AccountHeadDashBoard from '../components/AccountHeadComponents/AccountHeadDashBoard'
import AboutComponents from '../components/AboutComponent'
import SignUpComponent from '../components/SignUpComponent'

function StartupSprintRoutes() {
  return (
    <>
      <Routes>
          <Route path='/home' element={<HomePageComponent/>}></Route>
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
              <Route path='view-users' element={<AdminUsers/>}></Route>
              <Route path='home' element={<AdminHomePage/>}></Route>
          </Route>
          <Route path='/LSO-dashboard' element={<LSODashBoard/>}>
              <Route path='loan-form' element={<LoanForm/>}></Route>
          </Route>
          <Route path='/LR-dashboard' element={<LRDashBoard/>}>
            <Route path='loan-applications' element={<LoanApplications/>}></Route>
            <Route path='customer-details' element={<CustomerDetails/>}></Route>
          </Route>
          <Route path='/accounts-head-dashboard' element={<AccountHeadDashBoard/>}></Route>
      </Routes>
    
    </>
    
  )
}

export default StartupSprintRoutes