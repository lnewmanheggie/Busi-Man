import React, { useState, useEffect } from 'react';
import useAuth from '../utils/useAuth';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmployeeApi from '../utils/EmployeeApi';
import { Link, useLocation } from 'react-router-dom';
import { Input, TextArea, FormBtn, RadioBtn } from "../components/Form";

function AddEmployee() {
    const [employee, setEmployee] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadEmployee()
      }, [])

      function loadEmployee() {
        EmployeeApi.getEmployees()
          .then(res => 
            setEmployee(res.data)
          )
          .catch(err => console.log(err));
      };

      function deleteEmployee(id) {
        EmployeeApi.deleteEmployee(id)
          .then(res => loadEmployee())
          .catch(err => console.log(err));
      }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.first_name && formObject.last_name && formObject.email && formObject.company && formObject.isManager) {
            employeeApi.saveEmployee({
            first_name: formObject.first_name,
            last_name: formObject.last_name,
            email: formObject.email,
            company: formObject.company,
            isManager: false

          })
            .then(res => loadEmployee())
            .catch(err => console.log(err));
        }
      };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
  };

    useAuth();

    const location = useLocation();

    return(
        <div>
            <Navbar location={location.pathname}/>
            <Header heading={'Add Employee'}/>
            <form>
            <Input
                onChange={handleInputChange}
                name="First Name"
                placeholder="Employee first name (required)"
              />
            <Input
                onChange={handleInputChange}
                name="Last Name"
                placeholder="Employee last name (required)"
            />
            <Input
                onChange={handleInputChange}
                name="Email"
                placeholder="Employee email (required)"
            />
            <Input
                onChange={handleInputChange}
                name="Company"
                placeholder="Employee company (required)"
            />
            <RadioBtn></RadioBtn>
             <FormBtn
                disabled={!(formObject.first_name && formObject.last_name && formObject.email && formObject.company && formObject.isManager)}
                onClick={handleFormSubmit}
              >Submit Employee</FormBtn>
            </form>


            <Footer />
            
        </div>
    )
}

export default AddEmployee;