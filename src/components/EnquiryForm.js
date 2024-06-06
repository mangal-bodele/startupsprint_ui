import React, { useState } from 'react';
import axios from 'axios';
import HomepageNavbar from './HomePageNavbar';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        country_code: '+91',  // Default country code
        mobile: '',
        otp: '',
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });
    const [message, setMessage] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const sendOTP = () => {
        const fullMobileNumber = formData.country_code + formData.mobile;
        axios.post('http://127.0.0.1:8000/a1/send-verify-otp/', { mobile: fullMobileNumber })
            .then(response => {
                setMessage(response.data.message || 'OTP sent successfully.');
                setIsOtpSent(true);
            })
            .catch(error => {
                setMessage(error.response?.data?.message || 'Error sending OTP.');
            });
    };

    const verifyOTP = () => {
        const fullMobileNumber = formData.country_code + formData.mobile;
        axios.post('http://127.0.0.1:8000/a1/send-verify-otp/', { mobile: fullMobileNumber, otp: formData.otp })
            .then(response => {
                setMessage(response.data.message || 'OTP verified successfully.');
                if (response.data.message === 'OTP verified successfully.') {
                    setIsOtpVerified(true);
                } else {
                    setIsOtpVerified(false);
                }
            })
            .catch(error => {
                setMessage(error.response?.data?.message || 'Error verifying OTP.');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/a1/create-enquiry/', formData)
            .then(response => {
                alert('Enquiry submitted successfully!');
                setFormData({
                    country_code: '+91',
                    mobile: '',
                    otp: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    message: ''
                });
                setIsOtpVerified(false);
            })
            .catch(error => {
                alert('Failed to submit enquiry: ' + JSON.stringify(error.response.data));
            });
    };

    return (
        <div>
            <HomepageNavbar/>
            {!isOtpVerified ? (
                <div>
                    <h2>Step 1: Verify Mobile Number</h2>
                    <div>
                        <label htmlFor="country_code">Country Code:</label>
                        <input
                            type="text"
                            id="country_code"
                            name="country_code"
                            value={formData.country_code}
                            onChange={handleChange}
                            style={{ width: '70px' }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            style={{ marginLeft: '10px' }}
                            required
                        />
                    </div>
                    {!isOtpSent && <button onClick={sendOTP}>Send OTP</button>}
                    {isOtpSent && (
                        <div>
                            <label htmlFor="otp">Enter OTP:</label>
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                required
                            />
                            <button onClick={verifyOTP}>Verify OTP</button>
                        </div>
                    )}
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <h2>Step 2: Fill Enquiry Form</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="first_name">First Name:</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        /><br />

                        <label htmlFor="last_name">Last Name:</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        /><br />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        /><br />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea><br />

                        <button type="submit">Submit Enquiry</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EnquiryForm;
