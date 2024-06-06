// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import CustomerNavbar from './CustomerNavBar'

// function CustomerDashBoard() {
//   return (
//     <div>
//       <h2>CustomerDashBoard</h2>
//       <CustomerNavbar/>
//       <Outlet/>
//     </div>
//   )
// }

// export default CustomerDashBoard


// import axios from 'axios'
// import React, { useEffect,useState } from 'react'
// import { NavLink } from 'react-router-dom'




// function CustomerDetail() {
//   const [customers,setCustomers]= useState([])

//     async function fetchData()
//     {
//         let result = await axios.get('http://127.0.0.1:8000/customer/')
//         console.log(result.data)
//         setCustomers(result.data)
//     }
    
//     useEffect(()=>{fetchData()},[])



//   return (
//     <>





//     {
//       customers.map((customer)=>{
//         return(
//           <>
          

          
//           <h1 className='text-center mt-6'>Customer Detail</h1>
//              <div  className='mt-3 container boder p-3 bg-light shadow' >
//                   <div class="row">
                    

//                       <div class="col">
//                             <div className='mt-6'>
//                             <th className='text-center mt-6'>Customer Detail</th>
//                             <div className='mt-3'>
//                             {/* <NavLink to={/customer/update/${customer.id}}><button className='bg bg-warning  me-3'>Edit</button></NavLink> */}
//                               <p>Customer Id : {customer.id}</p>
                             
//                               <p >First Name : {customer.first_name} </p>
//                               <p > Last Name : {customer.last_name} </p>
//                               <p >Date of Birth : {customer.dob} </p>
//                               <p >Gender: {customer.gender} </p>
//                               <p >Email: {customer.email} </p>
//                               <p >Current Address: {customer.current_address} </p>
//                               <p >Permanent Address: {customer.permanent_address} </p>
//                               <p >Photo: {customer.photo} </p>
//                               <p >Signature: {customer.signature} </p>
//                               <p >Date Joined: {customer.date_joined} </p>
                            
                           
//                             </div>
                              
//                         </div>
                      
//                       </div>
                      
                      
// </div>
//                       <div class="col">
//                              <th className='text-center mt-6'>Bank Detail</th>
//                              { 
            
//                     customer.banks.map((bank)=>{
//                         return(
//                           <>
//                            <NavLink to={/CustomerComponents/FamilyDetail/${bank.id}}><button className='bg bg-warning mt-3 me-3'> Edit</button></NavLink>
                          
                          
//                             <p>Bank id: {bank.id}</p>
//                             <p>Bank Name : {bank.bank_name}</p>
//                             <p>Account Number : {bank.account_number}</p>
//                             <p>IFSC  Code : {bank.ifsc_code}</p>
//                             <p>Passbook copy : {bank.passbook_copy}</p>
                            


//                           </>
//                         )
//                     })
//           }
                             
//                        </div>
//                        <hr></hr>
//                   </div>
//               </div>
        
//            </>
//         )
//       })
//     }
         
    
//     </>
//   )
// }

// export default CustomerDetail;