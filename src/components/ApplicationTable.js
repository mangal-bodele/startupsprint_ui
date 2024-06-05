import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { utils, writeFile } from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplicationTable = () => {
    const [applications, setApplications] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/a1/application/')
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the applications!', error);
            });
    }, []);

    const handleRowClick = (id) => {
        const currentIndex = expandedRows.indexOf(id);
        const newExpandedRows = [...expandedRows];

        if (currentIndex === -1) {
            newExpandedRows.push(id);
        } else {
            newExpandedRows.splice(currentIndex, 1);
        }

        setExpandedRows(newExpandedRows);
    };

    const filterApplications = () => {
        return applications.filter(application => {
            const date = new Date(application.application_timestamp);
            const month = date.getMonth() + 1; // Months are 0-indexed in JavaScript
            const year = date.getFullYear();

            return (selectedMonth ? month === parseInt(selectedMonth) : true) &&
                (selectedYear ? year === parseInt(selectedYear) : true);
        });
    };

    const exportToExcel = () => {
        const filteredApplications = filterApplications();
        const data = filteredApplications.map(application => ({
            ID: application.id,
            'User Email': application.useremail,
            'Aadhaar No': application.aadhaar_no,
            'PAN No': application.pan_no,
            'Employment Type': application.type_of_employment,
            'Business Title': application.business_title,
            'Business Type': application.business_type,
            'Business Address': application.business_address,
            'GST Registration No': application.gst_registration_no,
            'Business License No': application.business_license_no,
            'Expected Annual Turnover': application.expected_average_annual_turnover,
            'Years in Business': application.years_in_current_business,
            Collateral: application.collateral,
            Status: application.status,
            'Application Timestamp': new Date(application.application_timestamp).toLocaleString(),
            Remark: application.remark,
            'Credit Score': application.credit_score,
        }));

        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Applications');

        writeFile(workbook, 'applications.xlsx');
    };

    const renderItem = (application) => {
        const isExpanded = expandedRows.includes(application.id);

        return (
            <React.Fragment key={application.id}>
                <tr onClick={() => handleRowClick(application.id)} className="main-row" data-bs-toggle="collapse" data-bs-target={`#collapse${application.id}`}>
                    <td>{application.id}</td>
                    <td>{application.useremail}</td>
                    <td>{application.aadhaar_no}</td>
                    <td>{application.pan_no}</td>
                    <td>{application.type_of_employment}</td>
                    <td>{application.business_title}</td>
                    <td>{application.business_type}</td>
                    <td>{application.status}</td>
                    <td>{new Date(application.application_timestamp).toLocaleString()}</td>
                </tr>
                <tr className="collapse" id={`#collapse${application.id}`}>
                    <td colSpan="9">
                        <div className="collapsible-content">
                            <strong>Business Address:</strong> {application.business_address} <br />
                            <strong>GST Registration No:</strong> {application.gst_registration_no} <br />
                            <strong>Business License No:</strong> {application.business_license_no} <br />
                            <strong>Expected Annual Turnover:</strong> {application.expected_average_annual_turnover} <br />
                            <strong>Years in Business:</strong> {application.years_in_current_business} <br />
                            <strong>Collateral:</strong> {application.collateral} <br />
                            <strong>Remark:</strong> {application.remark} <br />
                            <strong>Credit Score:</strong> {application.credit_score} <br />
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );
    };

    return (
        <div>
            <center><h2>Applications</h2></center>
            <div className="filters mb-3">
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    <option value="">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="">All Years</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            
            <table className='table table-bordered border-primary'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Eamil</th>
                        <th>Aadhaar No</th>
                        <th>PAN No</th>
                        <th>Employment Type</th>
                        <th>Business Title</th>
                        <th>Business Type</th>
                        <th>Status</th>
                        <th>Application Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {filterApplications().map(application => renderItem(application))}
                </tbody>
            </table>
         <center><button className="btn btn-primary mb-3" onClick={exportToExcel}>Export to Excel</button></center>  
        </div>
    );
};

export default ApplicationTable;
