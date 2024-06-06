import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoanApplications() {
  const { userId } = useParams();
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [filters, setFilters] = useState({
    collateral: '',
    status: '',
    credit_score: ''
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  async function fetchData() {
    const result = await axios.get('http://127.0.0.1:8000/a1/applications/');
    setApplications(result.data);
    setFilteredApplications(result.data);
  }

  const applyFilters = () => {
    const filtered = applications.filter((app) => {
      for (let key in filters) {
        if (key === 'credit_score' && filters[key] !== '') {
          if (filters[key] === 'less' && parseInt(app[key]) >= 750) {
            return false;
          }
          if (filters[key] === 'greater' && parseInt(app[key]) < 750) {
            return false;
          }
        } else if (key === 'status' && filters[key] !== '') {
          if (app[key] !== filters[key]) {
            return false;
          }
        } else if (key === 'collateral' && filters[key] !== '') {
          if (filters[key] === 'Yes' && app[key] !== true) {
            return false;
          }
          if (filters[key] === 'No' && app[key] !== false) {
            return false;
          }
        } else if (filters[key] !== '' && app[key] !== filters[key]) {
          return false;
        }
      }
      return true;
    });
    setFilteredApplications(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleUserClick = async (userId) => {
    if (selectedCustomer && selectedCustomer.id === userId) {
      setSelectedCustomer(null); // Toggle off if the same user is clicked
    } else {
      const result = await axios.get(`http://127.0.0.1:8000/a1/user/${userId}/`);
      setSelectedCustomer(result.data);
    }
  };

  return (
    <div className='container mt-5'>
      <div className="mb-3">
        <h4>Filter Applications</h4>
        <div className="row row-cols-lg-auto g-3 align-items-center">
          {Object.keys(filters).map((key) => (
            <div key={key} className="col">
              {key === 'status' ? (
                <select
                  className="form-select"
                  name={key}
                  value={filters[key]}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Status</option>
                  <option value="generated">Generated</option>
                  <option value="document_verified">Document Verified</option>
                  <option value="sanctioned">Sanctioned</option>
                  <option value="disbursed">Disbursed</option>
                  <option value="rejected">Rejected</option>
                </select>
              ) : key === 'credit_score' ? (
                <select
                  className="form-select"
                  name={key}
                  value={filters[key]}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Credit Score</option>
                  <option value="less">Less than 750</option>
                  <option value="greater">Greater than 750</option>
                </select>
              ) : key === 'collateral' ? (
                <select
                  className="form-select"
                  name={key}
                  value={filters[key]}
                  onChange={handleFilterChange}
                >
                  <option value="">Select Collateral</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              ) : (
                <input
                  type="text"
                  className="form-control"
                  placeholder={`Filter by ${key}`}
                  name={key}
                  value={filters[key]}
                  onChange={handleFilterChange}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="accordion" id="loanAccordion">
        {filteredApplications.map((obj) => (
          <div className="accordion-item" key={obj.id}>
            <h2 className="accordion-header" id={`heading${obj.id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${obj.id}`}
                aria-expanded="true"
                aria-controls={`collapse${obj.id}`}
              >
                Application ID: {obj.id}
              </button>
            </h2>
            <div
              id={`collapse${obj.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${obj.id}`}
              data-bs-parent="#loanAccordion"
            >
              <div className="accordion-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><strong>ID</strong></td>
                      <td>{obj.id}</td>
                    </tr>
                    <tr>
                      <td><strong>User</strong></td>
                      <td
                        onClick={() => handleUserClick(obj.user)}
                        style={{ cursor: 'pointer', color: 'blue' }}
                      >
                        {obj.user}
                      </td>
                    </tr>
                    {Object.entries(obj).map(([key, value]) => {
                      if (key === 'id' || key === 'user') return null;
                      return (
                        <tr key={key}>
                          <td><strong>{key.replace(/_/g, ' ')}</strong></td>
                          <td>{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {selectedCustomer && selectedCustomer.id === obj.user && (
                  <div className="accordion-body">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>ID:</strong> {selectedCustomer.id}</li>
                      <li className="list-group-item"><strong>DOB:</strong> {selectedCustomer.dob}</li>
                      <li className="list-group-item"><strong>Gender:</strong> {selectedCustomer.gender}</li>
                      <li className="list-group-item"><strong>Email:</strong> {selectedCustomer.email}</li>
                      <li className="list-group-item"><strong>Permanent Address:</strong> {selectedCustomer.permanent_address}</li>
                      <li className="list-group-item"><strong>Current Address:</strong> {selectedCustomer.current_address}</li>
                      <li className="list-group-item"><strong>Mobile:</strong> {selectedCustomer.mobile}</li>
                      <li className="list-group-item"><strong>Photo:</strong> <img src={selectedCustomer.photo} alt="Customer Photo" style={{ width: '100px', height: 'auto' }} /></li>
                      <li className="list-group-item"><strong>Signature:</strong> <img src={selectedCustomer.signature} alt="Customer Signature" style={{ width: '100px', height: 'auto' }} /></li>
                      <li className="list-group-item"><strong>Role:</strong> {selectedCustomer.role}</li>
                    </ul>
                  </div>
                )}

                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                  <NavLink to={`/LR-dashboard/customer-details/${obj.user}`}>
                    <button className="btn btn-info me-md-2">Verify</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanApplications;
