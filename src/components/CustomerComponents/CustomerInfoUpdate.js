import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerInfoUpdate = () => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const [customerData, setCustomerData] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [signaturePreview, setSignaturePreview] = useState(null);
    const navigator = useNavigate();

    const setInitialFormValues = (data) => {
        if (!data) return;
        // setValue('email', data.email);
        setValue('first_name', data.first_name);
        setValue('last_name', data.last_name);
        // setValue('password', data.password); 
        setValue('dob', data.dob);
        setValue('gender', data.gender);
        setValue('permanent_address', data.permanent_address);
        setValue('current_address', data.current_address);
        setValue('mobile', data.mobile);
        setValue('role', data.role);
    };

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:8000/api/customer/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCustomerData(response.data);
                setInitialFormValues(response.data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };
        
        fetchCustomerData();
    }, []);

    const watchPhoto = watch('photo');
    const watchSignature = watch('signature');

    useEffect(() => {
        if (watchPhoto && watchPhoto[0] instanceof Blob) {
            const reader = new FileReader();
            reader.onload = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(watchPhoto[0]);
        } else {
            setPhotoPreview(null);
        }
    }, [watchPhoto]);

    useEffect(() => {
        if (watchSignature && watchSignature[0] instanceof Blob) {
            const reader = new FileReader();
            reader.onload = () => {
                setSignaturePreview(reader.result);
            };
            reader.readAsDataURL(watchSignature[0]);
        } else {
            setSignaturePreview(null);
        }
    }, [watchSignature]);

    const saveData = async (data) => {
        try {
            data.photo = data.photo[0];
            data.signature = data.signature[0];
  
            const token = localStorage.getItem('token');
            await axios.put('http://127.0.0.1:8000/api/customer/',data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
                
            });
            alert('Updated successfully')
            navigator('/customer/info')
        } catch (error) {
            console.error('Error updating customer data:', error);
        }
    };
    

    return (
        <div>
            <center>
                <div className='container w-50 mt-10'>
                    <form onSubmit={handleSubmit(saveData)} encType="multipart/form-data">
                        {/* <label htmlFor='e'> EMAIL:</label>
                        <input className='form-control' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /><br/> */}
                        <label htmlFor='f'> First Name:</label>
                        <input className='form-control' {...register("first_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
                        <br/>
                        <label htmlFor='s'> Last Name:</label>
                        <input className='form-control' {...register("last_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
                        <br/>                    
                        <br/>
                        {/* <label htmlFor='pass'> Password:</label>
                        <input className='form-control' type="password" {...register("password", { required: true })} />
                        <br/> */}
                        <label htmlFor='d'> DOB:</label>
                        <input className='form-control' type='date' id='d'{...register('dob')}/>
                        <br/>
                        <label htmlFor='g'> Gender:</label>
                        <select className='form-control' {...register("gender", { required: true })}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                        <br/>
                        <label htmlFor='p'> Permanent address :</label>
                        <textarea className='form-control' {...register("permanent_address", { required: true })} />
                        <br/>
                        <label htmlFor='c'> Current address :</label>
                        <textarea className='form-control' {...register("current_address", { required: true })} />
                        <br/>
                        <label htmlFor='m'> MOBILE:</label>
                        <input className='form-control' {...register('mobile')} required/>
                        <br/>
                        <label htmlFor='pic'> Photo :</label>
                        <input className='form-control' type="file" {...register("photo", { required: true })} />
                        {photoPreview && (
                            <img src={photoPreview} alt="Pic" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        )}
                        <br/>
                        <label htmlFor='sign'>Signature:</label>
                        <input className='form-control' type="file" {...register("signature", { required: true })} />
                        {signaturePreview && (
                            <img src={signaturePreview} alt="Signature Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                        )}
                        <br/>
                        <label htmlFor='role'> Role :</label>
                        <select className='form-control' {...register("role", { required: true })}>
                            <option value="customer">Customer</option>
                            <option value="loan_representative">Loan Representative</option>
                            <option value="loan_sanctioning_officer">Loan Sanctioning Officer</option>
                            <option value="admin">Admin</option>
                            <option value="account_head">Account Head</option>
                        </select>
                        <br/>
                        <button className='btn btn-primary mt-3'  type='submit'>UPDATE</button>
                        <button className='btn btn-primary mt-3' type='reset'> RESET</button>
                    </form>
                </div>
            </center>
        </div>
    );
};

export default CustomerInfoUpdate;
