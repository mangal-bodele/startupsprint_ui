import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStaffForm() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [sameAddress, setSameAddress] = useState(false);
  const navigate = useNavigate();

  // Watch the value of permanent address
  const permanentAddress = watch("permanent_address");

  useEffect(() => {
    if (sameAddress) {
      setValue("current_address", permanentAddress);
    }
  }, [sameAddress, permanentAddress, setValue]);

  const saveData = async (data) => {
    try {
      data.photo = data.photo[0];
      data.signature = data.signature[0];

      const response = await axios.post('http://127.0.0.1:8000/api/staff/', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201 || response.status === 200) {
        alert('Staff Added Successfully');
        navigate('/show');
      } else {
        console.error('Failed to add staff:', response.data);
        alert('Failed to add staff. Please try again.');
      }
    } catch (error) {
      console.error('Error adding staff:', error);
      alert('An error occurred while adding staff. Please check the console for details.');
    }
  };

  return (
    <div className='container w-50 mt-5'>
      <center><h2><u>STAFF INFORMATION</u></h2></center>
      <form onSubmit={handleSubmit(saveData)} encType="multipart/form-data">
        <label>Email</label>
        <input className='form-control' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>Email is required and must be in the correct format</p>}
        <br/>

        <label>First Name</label>
        <input className='form-control' {...register("first_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
        {errors.first_name && <p>First name is required and should contain only alphabetic characters</p>}
        <br/>

        <label>Last Name</label>
        <input className='form-control' {...register("last_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
        {errors.last_name && <p>Last name is required and should contain only alphabetic characters</p>}
        <br/>

        <label>Mobile</label>
        <input className='form-control' {...register("mobile", { required: true })} />
        <br/>

        <label>Date of Birth</label>
        <input className='form-control' type="date" {...register("dob", { required: true })} />
        <br/>

        <label>Gender</label>
        <select className='form-control' {...register("gender", { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Transgender</option>
        </select>
        <br/>

        <label>Permanent Address</label>
        <textarea className='form-control' {...register("permanent_address", { required: true })} />
        <br/>

        {/* Checkbox for same address */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="sameAddressCheckbox"
            checked={sameAddress}
            onChange={(e) => setSameAddress(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="sameAddressCheckbox">Same as Permanent Address</label>
        </div>
        <br/>

        {/* If same address checkbox is not checked, show current address input */}
        <label>Current Address</label>
        <textarea
          className='form-control'
          {...register("current_address", { required: !sameAddress })}
          disabled={sameAddress}
        />
        {errors.current_address && <p>Current address is required</p>}
        <br/>

        <label>Photo</label>
        <input className='form-control' type="file" {...register("photo", { required: true })} />
        <br/>

        <label>Signature</label>
        <input className='form-control' type="file" {...register("signature", { required: true })} />
        <br/>

        <label>Role</label>
        <select className='form-control' {...register("role", { required: true })}>
          <option value="customer">Customer</option>
          <option value="loan_representative">Loan Representative</option>
          <option value="loan_sanctioning_officer">Loan Sanctioning Officer</option>
          <option value="admin">Admin</option>
          <option value="account_head">Account Head</option>
        </select>
        <br/>

        <label>Password</label>
        <input className='form-control' type="password" {...register("password", { required: true })} />
        <br/>

        <input className='btn btn-outline-primary col-6' type="submit" value="Add Staff" />
        <input className='btn btn-outline-danger col-6' type="reset" value="Reset Staff" />
      </form>
    </div>
  );
}

export default AddStaffForm;
