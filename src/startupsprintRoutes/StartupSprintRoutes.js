import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ApplicationGeneration, CustomerDashBoard, CustomerHomePage, CustomerRegistration } from '../components/CustomerComponents'
import EmiCalculator from '../components/EMICalculator';
import VerifiedCustomerTable from '../components/ApplicationInformation/VerifiedCustomerTable';

function StartupSprintRoutes() {
  return (
    <Routes>
        <Route path='/emi-calculator' element={<EmiCalculator/>}/>
        <Route path='/verify' element={<VerifiedCustomerTable/>}/>
        <Route path='/customer' element={<CustomerDashBoard/>}>
            <Route path='' element={<CustomerHomePage/>}></Route>
            <Route path='register' element={<CustomerRegistration/>}></Route>
            <Route path='application' element={<ApplicationGeneration/>}></Route>
        </Route>
    </Routes>
  )
}

export default StartupSprintRoutes;