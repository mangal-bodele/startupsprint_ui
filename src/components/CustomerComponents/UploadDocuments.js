import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function UploadDocuments() {
  const {register, handleSubmit} = useForm()
  // const navi = useNavigate()

   function saveData(data){
    axios.post('http://localhost:5000/users',data)
    // navi('/Show')

   }

  return (
    <div className='container border border-4 col-5 bg-info'>
      <center><h1><u>Food order Receipt</u></h1></center>
      <form onSubmit={handleSubmit(saveData)} className =' m-auto p-3 col-5 '>
        <label htmlFor='i'>Enter food id:</label>
        <input type='number' id='i' {...register('dishid')}/>
        <br /><br/>
        <label htmlFor='n'>Enter dish name</label>
        <input type='text' id='n' {...register('dish')}/>
        <br /><br/>
        <label htmlFor='t'>Enter food type:</label>
        <input type='text' id='t' {...register('type')}/>
        <br /><br/>
        <label htmlFor='r'>Enter Restaurant Name: </label>
        <input type='text' id='r' {...register('restaurant')}/>
        <br /><br/>
        <label htmlFor='c'>Enter City</label>
        <input type='text' id='c' {...register('city')}/>
        <br /><br/>
        <label htmlFor='p'>Enter Price:</label>
        <input type='number' id='p' {...register('price')}/>
        <br /><br/>
        <input type='submit'className='btn btn-success'/>
        <input type='reset'className='btn btn-warning float-end'/>
      </form>

    </div>
  );
}

export default UploadDocuments;
