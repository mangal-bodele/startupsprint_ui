import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageComponent from '../components/HomePageComponent';
import LoginComponent from '../components/LoginComponent';
import CustomerDashBoard from '../components/CustomerComponents/CustomerDashBoard';
import CustomerHomePage from '../components/CustomerComponents/CustomerHomePage';
import ApplicationGeneration from '../components/CustomerComponents/ApplicationGeneration';
import CustomerRegistration from '../components/CustomerComponents/CustomerRegistration';
import { AdminDashBoard, AdminHomePage, AdminUsers, CreateUser } from '../components/AdminComponents';
import { LSODashBoard, LoanForm } from '../components/LSOComponents';
import { LRDashBoard, LoanApplications } from '../components/LRComponents';
import CustomerDetails from '../components/LRComponents/CustomerDetails'; // Importing CustomerDetails correctly
import AccountHeadDashBoard from '../components/AccountHeadComponents/AccountHeadDashBoard';
import AboutComponents from '../components/AboutComponent';
import SignUpComponent from '../components/SignUpComponent';
import EmiCalculator from '../components/EmiCalculator';
import Document from '../components/CustomerComponents/UploadDocuments';
import EnquiryForm from '../components/EnquiryForm';

function StartupSprintRoutes() {
  return (
    <Routes>
      <Route path='' element={<HomePageComponent />} />
      <Route path='/signup' element={<SignUpComponent />} />
      <Route path='/login' element={<LoginComponent />} />
      <Route path='/about' element={<AboutComponents />} />
      <Route path='/enquiry' element={<EnquiryForm />} />
      <Route path='/emi-calculator' element={<EmiCalculator />} />
      <Route path='/customer' element={<CustomerDashBoard />}>
        <Route path='home' element={<CustomerHomePage />} />
        <Route path='upload' element={<Document />} />
        <Route path='register' element={<CustomerRegistration />} />
        <Route path='application' element={<ApplicationGeneration />} />
      </Route>
      <Route path='/admin-dashboard' element={<AdminDashBoard />}>
        <Route path='create-user' element={<CreateUser />} />
        <Route path='view-users' element={<AdminUsers />} />
        <Route path='admin-home' element={<AdminHomePage />} />
      </Route>
      <Route path='/LSO-dashboard' element={<LSODashBoard />}>
        <Route path='loan-form' element={<LoanForm />} />
      </Route>
      <Route path='/LR-dashboard' element={<LRDashBoard />}>
        <Route path='loan-applications' element={<LoanApplications />} />
        <Route path='customer-details/:userid' element={<CustomerDetails />} /> {/* Updated path with userId parameter */}
      </Route>
      <Route path='/accounts-head-dashboard' element={<AccountHeadDashBoard />} />
    </Routes>
  );
}

export default StartupSprintRoutes;
