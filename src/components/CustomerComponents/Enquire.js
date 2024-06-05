import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Enquire() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  

    function displaySendOTPButton(){
      const pattern = /^[+]{1}91[6-9]{1}[\d]{9}$/
      const mobile = document.getElementById('mobile').value
      if(mobile.match(pattern)){
        document.getElementById('generate_otp').style.display= 'block';
        document.getElementById('generate_otp').className= 'btn btn-outline-info';
      }else{
        document.getElementById('generate_otp').style.display= 'none';
      }
    }

    function sendOTP(){
      const mobile = document.getElementById('mobile').value
      console.log(mobile)
      axios.post("http://127.0.0.1:8000/a1/otp/", {mobile_number: mobile}).then(
        (response)=>{
          if(response.status===200){
            alert('OTP sent successfully')
          }
        }
      ).catch(
        (error)=>{
          console.error(error)
        }
      )
    }

    function saveEnquiryToDB(data){
      axios.post('http://127.0.0.1:8000/a1/verify/', data).then(
        (response)=>{
          alert('data saved')
        }
      ).catch(
        (error)=>{
          console.error(error)
        }
      )
    }

  return (
    <div className='container border border-5 mt-5 p-3 w-50'>
      <h1 className='text-center'>Enquire</h1>
      
        <form onSubmit={handleSubmit(saveEnquiryToDB)}>
              <div className="mb-3">
                <label htmlFor='first_name' className="form-label">First Name:</label>
                <input type='text' id='first_name' name='first_name'  
                  className="form-control" {...register('first_name', {required:{
                    value: true,
                    message: "This field is required"
                  }})}  /> 
              </div>
              <div className="mb-3">
                <label htmlFor='last_name' className="form-label">Last Name:</label>
                <input type='text' id='last_name' name='last_name' 
                  className="form-control" {...register('last_name', {required:{
                    value: true,
                    message: "This field is required"
                  }})}  />                             
              </div>
              <div className="mb-3">
                <label htmlFor='email' className="form-label">Email:</label>
                <input type='email' id='email' name='email' 
                  className="form-control" {...register('email', {required:{
                    value: true,
                    message: "This field is required"
                  }})} />                
              </div>
              <div className="mb-3">
                <label htmlFor='mobile' className="form-label">Mobile:</label>
                <input type='tel' id='mobile' name='mobile' onInput={()=>{displaySendOTPButton()}}
                  className="form-control" {...register('mobile', {required:{
                    value: true,
                    message: "This field is required"
                  },
                  pattern:{
                    value: /^[+]{1}91[6-9]{1}[\d]{9}$/,
                    message: "Please enter valid mobile number"
                  }})}  />                
              </div>
              <button type='button' id="generate_otp" style={{display:'none'}} onClick={()=>{sendOTP()}}>Generate Otp</button>
              <div className="mb-3">
                <label htmlFor='otp' className="form-label">Enter OTP:</label>
                <input type='text' id='otp' name='otp' 
                  className="form-control" {...register('otp', {required:{
                    value: true,
                    message: "This field is required"
                  }})} />
              </div>
              <div className="mb-3">
                <label htmlFor='message' className="form-label">Message:</label>
                <textarea id='message' name='message' 
                  className="form-control" {...register('message', {required:{
                    value: true,
                    message: "This field is required"
                  }})} ></textarea>           
              </div>
              <button type='submit' className="btn btn-primary">Submit</button>
            </form>
          
       
    </div>
  );
}

export default Enquire;
