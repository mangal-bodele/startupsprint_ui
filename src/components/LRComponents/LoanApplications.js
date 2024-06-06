import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function LoanApplications() {
  const [applications,setApplications] = useState([])

  async function fetchdata(data){
    const result = await axios.get('http://127.0.0.1:8000/a1/applications/')
    setApplications(result.data)
  }
  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div >
      <table className=" Add-table table-bordered ">
        <thead className='text-white bg-warning'>
          <tr>
            <th>id</th>
            <th>user</th>
            <th>aadhaar_no</th>
            <th>pan_no</th>
            <th>type_of_employment</th>
            <th>business_title</th>
            <th>business_type</th>
            <th>business_address</th>
            <th>gst_registration_no</th>
            <th>business_license_no</th>
            <th>expected_average_annual_turnover</th>
            <th>years_in_current_business</th>
            <th>collateral</th>
            <th>status</th>
            <th>application_timestamp</th>
            <th>remark</th>
            <th>credit_score</th>
            <th colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody >
          {
            applications.map((obj)=>{
              return(
                <tr>
                    <td>{obj.id}</td>
                    <td>{obj.user}</td>
                    <td>{obj.aadhaar_no}</td>
                    <td>{obj.pan_no}</td>
                    <td>{obj.type_of_employment}</td>
                    <td>{obj.business_title}</td>
                    <td>{obj.business_type}</td>
                    <td>{obj.business_address}</td>
                    <td>{obj.gst_registration_no}</td>
                    <td>{obj.business_license_no}</td>
                    <td>{obj.expected_average_annual_turnover}</td>
                    <td>{obj.years_in_current_business}</td>
                    <td>{obj.collateral}</td>
                    <td>{obj.status}</td>
                    <td>{obj.application_timestamp}</td>
                    <td>{obj.remark}</td>
                    <td>{obj.credit_score}</td>
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

export default LoanApplications