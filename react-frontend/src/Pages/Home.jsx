import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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
                    <td>
                        <button className='btn btn-primary max-2'>View</button>
                        <Link className='btn btn-outline-primary max-2' to={`/editemployee/${employee.id}`}>Edit</Link>
                        <button className='btn btn-danger max-2'>Delete</button>
                    </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    </div>
  )
}
