import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GuarantorForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const saveData = async (data) => {
    try {
      const formData = new FormData();
      formData.append('application', data.application);
      formData.append('relation_with_customer', data.relation_with_customer);
      formData.append('name', data.name);
      formData.append('dob', data.dob);
      formData.append('gender', data.gender);
      formData.append('email', data.email);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('country', data.country);
      formData.append('pin_code', data.pin_code);
      formData.append('mobile', data.mobile);
      formData.append('photo', data.photo[0]);
      formData.append('profession', data.profession);
      formData.append('income_certificate', data.income_certificate[0]);
      formData.append('bank_name', data.bank_name);
      formData.append('current_account_no', data.current_account_no);
      formData.append('passbook_copy', data.passbook_copy[0]);
      formData.append('ifsc_code', data.ifsc_code);

      const response = await axios.post('http://127.0.0.1:8000/a1/applications/add-guarantor/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      alert('Guarantor added successfully');
      navigate('/customer/show1');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert(`Error: ${error.response.data.error || 'An error occurred'}`);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div className='container border border-4 col-5 bg-info'>
      <center><h1><u>Guarantor Form</u></h1></center>
      <form onSubmit={handleSubmit(saveData)} className='m-auto p-3 col-5'>
        <label htmlFor='application'>Enter application:</label>
        <input type='number' id='application' {...register('application', { required: "Application ID is required." })} />
        {errors.application && <p>{errors.application.message}</p>}
        <br /><br />

        <label htmlFor='relation_with_customer'>Relation with Customer:</label>
        <input type='text' id='relation_with_customer' {...register('relation_with_customer', { required: "Relation with customer is required." })} />
        {errors.relation_with_customer && <p>{errors.relation_with_customer.message}</p>}
        <br /><br />

        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' {...register('name', { required: "Name is required.", minLength: { value: 2, message: "Name must be at least 2 characters long." } })} />
        {errors.name && <p>{errors.name.message}</p>}
        <br /><br />

        <label htmlFor='dob'>Date of Birth:</label>
        <input type='date' id='dob' {...register('dob', { required: "Date of birth is required.", validate: value => new Date(value) < new Date() || "Date of birth must be in the past." })} />
        {errors.dob && <p>{errors.dob.message}</p>}
        <br /><br />

        <label htmlFor='gender'>Gender:</label>
        <select id='gender' {...register('gender', { required: "Gender is required." })}>
          <option value=''>Select...</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='transgender'>Transgender</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}
        <br /><br />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' {...register('email', { pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Enter a valid email address." } })} />
        {errors.email && <p>{errors.email.message}</p>}
        <br /><br />

        <label htmlFor='address'>Address:</label>
        <input type='text' id='address' {...register('address', { required: "Address is required." })} />
        {errors.address && <p>{errors.address.message}</p>}
        <br /><br />

        <label htmlFor='city'>City:</label>
        <input type='text' id='city' {...register('city', { required: "City is required." })} />
        {errors.city && <p>{errors.city.message}</p>}
        <br /><br />

        <label htmlFor='state'>State:</label>
        <input type='text' id='state' {...register('state', { required: "State is required." })} />
        {errors.state && <p>{errors.state.message}</p>}
        <br /><br />

        <label htmlFor='country'>Country:</label>
        <input type='text' id='country' {...register('country', { required: "Country is required." })} />
        {errors.country && <p>{errors.country.message}</p>}
        <br /><br />

        <label htmlFor='pin_code'>Pin Code:</label>
        <input type='number' id='pin_code' {...register('pin_code', { minLength: { value: 6, message: "Pin code must be exactly 6 digits." }, maxLength: { value: 6, message: "Pin code must be exactly 6 digits." } })} />
        {errors.pin_code && <p>{errors.pin_code.message}</p>}
        <br /><br />

        <label htmlFor='mobile'>Mobile:</label>
        <input type='number' id='mobile' {...register('mobile', { minLength: { value: 10, message: "Mobile number must be exactly 10 digits." }, maxLength: { value: 10, message: "Mobile number must be exactly 10 digits." } })} />
        {errors.mobile && <p>{errors.mobile.message}</p>}
        <br /><br />

        <label htmlFor='photo'>Photo:</label>
        <input type='file' id='photo' {...register('photo', { required: "Photo is required." })} />
        {errors.photo && <p>{errors.photo.message}</p>}
        <br /><br />

        <label htmlFor='profession'>Profession:</label>
        <input type='text' id='profession' {...register('profession', { required: "Profession is required." })} />
        {errors.profession && <p>{errors.profession.message}</p>}
        <br /><br />

        <label htmlFor='income_certificate'>Income Certificate:</label>
        <input type='file' id='income_certificate' {...register('income_certificate', { required: "Income certificate is required." })} />
        {errors.income_certificate && <p>{errors.income_certificate.message}</p>}
        <br /><br />

        <label htmlFor='bank_name'>Bank Name:</label>
        <input type='text' id='bank_name' {...register('bank_name', { required: "Bank name is required." })} />
        {errors.bank_name && <p>{errors.bank_name.message}</p>}
        <br /><br />

        <label htmlFor='current_account_no'>Current Account Number:</label>
        <input type='number' id='current_account_no' {...register('current_account_no', { required: "Current account number is required." })} />
        {errors.current_account_no && <p>{errors.current_account_no.message}</p>}
        <br /><br />

        <label htmlFor='passbook_copy'>Passbook Copy:</label>
        <input type='file' id='passbook_copy' {...register('passbook_copy', { required: "Passbook copy is required." })} />
        {errors.passbook_copy && <p>{errors.passbook_copy.message}</p>}
        <br /><br />

        <label htmlFor='ifsc_code'>IFSC Code:</label>
        <input type='text' id='ifsc_code' {...register('ifsc_code', { required: "IFSC code is required." })} />
        {errors.ifsc_code && <p>{errors.ifsc_code.message}</p>}
        <br /><br />

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default GuarantorForm;

