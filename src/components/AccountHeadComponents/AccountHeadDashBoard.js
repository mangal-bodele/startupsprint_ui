// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';

// function Show() {
//     const [customers, setCustomers] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     async function fetchData() {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/');
//             setCustomers(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     return (
//         <>
//             {customers.map(customer => (
//                 <div key={customer.id} className="container mt-4 border p-3 bg-light shadow">
//                     <h1 className="text-center">Customer Detail</h1>
//                     <div className="row mt-3">
//                         <div className="col">
//                             <h2 className="text-center">Customer Details</h2>
//                             <p>Customer Id: {customer.id}</p>
//                             <p>First Name: {customer.first_name}</p>
//                             <p>Last Name: {customer.last_name}</p>
//                             <p>Date of Birth: {customer.dob}</p>
//                             <p>Gender: {customer.gender}</p>
//                             <p>Email: {customer.email}</p>
//                             <p>Current Address: {customer.current_address}</p>
//                             <p>Permanent Address: {customer.permanent_address}</p>
//                             <p>Photo: {customer.photo}</p>
//                             <p>Signature: {customer.signature}</p>
//                             <p>Date Joined: {customer.date_joined}</p>
//                         </div>
//                         <div className="col">
//                             <h2 className="text-center">Bank Details</h2>
//                             {customer.banks.map(bank => (
//                                 <div key={bank.id}>
//                                     <NavLink to={`/CustomerComponents/UserDetail/${bank.id}`}>
//                                         <button className="bg-warning mt-3 me-3">Edit</button>
//                                     </NavLink>
//                                     <p>Bank Id: {bank.id}</p>
//                                     <p>Bank Name: {bank.bank_name}</p>
//                                     <p>Account Number: {bank.account_number}</p>
//                                     <p>IFSC Code: {bank.ifsc_code}</p>
//                                     <p>Passbook Copy: {bank.passbook_copy}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <hr />
//                     <div>
//                         <h2 className="text-center">Loan Details</h2>
//                         <p>Disbursement Information:</p>
//                         <p>Paid Installments:</p>
//                         <ul>
//                             {customer.paid_installments.map(installment => (
//                                 <li key={installment.id}>Installment Number: {installment.installment_no}, Amount: {installment.amount}, Date Paid: {installment.date_paid}</li>
//                             ))}
//                         </ul>
//                         <p>Unpaid Installments:</p>
//                         <ul>
//                             {customer.unpaid_installments.map(installment => (
//                                 <li key={installment.id}>Installment Number: {installment.installment_no}, Amount: {installment.amount}, Due Date: {installment.due_date}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default Show;
