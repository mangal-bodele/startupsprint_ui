import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShowDocuments() {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/a1/documents/');
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    }

    fetchDocuments();
  }, []);

  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Uploaded Documents</h1>
      {documents.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Application</th>
              <th>Aadhaar Card</th>
              <th>PAN Card</th>
              <th>Business Address Proof</th>
              <th>Electricity Bill</th>
              <th>MSME Certificate</th>
              <th>GST Certificate</th>
              <th>Udyog Aadhaar Registration</th>
              <th>Business License</th>
              <th>Business Plan/Proposal</th>
              <th>Three Year ITR</th>
              <th>Collateral Document</th>
              <th>Stamp Duty</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              
              <tr key={index}>
                <td>{doc.application}</td>
                <td><a href={`http://127.0.0.1:8000${doc.aadhaar_card}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.pan_card}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.business_address_proof_or_copy_of_rent_agreement}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.electricity_bill}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.msme_certificate}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.gst_certificate}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.udyog_aadhaar_registration}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.business_license}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.business_plan_or_proposal}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.three_year_itr_with_balance_sheet}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.collateral_document}`} target="_blank" rel="noopener noreferrer">View</a></td>
                <td><a href={`http://127.0.0.1:8000${doc.stamp_duty}`} target="_blank" rel="noopener noreferrer">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No documents found.</p>
      )}
      <button className="btn btn-primary mt-3" onClick={() => navigate('/customer/upload')}>Upload New Documents</button>
    </div>
  );
}

export default ShowDocuments;
