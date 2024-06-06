import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Family() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  async function saveData(data) { 
    axios.post('http://127.0.0.1:8000/a1/family/', data)
      alert('Record added successfully.')
      navigate('/customer/family')
  }
  return (
    <div className="container mt-5 p-4 border rounded bg-light w-75 ">
      <center><h1 className="mb-4"><u>Family Details Information Form</u></h1></center>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">Enter user:</label>
          <input type="text" id="user" className="form-control" 
            {...register('user', { required: 'User is required' })} />
          {errors.user && <span className="text-danger">{errors.user.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="father_name" className="form-label">Enter father name:</label>
          <input type="text" id="father_name" className="form-control" 
            {...register('father_name', { required: 'Father name is required' })} />
          {errors.father_name && <span className="text-danger">{errors.father_name.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="father_profession" className="form-label">Enter father profession:</label>
          <input type="text" id="father_profession" className="form-control" 
            {...register('father_profession', { required: 'Father profession is required' })} />
          {errors.father_profession && <span className="text-danger">{errors.father_profession.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="father_income" className="form-label">Enter father income:</label>
          <input type="number" id="father_income" className="form-control" 
            {...register('father_income', { required: 'Father income is required', min: { value: 12, message: 'Income must be a positive number' } })} />
          {errors.father_income && <span className="text-danger">{errors.father_income.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="father_contact" className="form-label">Enter father contact:</label>
          <input type="number" id="father_contact" className="form-control" 
            {...register('father_contact', { required: 'Father contact is required', minLength: { value: 12, message: 'Contact must be at least 10 digits' } })} />
          {errors.father_contact && <span className="text-danger">{errors.father_contact.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="mother_name" className="form-label">Enter mother name:</label>
          <input type="text" id="mother_name" className="form-control" 
            {...register('mother_name', { required: 'Mother name is required' })} />
          {errors.mother_name && <span className="text-danger">{errors.mother_name.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="mother_profession" className="form-label">Enter mother profession:</label>
          <input type="text" id="mother_profession" className="form-control" 
            {...register('mother_profession', { required: 'Mother profession is required' })} />
          {errors.mother_profession && <span className="text-danger">{errors.mother_profession.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="mother_income" className="form-label">Enter mother income:</label>
          <input type="number" id="mother_income" className="form-control" 
            {...register('mother_income', { required: 'Mother income is required', min: { value: 12, message: 'Income must be a positive number' } })} />
          {errors.mother_income && <span className="text-danger">{errors.mother_income.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="mother_contact" className="form-label">Enter mother contact:</label>
          <input type="number" id="mother_contact" className="form-control" 
            {...register('mother_contact', { required: 'Mother contact is required', minLength: { value: 12, message: 'Contact must be at least 10 digits' } })} />
          {errors.mother_contact && <span className="text-danger">{errors.mother_contact.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="marital_status" className="form-label">Enter marital status:</label>
          <input type="text" id="marital_status" className="form-control" 
            {...register('marital_status', { required: 'Marital status is required' })} />
          {errors.marital_status && <span className="text-danger">{errors.marital_status.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="spouse_name" className="form-label">Enter spouse name:</label>
          <input type="text" id="spouse_name" className="form-control" 
            {...register('spouse_name', { required: 'Spouse name is required' })} />
          {errors.spouse_name && <span className="text-danger">{errors.spouse_name.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="spouse_profession" className="form-label">Enter spouse profession:</label>
          <input type="text" id="spouse_profession" className="form-control" 
            {...register('spouse_profession', { required: 'Spouse profession is required' })} />
          {errors.spouse_profession && <span className="text-danger">{errors.spouse_profession.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="spouse_income" className="form-label">Enter spouse income:</label>
          <input type="number" id="spouse_income" className="form-control" 
            {...register('spouse_income', { required: 'Spouse income is required', min: { value: 12, message: 'Income must be a positive number' } })} />
          {errors.spouse_income && <span className="text-danger">{errors.spouse_income.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="spouse_contact" className="form-label">Enter spouse contact:</label>
          <input type="number" id="spouse_contact" className="form-control" 
            {...register('spouse_contact', { required: 'Spouse contact is required', minLength: { value: 12, message: 'Contact must be at least 10 digits' } })} />
          {errors.spouse_contact && <span className="text-danger">{errors.spouse_contact.message}</span>}
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-outline-warning col-5">Add Family Info</button>
          <button type="reset" className="btn btn-outline-success col-5">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Family;
