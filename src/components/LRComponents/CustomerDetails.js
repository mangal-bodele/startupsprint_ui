import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PencilSquare } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerDetails() {
  const [users, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [banks, setBanks] = useState([]);
  const [family, setFamily] = useState([]);
  const [documents, setDocuments] = useState([]);
  const { userid } = useParams();

  async function fetchUserData(userid) {
    const result = await axios.get(`http://127.0.0.1:8000/a1/user/${userid}`);
    setUser(result.data);
  }

  async function fetchRelatedData(userid) {
    try {
      const [applicationsResult, banksResult, familyResult, documentResult] = await Promise.all([
        axios.get(`http://127.0.0.1:8000/a1/applications/user/${userid}`),
        axios.get(`http://127.0.0.1:8000/a1/banks/user/${userid}`),
        axios.get(`http://127.0.0.1:8000/a1/familys/user/${userid}`),
        axios.get(`http://127.0.0.1:8000/a1/documents/user/${userid}`)
      ]);
      setApplications(Array.isArray(applicationsResult.data) ? applicationsResult.data : [applicationsResult.data]);
      setBanks(Array.isArray(banksResult.data) ? banksResult.data : [banksResult.data]);
      setFamily(Array.isArray(familyResult.data) ? familyResult.data : [familyResult.data]);
      setDocuments(Array.isArray(documentResult.data) ? documentResult.data : [documentResult.data]);
    } catch (error) {
      console.error('Error fetching related data:', error);
    }
  }

  useEffect(() => {
    fetchUserData(userid);
    fetchRelatedData(userid);
  }, [userid]);

  const handleVerify = async (document) => {
    if (document.status !== 'done') {
      alert('Document is not in "done" status.');
      return;
    }

    try {
      const applicationId = document.application;
      const application = applications.find(app => app.id === applicationId);

      if (application) {
        await axios.put(`http://127.0.0.1:8000/a1/applications/${applicationId}/`, {
          ...application,
          status: 'document_verified'
        });

        fetchRelatedData(userid);
        alert('Application status updated to "document_verified".');
      } else {
        alert('Related application not found.');
      }
    } catch (error) {
      console.error('Error updating application status:', error);
      alert('Failed to update application status.');
    }
  };

  return (
    <div className='container mt-3'>
      <div className='border border-4 p-3'>
        {users && (
          <>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th colSpan="3" className='text-center bg-primary text-white'>Customer Details</th>
                </tr>
              </thead>
              <tbody className='bg-warning'>
                <tr><td><strong>First Name</strong></td><td>{users.first_name}</td><td></td></tr>
                <tr><td><strong>Last Name</strong></td><td>{users.last_name}</td><td></td></tr>
                <tr><td><strong>Date of Birth</strong></td><td>{users.dob}</td><td></td></tr>
                <tr><td><strong>Email</strong></td><td>{users.email}</td><td></td></tr>
                <tr><td><strong>Gender</strong></td><td>{users.gender}</td><td></td></tr>
                <tr><td><strong>Mobile</strong></td><td>{users.mobile}</td><td></td></tr>
                <tr><td><strong>Permanent Address</strong></td><td>{users.permanent_address}</td><td></td></tr>
                <tr><td><strong>Current Address</strong></td><td>{users.current_address}</td><td></td></tr>
                <tr><td><strong>Photo</strong></td><td><img src={users.photo} alt='photo' width='100' /></td><td></td></tr>
                <tr><td><strong>Signature</strong></td><td><img src={users.signature} alt='signature' width='100' /></td><td></td></tr>
                <tr><td><strong>Role</strong></td><td>{users.role}</td><td></td></tr>
                <tr>
                  <td colSpan='3' style={{ textAlign: 'right' }}>
                    <button className='btn-sm btn btn-danger' data-bs-toggle="collapse" data-bs-target=".accordion-collapse">View Details <PencilSquare /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        <div className="accordion mt-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Applications
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {applications.map((obj2) => (
                  <table className='table table-bordered' key={obj2.id}>
                    <thead>
                      <tr>
                        <th colSpan="2" className='text-center bg-primary text-white'>Application Details</th>
                      </tr>
                    </thead>
                    <tbody className='bg-warning'>
                      <tr><td><strong>Aadhaar No:</strong></td><td>{obj2.aadhaar_no}</td></tr>
                      <tr><td><strong>PAN No:</strong></td><td>{obj2.pan_no}</td></tr>
                      <tr><td><strong>Type of Employment:</strong></td><td>{obj2.type_of_employment}</td></tr>
                      <tr><td><strong>Business Title:</strong></td><td>{obj2.business_title}</td></tr>
                      <tr><td><strong>Business Type:</strong></td><td>{obj2.business_type}</td></tr>
                      <tr><td><strong>Business Address:</strong></td><td>{obj2.business_address}</td></tr>
                      <tr><td><strong>GST Registration No:</strong></td><td>{obj2.gst_registration_no}</td></tr>
                      <tr><td><strong>Business License No:</strong></td><td>{obj2.business_license_no}</td></tr>
                      <tr><td><strong>Expected Average Annual Turnover:</strong></td><td>{obj2.expected_average_annual_turnover}</td></tr>
                      <tr><td><strong>Years in Current Business:</strong></td><td>{obj2.years_in_current_business}</td></tr>
                      <tr><td><strong>Collateral:</strong></td><td>{obj2.collateral}</td></tr>
                      <tr><td><strong>Status:</strong></td><td>{obj2.status}</td></tr>
                      <tr><td><strong>Application Time:</strong></td><td>{obj2.application_timestamp}</td></tr>
                      <tr><td><strong>Remark:</strong></td><td>{obj2.remark}</td></tr>
                      <tr><td><strong>Credit Score:</strong></td><td>{obj2.credit_score}</td></tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Banks
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {banks.map((obj3) => (
                  <table className='table table-bordered' key={obj3.userid}>
                    <thead>
                      <tr>
                        <th colSpan="2" className='text-center bg-primary text-white'>Bank Details</th>
                      </tr>
                    </thead>
                    <tbody className='bg-warning'>
                      <tr><td><strong>Bank Name:</strong></td><td>{obj3.bank_name}</td></tr>
                      <tr><td><strong>Account Number:</strong></td><td>{obj3.account_number}</td></tr>
                      <tr><td><strong>IFSC Code:</strong></td><td>{obj3.ifsc_code}</td></tr>
                      <tr><td><strong>Passbook Copy:</strong></td><td><img src={obj3.passbook_copy} alt='passbook_copy' width='100' /></td></tr>
                      <tr><td><strong>Bank Address:</strong></td><td>{obj3.bank_address}</td></tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Family
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {family.map((obj4) => (
                  <table className='table table-bordered' key={obj4.userid}>
                    <thead>
                      <tr>
                        <th colSpan="2" className='text-center bg-primary text-white'>Family Details</th>
                      </tr>
                    </thead>
                    <tbody className='bg-warning'>
                      <tr><td><strong>Father Name:</strong></td><td>{obj4.father_name}</td></tr>
                      <tr><td><strong>Father Profession:</strong></td><td>{obj4.father_profession}</td></tr>
                      <tr><td><strong>Father Income:</strong></td><td>{obj4.father_income}</td></tr>
                      <tr><td><strong>Father Contact:</strong></td><td>{obj4.father_contact}</td></tr>
                      <tr><td><strong>Mother Name:</strong></td><td>{obj4.mother_name}</td></tr>
                      <tr><td><strong>Mother Profession:</strong></td><td>{obj4.mother_profession}</td></tr>
                      <tr><td><strong>Mother Income:</strong></td><td>{obj4.mother_income}</td></tr>
                      <tr><td><strong>Mother Contact:</strong></td><td>{obj4.mother_contact}</td></tr>
                      <tr><td><strong>Marital Status:</strong></td><td>{obj4.marital_status}</td></tr>
                      <tr><td><strong>Spouse Name:</strong></td><td>{obj4.spouse_name}</td></tr>
                      <tr><td><strong>Spouse Profession:</strong></td><td>{obj4.spouse_profession}</td></tr>
                      <tr><td><strong>Spouse Income:</strong></td><td>{obj4.spouse_income}</td></tr>
                      <tr><td><strong>Spouse Contact:</strong></td><td>{obj4.spouse_contact}</td></tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Documents
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {documents.map((obj5) => (
                  <table className='table table-bordered' key={obj5.id}>
                    <thead>
                      <tr>
                        <th colSpan="2" className='text-center bg-primary text-white'>Document Details</th>
                      </tr>
                    </thead>
                    <tbody className='bg-warning'>
                      <tr><td><strong>Application:</strong></td><td>{obj5.application}</td></tr>
                      <tr><td><strong>Aadhaar Card:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.aadhaar_card}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>PAN Card:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.pan_card}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Business Address Proof:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.business_address_proof_or_copy_of_rent_agreement}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Electricity Bill:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.electricity_bill}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>MSME Certificate:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.msme_certificate}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>GST Certificate:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.gst_certificate}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Udyog Aadhaar Registration:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.udyog_aadhaar_registration}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Business License:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.business_license}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Business Plan:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.business_plan_or_proposal}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>ITR with Balance Sheet:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.three_year_itr_with_balance_sheet}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Collateral Document:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.collateral_document}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Stamp Duty:</strong></td><td><a href={`http://127.0.0.1:8000/a1${obj5.stamp_duty}`} target='_blank' rel='noopener noreferrer'>View</a></td></tr>
                      <tr><td><strong>Status:</strong></td><td>{obj5.status}</td></tr>
                      <tr><td><strong>Response Timestamp:</strong></td><td>{obj5.response_timestamp}</td></tr>
                      <tr><td><strong>Remark:</strong></td><td>{obj5.remark}</td></tr>
                      <tr>
                        <td colSpan='2' style={{ textAlign: 'right' }}>
                          <button className='btn-sm btn btn-danger' onClick={() => handleVerify(obj5)}>Verify</button>&nbsp;
                         </td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
