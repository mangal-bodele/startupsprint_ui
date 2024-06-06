import { Route,Routes } from "react-router-dom"
import SignUpComponents from "../components/SignUpComponents"
import HomePageComponents from "../components/HomePageComponents"
import LoginComponent from "../components/LoginComponents"
import AboutComponents from "../components/AboutComponents"
import CustomerDashBoard from "../components/CustomerComponents/CustomerDashBoard"
import CustomerHomePage from "../components/CustomerComponents/CustomerHomePage"
import  CustomerRegistration from "../components/CustomerComponents/CustomerRegistration"
import  ApplicationGeneration from "../components/CustomerComponents/ApplicationGeneration"
import  Family from "../components/CustomerComponents/Family"
import Show from "../components/CustomerComponents/Show"
import FeedBack from "../components/CustomerComponents/FeedBack"
import ShowFeedback from "../components/AdminComponents/ShowFeedback"
import AdminDashBoard from "../components/AdminComponents/AdminDashBoard"
import Loan from "../components/CustomerComponents/loan"
import DisburstmentShow from "../components/AdminComponents/DisburstmentShow"
import ShowLoan from "../components/CustomerComponents/ShowLoan"


function StartupSprintRoutes() {
  return (
    <>
      <Routes>
          <Route path='/home' element={<HomePageComponents/>}></Route>
          <Route path='/signup' element={<SignUpComponents/>}></Route>
          <Route path='/login' element={<LoginComponent/>}></Route>
          <Route path='/about' element={<AboutComponents/>}></Route>
          <Route path='/customer' element={<CustomerDashBoard/>}>
              <Route path='customer-home' element={<CustomerHomePage/>}></Route>
              <Route path='register' element={<CustomerRegistration/>}></Route>
              <Route path='application' element={<ApplicationGeneration/>}></Route>
              <Route path='family' element={<Family/>}></Route>
              <Route path='show' element={<Show/>}></Route>
              <Route path='feedback' element={<FeedBack/>}></Route>
              <Route path='loan' element={<Loan/>}></Route>
              <Route path='showloan' element={<ShowLoan/>}></Route>
         </Route>
           <Route path='/admin' element={<AdminDashBoard/>}>
              <Route path='showfeedback' element={<ShowFeedback/>}></Route>
              <Route path='disburstmentshow' element={<DisburstmentShow/>}></Route>
          </Route> 
      </Routes>
    </>
  )
}

export default StartupSprintRoutes