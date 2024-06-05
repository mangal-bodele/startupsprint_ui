import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePageComponent from "../components/HomePageComponent"
import LoanApplication from "../components/LoanApplication"
import ApplicationTable from '../components/ApplicationTable'
import LoginComponent from "../components/LoginComponent"
import CustomerDashBoard from "../components/CustomerComponents/CustomerDashBoard"
import CustomerRegistration from "../components/CustomerComponents/CustomerRegistration"
import Enquire from "../components/CustomerComponents/Enquire"
import ApplicationGeneration from "../components/CustomerComponents/ApplicationGeneration"
import CustomerHomePage from "../components/CustomerComponents/CustomerHomePage"




function StartupSprintRoutes() {
  return (
    <Routes>
      
        <Route path='' element={<HomePageComponent/>}/>
        <Route path='/loan' element={<LoanApplication/>}/>
        <Route path='/table' element={<ApplicationTable/>}/>    
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/customer' element={<CustomerDashBoard/>}>
            <Route path='register' element={<CustomerRegistration/>}/>
            <Route path='application' element={<ApplicationGeneration/>}/>
            <Route path='cust-home' element={<CustomerHomePage/>}/>
            <Route path='enquire' element={<Enquire/>}/>
        </Route>
    </Routes>
  )
}

export default StartupSprintRoutes