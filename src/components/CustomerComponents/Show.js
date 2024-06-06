import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Show() {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/a1/family/');
      setFamilies(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  return (
    <div className="container mt-5 p-3 mb-2 bg-info text-dark border border-info">
      <h1 className="mb-4">Family Details</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Father Name</th>
            <th>Father Profession</th>
            <th>Father Income</th>
            <th>Father Contact</th>
            <th>Mother Name</th>
            <th>Mother Profession</th>
            <th>Mother Income</th>
            <th>Mother Contact</th>
            <th>Marital Status</th>
            <th>Spouse Name</th>
            <th>Spouse Profession</th>
            <th>Spouse Income</th>
            <th>Spouse Contact</th>
          </tr>
        </thead>
        <tbody>
          {families.map((family) => (
            <tr key={family.id}>
              <td>{family.user}</td>
              <td>{family.father_name}</td>
              <td>{family.father_profession}</td>
              <td>{family.father_income}</td>
              <td>{family.father_contact}</td>
              <td>{family.mother_name}</td>
              <td>{family.mother_profession}</td>
              <td>{family.mother_income}</td>
              <td>{family.mother_contact}</td>
              <td>{family.marital_status}</td>
              <td>{family.spouse_name}</td>
              <td>{family.spouse_profession}</td>
              <td>{family.spouse_income}</td>
              <td>{family.spouse_contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="customer/family" className="btn btn-primary">Add New Family</Link>
    </div>
  );
}

export default Show;
