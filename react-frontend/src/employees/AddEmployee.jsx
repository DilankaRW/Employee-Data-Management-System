import React from 'react'

export default function AddEmployee() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Add New Employee</h2>
          <div className='mb-3'>
            <label htmlFor="Firstname" className='form-label'>First Name</label>
            <input type='text' className='form-control' placeholder='Enter your First Name' name='firstname'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="Lastname" className='form-label'>Last Name</label>
            <input type='text' className='form-control' placeholder='Enter your Last Name' name='lastname'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="Email" className='form-label'>Email</label>
            <input type='text' className='form-control' placeholder='Enter your Email' name='email'/>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
