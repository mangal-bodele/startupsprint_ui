import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowLoan() {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        fetchLoans();
    }, []);

    const fetchLoans = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/a1/loan/');
            setLoans(response.data);
        } catch (error) {
            console.error('Error fetching loans:', error);
        }
    };

    const deleteLoan = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/a1/loan/${id}/`);
            setLoans(loans.filter((loan) => loan.id !== id));
            alert('Loan deleted successfully');
        } catch (error) {
            console.error('Error deleting loan:', error);
        }
    };

    return (
        <div className='container border border-warning mt-5 p-4'>
            <center><h1 className='text-info bg-dark p-3 rounded'><u >Loan Information</u></h1></center>
            <div className='border border-warning mt-4 p-3'>
                <table className='table table-striped table-bordered'>
                    <thead className='table table-dark'>
                        <tr>
                            <th scope='col'>Application</th>
                            <th scope='col'>Loan Principal Amount</th>
                            <th scope='col'>Loan Tenure</th>
                            <th scope='col'>Total Amount Add Processing Fees</th>
                            <th scope='col'>Installment</th>
                            <th scope='col'>Maturity Date</th>
                            <th scope='col'>Sanction Letter</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Response</th>
                            <th scope='col'>Remark</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loans.map((loan) => (
                            <tr key={loan.id}>
                                <td>{loan.application}</td>
                                <td>{loan.loan_principal_amount}</td>
                                <td>{loan.loan_tenure}</td>
                                <td>{loan.total_amount_add_processing_fees}</td>
                                <td>{loan.installment}</td>
                                <td>{loan.maturity_date}</td>
                                <td>{loan.sanction_letter}</td>
                                <td>{loan.status}</td>
                                <td>{loan.response}</td>
                                <td>{loan.remark}</td>
                                <td>
                                    <button className='btn btn-outline-danger' onClick={() => deleteLoan(loan.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowLoan;
