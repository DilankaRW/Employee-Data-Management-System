import React, { useState } from 'react'

export default function AddEmployee() {

  const [employee, setEmployee] = useState({
    firstname:"",
    lastname:"",
    email:""
  })

  const{firstname, lastname, email}=employee

  const onIputChange=(e)=>{
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add New Employee</h2>
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
            <input type='text' className='form-control' placeholder='Enter your Email' name='email' value={email} onChange={(e)=>onIputChange(e)}/>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
