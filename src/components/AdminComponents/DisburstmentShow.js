import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowDisbursement() {
    const [disbursements, setDisbursements] = useState([]);

    useEffect(() => {
        fetchDisbursements();
    }, []);

    const fetchDisbursements = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/a1/disbursement/');
            setDisbursements(response.data);
        } catch (error) {
            console.error('Error fetching disbursements:', error);
        }
    }
    return (
        <div className='container border border-dark mt-5'>
            <center><h1 className='mt-4 mb-4'><u>Disbursement Information</u></h1></center>
            <div className='mt-5'>
                <table className='table table-striped table-bordered table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>Loan</th>
                            <th scope='col'>insurance doc</th>
                            <th scope='col'>Payment Mode</th>
                            <th scope='col'>Net Disbursed Amount</th>
                            <th scope='col'>Disbursed to Account No</th>
                            <th scope='col'>Receipt_doc</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Response Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disbursements.map((disbursement) => (
                            <tr>
                                <td>{disbursement.loan}</td>
                                <td>{disbursement.insurance_doc}</td>
                                <td>{disbursement.payment_mode}</td>
                                <td>{disbursement.net_disbursed_amount}</td>
                                <td>{disbursement.disbursed_to_account_no}</td>
                                <td>{disbursement.receipt_doc}</td>
                                <td>{disbursement.status}</td>
                                <td>{disbursement.response_timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowDisbursement;

