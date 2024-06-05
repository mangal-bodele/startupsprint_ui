import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowStaffMembers() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/staff/');
        setStaffMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching staff members:', error);
        setLoading(false);
      }
    };

    fetchStaffMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-3'>
      <center><h2><u><b>STAFF MEMBERS</b></u></h2></center>
      <table className='table table-info border-danger '>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Permanent Address</th>
            <th>Current Address</th>
            <th>Role</th>
            <th>Photo</th>
            <th>Signature</th>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.email}</td>
              <td>{staff.first_name}</td>
              <td>{staff.last_name}</td>
              <td>{staff.mobile}</td>
              <td>{staff.dob}</td>
              <td>{staff.gender}</td>
              <td>{staff.permanent_address}</td>
              <td>{staff.current_address}</td>
              <td>{staff.role}</td>
              <td><img src={`http://127.0.0.1:8000${staff.photo}`} width={150} height={100} alt="Staff" /></td>
              <td><img src={`http://127.0.0.1:8000${staff.signature}`} width={150} height={100} alt="Signature" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowStaffMembers;
