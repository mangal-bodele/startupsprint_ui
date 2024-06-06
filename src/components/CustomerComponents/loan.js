import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loan() {
    const {register,handleSubmit}=useForm();
    const navi=useNavigate();

    function savaData(data){
        axios.post('http://127.0.0.1:8000/a1/loan/',data);
        alert('record added successfully')
        navi('/custmor/loan');
    }
  return (
    <>
    <div className='container'>
    <center><h1><u>Loan Information Form</u></h1></center>
    <form onSubmit={handleSubmit(savaData)} className='mt-5'>
        <label htmlFor='r'><b>Enter Application:</b></label>
        <input type='text'id='r' className='form-control'{...register('application')}></input>
        <br></br>
        <label htmlFor='n'><b>Enter loan_principal_amount:</b></label>
        <input type='text' id='n' className='form-control'{...register('loan_principal_amount')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter loan_tenure:</b></label>
        <input type="email" id='m' className='form-control'{...register('loan_tenure')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter total_amount_add_processing_fees:</b></label>
        <input type="number" id='m' className='form-control'{...register('total_amount_add_processing_fees')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter installment:</b></label>
        <input type="text" id='m' className='form-control'{...register('installment')}></input>
        <br></br>
        <label htmlFor='n'><b>Enter maturity_date:</b></label>
        <input type='text' id='n' className='form-control'{...register('maturity_date')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter sanction_letter</b></label>
        <input type="email" id='m' className='form-control'{...register('sanction_letter')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter status:</b></label>
        <input type="number" id='m' className='form-control'{...register('status')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter response:</b></label>
        <input type="text" id='m' className='form-control'{...register('response')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter remark:</b></label>
        <input type="text" id='m' className='form-control'{...register('remark')}></input>
        <input type="submit" value="Add Loan" className='btn btn-outline-success col-6'></input>
        <input type="reset" value="Reset" className='btn btn-outline-warning col-6'></input>
    </form>
    </div>
    </>
  )
}

export default Loan