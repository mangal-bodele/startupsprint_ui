import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const CustomerInfo = () => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);
  const fetchCustomer = async () => {
    console.log(localStorage.getItem('token'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/customer/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });
      setCustomer(response.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCustomer();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <center>
    //   <h2>Customer Details...</h2>
      
    //   <p>EMAIL: {customer.email}</p>
    //   <p>FIRST NAME: {customer.first_name}</p>
    //   <p>LAST NAME: {customer.last_name}</p>
    //   <p>DOB: {customer.dob}</p>
    //   <p>GENDER: {customer.gender}</p>
    //   <p>PERMANENT ADDRESS: {customer.permanent_address}</p>
    //   <p>CURRENT ADDRESS: {customer.current_address}</p>
    //   <p>PHOTO: {customer.photot}</p>
    //   <p>SIGNATURE: {customer.signature}</p>
    //   {/* Add more fields as needed */}
    //   </center>
    // </div>

<center>
<table class="table table-success table-stripe ">
  <thead>
    <tr>
      <th>EMAIL</th>
      <th>FIRST NAME</th>
      <th>LAST NAME</th>
      <th>DOB</th>
      <th>GENDER</th>
      <th>PERMANENT ADDRESS</th>
      <th>CURRENT ADDRESS</th>
      <th>ROLE</th>
      <th>PHOTO</th>
      <th>SIGNATURE</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
      {
       
            <tr>
              <td>{customer.email}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.dob}</td>
              <td>{customer.gender}</td>
              <td>{customer.permanent_address}</td>
              <td>{customer.current_address}</td>
              <td>{customer.role}</td>
              <td>
                <img src={`http://127.0.0.1:8000/${customer.photo}`} alt='pic'/>
              </td>
              <td>
                <img src={`http://127.0.0.1:8000/${customer.signature}`} alt='sign'/>
              </td>
              <td>
                <NavLink to={`/customer/update`}><button className='btn btn-outline-warning'>UPDATE</button></NavLink>
              </td>
            </tr>
      }
  </tbody>
</table>
</center>
  );
};

export default CustomerInfo;
