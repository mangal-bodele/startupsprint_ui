import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShowGuarantors() {
  const [guarantors, setGuarantors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGuarantors() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/a1/applications/add-guarantor/');
        setGuarantors(response.data);
      } catch (error) {
        console.error('Error fetching guarantors:', error);
      }
    }

    fetchGuarantors();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Guarantors</h1>
      {guarantors.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Application</th>
              <th>Relation with Customer</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Pin Code</th>
              <th>Mobile</th>
              <th>Profession</th>
              <th>Bank Name</th>
              <th>Current Account No</th>
              <th>IFSC Code</th>
              <th>Photo</th>
              <th>Income Certificate</th>
              <th>Passbook Copy</th>
            </tr>
          </thead>
          <tbody>
            {guarantors.map((guarantor, index) => (
              <tr key={index}>
                <td>{guarantor.application}</td>
                <td>{guarantor.relation_with_customer}</td>
                <td>{guarantor.name}</td>
                <td>{guarantor.dob}</td>
                <td>{guarantor.gender}</td>
                <td>{guarantor.email}</td>
                <td>{guarantor.address}</td>
                <td>{guarantor.city}</td>
                <td>{guarantor.state}</td>
                <td>{guarantor.country}</td>
                <td>{guarantor.pin_code}</td>
                <td>{guarantor.mobile}</td>
                <td>{guarantor.profession}</td>
                <td>{guarantor.bank_name}</td>
                <td>{guarantor.current_account_no}</td>
                <td>{guarantor.ifsc_code}</td>
                <td><a href={`http://127.0.0.1:8000${guarantor.photo}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${guarantor.income_certificate}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${guarantor.passbook_copy}`} target="_blank" rel="noopener noreferrer">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No guarantors found.</p>
      )}
      <button className="btn btn-primary mt-3" onClick={() => navigate('/customer/guarantor')}>Add New Guarantor</button>
    </div>
  );
}

export default ShowGuarantors;
