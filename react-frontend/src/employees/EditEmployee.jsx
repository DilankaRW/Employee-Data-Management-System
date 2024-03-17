import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditEmployee() {
  
    let navigate = useNavigate()

    const {id} = useParams()

  const [employee, setEmployee] = useState({
    firstname:"",
    lastname:"",
    emailid:""
  })

  const{firstname, lastname, emailid}=employee

  const onIputChange=(e)=>{
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    loadEmployee();
  }, [])

  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`, employee)
    navigate("/")
  }

  const loadEmployee = async()=>{
    const result = await axios.get(`http://localhost:8080/employee/${id}`)
    setEmployee(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor="Firstname" className='form-label'>First Name</label>
            <input type='text' className='form-control' placeholder='Enter your First Name' name='firstname' value={firstname} onChange={(e)=>onIputChange(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="Lastname" className='form-label'>Last Name</label>
            <input type='text' className='form-control' placeholder='Enter your Last Name' name='lastname' value={lastname} onChange={(e)=>onIputChange(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="Email" className='form-label'>Email</label>
            <input type='text' className='form-control' placeholder='Enter your Email' name='emailid' value={emailid} onChange={(e)=>onIputChange(e)}/>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
