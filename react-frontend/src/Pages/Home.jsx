import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [Employees, setEmployees] =  useState([]);

    useEffect(() =>{
        loadEmployees();
    });

    const loadEmployees = async() =>{
        const result = await axios.get("http://localhost:8080/employees");
        setEmployees(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table table-dark table-hover shadow">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                Employees.map((employee,index)=>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.emailid}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    </div>
  )
}
