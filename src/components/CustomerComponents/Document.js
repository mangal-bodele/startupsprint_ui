import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShowDocuments from './ShowDocuments';

function Document() {
  const { register, handleSubmit, setError } = useForm();
  const navigate = useNavigate();
  const maxUploadSize = 2 * 1024 * 1024; // 2MB in bytes

  const validateFiles = (data) => {
    for (const [key, value] of Object.entries(data)) {
      if (value && value[0] && value[0].size > maxUploadSize) {
        setError(key, {
          type: 'manual',
          message: `${key} size should not exceed 2MB.`,
        });
        return false;
      }
    }
    return true;
  };

  const saveData = async (data) => {
    if (validateFiles(data)) {
      data.aadhaar_card = data.aadhaar_card[0];
      data.pan_card = data.pan_card[0];
      data.business_address_proof_or_copy_of_rent_agreement = data.business_address_proof_or_copy_of_rent_agreement[0];
      data.electricity_bill = data.electricity_bill[0];
      data.msme_certificate = data.msme_certificate[0];
      data.gst_certificate = data.gst_certificate[0];
      data.udyog_aadhaar_registration = data.udyog_aadhaar_registration[0];
      data.business_license = data.business_license[0];
      data.business_plan_or_proposal = data.business_plan_or_proposal[0];
      data.three_year_itr_with_balance_sheet = data.three_year_itr_with_balance_sheet[0];
      data.collateral_document = data.collateral_document[0];
      data.stamp_duty = data.stamp_duty[0];

      try {
        await axios.post('http://127.0.0.1:8000/a1/documents/', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Document uploaded successfully');
        navigate('customer/show');
      } catch (error) {
        console.error('Error uploading documents:', error);
      }
    }
  };

  return (
    <div className='container border border-4 col-5 bg-info'>
      <center><h1><u>DOCUMENT UPLOAD</u></h1></center>
      <form onSubmit={handleSubmit(saveData)} className='m-auto p-3 col-5'>
        <label htmlFor='x'>Enter application:</label>
        <input type='number' id='x' {...register('application')} />
        <br /><br />
        <label htmlFor='i'>Enter aadhaar_card:</label>
        <input type='file' id='i' {...register('aadhaar_card')} />
        <br /><br />
        <label htmlFor='n'>Enter pan_card:</label>
        <input type='file' id='n' {...register('pan_card')} />
        <br /><br />
        <label htmlFor='t'>Enter business_address_proof_or_copy_of_rent_agreement:</label>
        <input type='file' id='t' {...register('business_address_proof_or_copy_of_rent_agreement')} />
        <br /><br />
        <label htmlFor='r'>Enter electricity bill:</label>
        <input type='file' id='r' {...register('electricity_bill')} />
        <br /><br />
        <label htmlFor='c'>Enter msme certificate:</label>
        <input type='file' id='c' {...register('msme_certificate')} />
        <br /><br />
        <label htmlFor='p'>Enter gst_certificate:</label>
        <input type='file' id='p' {...register('gst_certificate')} />
        <br /><br />
        <label htmlFor='u'>Enter udyog_aadhaar_registration:</label>
        <input type='file' id='u' {...register('udyog_aadhaar_registration')} />
        <br /><br />
        <label htmlFor='b'>Enter business_license:</label>
        <input type='file' id='b' {...register('business_license')} />
        <br /><br />
        <label htmlFor='q'>Enter business_plan_or_proposal:</label>
        <input type='file' id='q' {...register('business_plan_or_proposal')} />
        <br /><br />
        <label htmlFor='r'>Enter three_year_itr_with_balance_sheet:</label>
        <input type='file' id='r' {...register('three_year_itr_with_balance_sheet')} />
        <br /><br />
        <label htmlFor='s'>Enter collateral_document:</label>
        <input type='file' id='s' {...register('collateral_document')} />
        <br /><br />
        <label htmlFor='t'>Enter stamp duty:</label>
        <input type='file' id='t' {...register('stamp_duty')} />
        <br /><br />
        <input type='submit' value='upload' className='btn btn-success' />
        <input type='reset' className='btn btn-warning float-end' />
      </form>
    </div>
  );
}

export default Document;
