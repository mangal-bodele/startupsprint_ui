import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function CustomerDetails() {
  const [customer,setCustomer] = useState([])

  async function fetchdata(data){
    const result = await axios.get('http://127.0.0.1:8000/a1/user/')
    setCustomer(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div >
      <table className=" Add-table table-bordered">
        <thead className='text-white bg-warning'>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>dob</th>
            <th>gender</th>
            <th>email</th>
            <th>permanent_address</th>
            <th>current_address</th>
            <th>mobile</th>
            <th>photo</th>
            <th>signature</th>
            <th>role</th>
            <th>is_active</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody >
          {
            customer.map((obj)=>{
              return(
                <tr>
                    <td>{obj.id}</td>
                    <td>{obj.username}</td>
                    <td>{obj.dob}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.email}</td>
                    <td>{obj.permanent_address}</td>
                    <td>{obj.current_address}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.photo}</td>
                    <td>{obj.signature}</td>
                    <td>{obj.role}</td>
                    <td>{obj.is_active}</td>

                    <td>
                        <NavLink to={`/Update/${obj.id}`}><button className='btn-sm btn btn-secondary'>Update</button>&nbsp;</NavLink>
                        <NavLink to={`/Delete/${obj.id}`}><button className='btn-sm btn btn-secondary'>Delete</button></NavLink>
                    </td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  )
}

export default CustomerDetails