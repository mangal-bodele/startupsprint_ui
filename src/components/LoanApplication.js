import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ApplicationTable = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/a1/application/')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the applications!', error);
      });
  }, []);

  return (
    <div>
      <center><h2>Applications</h2></center>
      <br/>
      <table className='table table-bordered border-primary p-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Eamil</th>
            <th>Aadhaar No</th>
            <th>PAN No</th>
            <th>Employment Type</th>
            <th>Business Title</th>
            <th>Business Type</th>
            <th>Business Address</th>
            <th>GST Registration No</th>
            <th>Business License No</th>
            <th>Expected Annual Turnover</th>
            <th>Years in Business</th>
            <th>Collateral</th>
            <th>Status</th>
            <th>Application Timestamp</th>
            <th>Remark</th>
            <th>Credit Score</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.useremail}</td>
              <td>{application.aadhaar_no}</td>
              <td>{application.pan_no}</td>
              <td>{application.type_of_employment}</td>
              <td>{application.business_title}</td>
              <td>{application.business_type}</td>
              <td>{application.business_address}</td>
              <td>{application.gst_registration_no}</td>
              <td>{application.business_license_no}</td>
              <td>{application.expected_average_annual_turnover}</td>
              <td>{application.years_in_current_business}</td>
              <td>{application.collateral}</td>
              <td>{application.status}</td>
              <td>{new Date(application.application_timestamp).toLocaleString()}</td>
              <td>{application.remark}</td>
              <td>{application.credit_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
     <center> <NavLink to='/table'><button type='submit' className="btn btn-primary">show particular data</button></NavLink></center>
    </div>
  );
};

export default ApplicationTable;
