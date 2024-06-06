import React, { useState } from 'react';
import HomepageNavbar from './HomePageNavbar';

function EmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [error, setError] = useState('');

  const isValidNumber = (value) => {
    return !isNaN(value) && value > 0;
  };

  const validateInputs = () => {
    if (!isValidNumber(principal)) {
      setError('Principal amount must be a positive number.');
      return false;
    }
    if (!isValidNumber(rate)) {
      setError('Annual interest rate must be a positive number.');
      return false;
    }
    if (!isValidNumber(tenure)) {
      setError('Tenure must be a positive number.');
      return false;
    }
    setError('');
    return true;
  };

  const calculateEmi = () => {
    if (!validateInputs()) {
      return;
    }

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <>
    <div className='container ' ></div>
      <HomepageNavbar />
      <h2>EMI Calculator</h2>
      <div>
        <label>Principal Amount:
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder='Enter the loan amount you want to borrow.'/>
        </label>
      </div>
      <div>
        <label>Annual Interest Rate (%):
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder='Enter the annual interest rate (e.g., 5 to 15%).' />
        </label>
      </div>
      <div>
        <label> Tenure (in years):
          <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} placeholder='Enter the loan tenure in years.'/>
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={calculateEmi}>Calculate EMI</button>
      {emi && (
        <div>
          <h3>Monthly EMI: {emi}</h3>
        </div>
      )}
    </>
  );
}

export default EmiCalculator;
