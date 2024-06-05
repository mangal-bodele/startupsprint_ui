import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ApplicationGeneration, CustomerDashBoard, CustomerHomePage, CustomerRegistration} from '../components/CustomerComponents'
import HomePageComponent from '../components/HomePageComponent'
import LoginComponent from '../components/LoginComponent'
import CustomerInfo from '../components/CustomerComponents/CustomerInfo'
import CustomerInfoUpdate from '../components/CustomerComponents/CustomerInfoUpdate'


function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path='' element={<HomePageComponent/>}></Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        <Route path='/customer' element={<CustomerDashBoard/>}>
            <Route path='' element={<CustomerHomePage/>}></Route>
            <Route path='register' element={<CustomerRegistration/>}></Route>
            <Route path='info' element={<CustomerInfo/>}></Route>
            <Route path='update' element={<CustomerInfoUpdate/>}></Route>
            <Route path='application' element={<ApplicationGeneration/>}></Route>
        </Route>
    </Routes>
  )
}

export default StartupSprintRoutes