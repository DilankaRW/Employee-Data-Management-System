package com.example.springbootbackend.exception;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(Long id){
        super("Could not found the Employee with id "+ id);
    }
}
