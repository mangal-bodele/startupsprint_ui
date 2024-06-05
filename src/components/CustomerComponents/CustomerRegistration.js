import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const CustomerRegistration = () => {
    const [registrationCompleted, setRegistrationCompleted] = useState(false);


    const {register, handleSubmit} = useForm();
  

    function saveData(data){
        data.photo = data.photo[0]
        data.signature = data.signature[0]
        axios.post('http://127.0.0.1:8000/api/register/', data, {headers:{
            'Content-Type': 'multipart/form-data'
        }})
        // alert('data added')
        setRegistrationCompleted(true)
    }
    
    

    return (
        <div>
            {registrationCompleted ? (
                <center>
                    <p>CONGRATULATIONS !!! </p>
                    <br></br>
                    <p>NOW CHECK YOUR EMAIL</p>
                    <br></br>
                    <p>Click the button below after activating your account.</p>
                    <button onClick={() => console.log('Account activated')}>ACTIVATE ACCOUNT</button>
                </center>
            ) : (
                <center>
                <div className='container w-50 mt-10'>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='e'> EMAIL:</label>
                    <input className='form-control' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /><br/>
                    <label htmlFor='f'> First Name:</label>
                    <input className='form-control' {...register("first_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
                    <br/>
                    <label htmlFor='s'> Last Name:</label>
                    <input className='form-control' {...register("last_name", { required: true, pattern: /^[A-Za-z]+$/ })} />
                    <br/>                    
                    <br/>
                    <label htmlFor='pass'> Password:</label>
                    <input className='form-control' type="password" {...register("password", { required: true })} />
                    <br/>
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
                    <br/>
                    <label htmlFor='sign'>Signature:</label>
                    <input className='form-control' type="file" {...register("signature", { required: true })} />
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
                  
                    <button className='btn btn-primary mt-3'  type='submit'>REGISTER</button>
                    <button className='btn btn-primary mt-3' type='reset'> RESET</button>
                </form>
                </div>
                </center>
            )}
        </div>
    );
};

export default CustomerRegistration;