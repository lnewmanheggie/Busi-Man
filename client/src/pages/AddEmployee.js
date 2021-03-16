import React, { useState, useEffect } from 'react';
import useAuth from '../utils/useAuth';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import EmployeeApi from '../utils/EmployeeApi';
// import { Link, useLocation } from 'react-router-dom';
import { Input, TextArea,} from "../components/Form";
import Button from "../components/Button";
import UserApi from "../utils/UserApi";

function AddEmployee() {
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      manager: false,
      password: ''
  })
    // const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadEmployee()
    //   }, [])

      // function loadEmployee() {
      //   EmployeeApi.getEmployees()
      //     .then(res => 
      //       setEmployee(res.data)
      //     )
      //     .catch(err => console.log(err));
      // };

      // function deleteEmployee(id) {
      //   EmployeeApi.deleteEmployee(id)
      //     .then(res => loadEmployee())
      //     .catch(err => console.log(err));
      // }

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.first_name && formObject.last_name && formObject.email && formObject.isManager) {
    //         EmployeeApi.saveEmployee({
    //         first_name: formObject.first_name,
    //         last_name: formObject.last_name,
    //         email: formObject.email,
    //         // company: formObject.company,
    //         isManager: formObject.isManager

    //       })
    //         .then(res => loadEmployee())
    //         .catch(err => console.log(err));
    //     }
    //   };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setValues({...values, [name]: value})
  };

    useAuth();

    const handleAddEmployee = async(e) =>{
      e.preventDefault();
      try {
        let response = await UserApi.getUsers()
        const userCompany = response.data.currentUser.company;
        // const passwordCharacters =[]
        // let charCodes = LOWERCASE_CHAR_CODES
        // for (let i= 0; i < characterAmount; i++) {
        //   const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        //   passwordCharacters.push(String.fromCharCode(characterCode))}
        
      } catch (error) {
        console.log(error);
      }
    }

    // const location = useLocation();

    return(
        <div>
          {console.log(values)};
            <Navbar />
            <Header heading={'Add Employee'}/>
            <form onSubmit={handleAddEmployee}>
            <Input
                onChange={handleInputChange}
                name="firstName"
                value={values.firstName}
                type="text"
                placeholder="Employee first name (required)"
              />
            <Input
                onChange={handleInputChange}
                name="lastName"
                value={values.lastName}
                type="text"
                placeholder="Employee last name (required)"
            />
            <Input
                onChange={handleInputChange}
                name="email"
                value={values.email}
                type="text"
                placeholder="Employee email (required)"
            />
            <div>
              <label class="radio">
              <input 
                    onChange={handleInputChange}
                    type="radio"
                    value= "true"
                    name= "manager"
                /> Manager
              </label>
            </div>
            <div>
              <label class="radio">
              <input 
                    onChange={handleInputChange}
                    type="radio"
                    value= "false"
                    name= "manager"
                /> Employee
              </label>
            </div>
            <Button 
              name="Add Employee"
              type="submit" 
              color="#fb8500"/>
            <h3>{values.password}</h3>
            </form>


            <Footer />
            
        </div>
    )
}

export default AddEmployee;