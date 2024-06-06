import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";


function ApplicationGeneration() {
  const { register, handleSubmit, formState: { errors } }  = useForm();
  
  function  saveData(data)
  {
    axios.post('http://127.0.0.1:8000/loanapplicationform/', data);
  }
  // const onSubmit = async (data) => {
  //   try {
  //     await axios.post('http://127.0.0.1:8000/loanappicationform/', data);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (

    <div className='container mt-5'>
      <h2 className='text-center mt-3'>Loan Application Form</h2>
      <form onSubmit={handleSubmit(saveData)} className='mt-3'>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='user'><b>User</b></label>
            <input type='number' id='user' className='form-control' placeholder='e.g., Positive Number' {...register('user', {
            required:true},
            {pattern:{ value:/^[0-9]{0,}$/, message:"only positive  number"}})}/>
            {errors.user && <p>{errors.user.message}</p>}
          </div>
          
          <div className='col-md-6 mb-3'>
            <label htmlFor='aadhaar_no'><b>Aadhaar No</b></label>
            <input type='number' id='aadhaar_no' className='form-control' placeholder='e.g., 123456789857' {...register('aadhaar_no',{
            required:true},{pattern:{value:  /^[0-9]{12}$/, message:"aadhaar no : eg  123456789857"}})}/>
            {errors.aadhaar_no && <p>{errors.aadhaar_no.message}</p>}
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='pan_no'><b>Pancard No</b></label>
            <input type='text' id='pan_no' className='form-control' placeholder='e.g., ABCDE6789F' {...register('pan_no',{required:true},
            {pattern:{value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, message: "pancard no : eg ABCDE6789F"}})}/>
            {errors.pan_no && <p>{errors.pan_no.message}</p>}
          </div>

          <div className='col-md-6 mb-3'>
            <label htmlFor='type_of_employment'><b>Type of Employment</b></label>
            <select id='type_of_employment' className='form-select' {...register('type_of_employment')}>
              <option value='self_employed'>Self Employed</option>
              <option value='salaried'>Salaried</option>
            </select>
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='business_title'><b>Business Title</b></label>
            <input type='text' id='business_title' className='form-control' placeholder='e.g., Google' {...register('business_title',{required:true},
            {pattern:{value:/^[a-zA-Z]{2,}$/,message:" Bussiness title  length minmum two alphabet"}})}/>
            {errors.business_title && <p>{errors.business_title.message}</p>}
          </div>

          <div className='col-md-6 mb-3'>
            <label htmlFor='business_type'><b>Business Type</b></label>
            <select id='business_type' className='form-select' {...register('business_type')}>
              <option value='manufacturing'>Manufacturing</option>
              <option value='service'>Service</option>
              <option value='trading'>Trading</option>
            </select>
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='business_address'><b>Business Address</b></label>
            <input type='text' id='business_address' className='form-control' placeholder='e.g., Karve Nagar, Pune, Maharashtra 411052' {...register('business_address',
            {required:true},{pattern:{value:/^[a-zA-Z0-9]{5,}$/, message:"Bussiness address length minmum five alphabet"}})}/>
            {errors.business_address && <p>{errors.business_address.message}</p>}
          </div>

          <div className='col-md-6 mb-3'>
            <label htmlFor='gst_registration_no'><b>GST Registration No</b></label>
            <input type='text' id='gst_registration_no' className='form-control' placeholder='e.g., 45ASDFG7896A10' {...register('gst_registration_no',
            {required:true},{pattern: { value: /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[0-9]{2}$/,message:"GST No : 45ASDFG7896A10"} })}/>
            {errors.gst_registration_no  && <p>{errors.gst_registration_no.message}</p>}
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='business_license_no'><b>Business License No</b></label>
            <input type='text' id='business_license_no' className='form-control' placeholder='e.g., GH475LM21' {...register('business_license_no')} />
          </div>

          <div className='col-md-6 mb-3'>
            <label htmlFor='expected_average_annual_turnover'><b>Expected Average Annual Turnover</b></label>
            <input type='text' id='expected_average_annual_turnover' className='form-control' placeholder='e.g., 500000' {...register('expected_average_annual_turnover')} />
          </div>
        </div>


        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='years_in_current_business'><b>Years In Current Business</b></label>
            <input type='number' id='years_in_current_business' className='form-control' placeholder='e.g., 1 year' {...register('years_in_current_business')} />
          </div>

          <div className='col-md-6 mb-3'>
            <label htmlFor='collateral'><b>Collateral</b></label>
            <input type='text' id='collateral' className='form-control' placeholder='e.g., House' {...register('collateral')} />
          </div>
        </div>


        {/* <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='status'><b>Status</b></label>
            <select id='status' className='form-select' {...register('status')}>
              <option value='generated'>Generated</option>
              <option value='sanctioned'>Sanctioned</option>
              <option value='disbursed'>Disbursed</option>
              <option value='rejected'>Rejected</option>
              <option value=''>-</option>
            </select>
          </div>
        </div> */}
       <div className='row'>
       <div className='col-md-6 mb-3'>
          <label htmlFor='application_timestamp' className='form-label'><b>Application Timestamp</b></label>
          <input type='datetime-local' id='application_timestamp' className='form-control' {...register('application_timestamp')} />
        </div>
        <div className='col-md-6 mb-3'>
            <label htmlFor='credit_score'><b>Credit Score</b></label>
            <input type='number' id='credit_score' className='form-control' placeholder='e.g., 350 to 900' {...register('credit_score')} />
          </div>

        </div>
       
        
        
        <div className='row'>
         
          <div className='col-md-12 mb-3'>
            <input type='submit' value='Submit' className='btn btn-outline-success btn-lg col-6' />
            <button type='reset' className='btn btn-outline-danger btn-lg col-6'>RESET</button>
          </div>


          {/* <div className='col-md-6 mb-3'>
            <label htmlFor='remark'><b>Remark</b></label>
            <input type='text' id='remark' className='form-control' placeholder='e.g., Recommendations' {...register('remark')} />
          </div>
        </div> */}
        </div>


      
      </form>
    </div>
  );
}

 export default ApplicationGeneration;

