import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import EMIPieChart from './EMIPieChart';

const schema = yup.object().shape({
  principal: yup.number().typeError('Principal amount must be a number').positive('Principal amount must be greater than zero').required('Principal amount is required').min(10000).max(20000000),
  rate: yup.number().typeError('Annual interest rate must be a number').positive('Annual interest rate must be greater than zero').required('Annual interest rate is required').min(9).max(30),
  tenure: yup.number().typeError('Tenure must be a number').positive('Tenure must be greater than zero').required('Tenure is required').min(1).max(30)
});

function EmiCalculator() {
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [principal, setPrincipal] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const calculateEmi = ({ principal, rate, tenure }) => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setEmi(emi.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setPrincipal(P.toFixed(2));
  };

  const onSubmit = data => {
    calculateEmi(data);
    reset();
  };

  return (
    <div className='container mt-4 '>
      <div className='card mx-auto shadow-sm border border-secondary' style={{ maxWidth: '500px' }}>
        <div className='card-body'>
            <h2 className=' card-title text-center'>EMI Calculator</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label className='form-label'>Principal Amount: </label>
                <input type="number" className='form-control' {...register('principal')} />
                <div className="help-text">Enter above the loan amount.</div>
                {errors.principal && <p style={{ color: 'red' }}>{errors.principal.message}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Annual Interest Rate (%):</label>
                <input type="number" className='form-control' {...register('rate')} />
                <div className="help-text">Enter above the annual interest rate.</div>
                {errors.rate && <p style={{ color: 'red' }}>{errors.rate.message}</p>}
              </div>
              <div className='mb-3'>
                <label className='form-label'>Tenure (in years):</label>
                <input type="number" className='form-control' {...register('tenure')} />
                <div className="help-text">Enter above the loan tenure in years.</div>
                {errors.tenure && <p style={{ color: 'red' }}>{errors.tenure.message}</p>}
              </div>
              {errors.error && <div style={{ color: 'red' }}>{errors.error.message}</div>}
              <button type="submit" className='btn btn-info d-grid gap-2 col-6 mx-auto p-2 mt-2 mb-2'>Calculate EMI</button>
            </form>

            {emi && (
            <div className=" mt-4">
                <label className='text-uppercase'>Monthly EMI: {emi}</label><br /><br />
                <label className='text-uppercase'>Total Interest: {totalInterest}</label><br /><br />
                <label className='text-uppercase'>Total Payment: {totalPayment}</label><br />
                <EMIPieChart emi={parseFloat(emi)} totalInterest={parseFloat(totalInterest)} totalPayment={parseFloat(totalPayment)} width={400} height={400}/>
            </div>    
            )}
   
        </div>    
      </div>  
      
    </div>
  );
}

export default EmiCalculator;
