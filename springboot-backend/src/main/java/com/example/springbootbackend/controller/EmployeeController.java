package com.example.springbootbackend.controller;

import com.example.springbootbackend.exception.EmployeeNotFoundException;
import com.example.springbootbackend.model.Employee;
import com.example.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    Employee newEmployee(@RequestBody Employee newEmployee){
        return employeeRepository.save(newEmployee);
    }

    @GetMapping("/employees")
    List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @GetMapping("/employee/{id}")
    Employee getEmployeeById(@PathVariable Long id){
        return employeeRepository.findById(id)
                .orElseThrow(()->new EmployeeNotFoundException(id));
    }

    @PutMapping("/employee/{id}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable Long id){
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setFirstname(newEmployee.getFirstname());
                    employee.setLastname(newEmployee.getLastname());
                    employee.setEmailid(newEmployee.getEmailid());
                    return employeeRepository.save(employee);
                }).orElseThrow(()-> new EmployeeNotFoundException(id));
    }

    @DeleteMapping("/employee/{id}")
    String deleteEmployee(@PathVariable Long id){
        if(!employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException(id);
        }
        employeeRepository.deleteById(id);
        return "Employee with id "+id+" has been deleted success.";
    }

}