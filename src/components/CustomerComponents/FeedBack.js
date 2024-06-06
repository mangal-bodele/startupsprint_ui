import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FeedBack() {
    const {register,handleSubmit}=useForm();
    const navi=useNavigate();

    function savaData(data){
        axios.post('http://127.0.0.1:8000/a1/feedback/',data);
        alert('record added successfully')
        navi('/custmor/feedback');
    }
  return (
    <>
    <div className='container'>
    <center><h1><u>FeedBack Information Form</u></h1></center>
    <form onSubmit={handleSubmit(savaData)} className='mt-5'>
        <label htmlFor='r'><b>Enter first_name:</b></label>
        <input type='text'id='r' className='form-control'{...register('first_name')}></input>
        <br></br>
        <label htmlFor='n'><b>Enter last_name:</b></label>
        <input type='text' id='n' className='form-control'{...register('last_name')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter email:</b></label>
        <input type="email" id='m' className='form-control'{...register('email')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter ratings:</b></label>
        <input type="number" id='m' className='form-control'{...register('ratings')}></input>
        <br></br>
        <label htmlFor='m'><b>Enter feedback_text:</b></label>
        <input type="text" id='m' className='form-control'{...register('feedback_text')}></input>
        <br></br>
        <input type="submit" value="Add Feedback" className='btn btn-outline-success col-6'></input>
        <input type="reset" value="Reset" className='btn btn-outline-warning col-6'></input>
    </form>
    </div>
    </>
  )
}

export default FeedBack
