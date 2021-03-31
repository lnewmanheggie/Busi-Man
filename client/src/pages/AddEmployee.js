import React, { useState } from 'react';
import useAuth from '../utils/useAuth';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from "../components/Button";
import UserApi from "../utils/UserApi";
import '../css/Box.css';



function AddEmployee() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    manager: '',
    password: ''
  })

  useAuth();

  // Handles updating component state when the user types into the input field
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues({
      ...values,
      [name]: value
    });
  };


  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      let response = await UserApi.getUsers()
      const userCompany = response.data.currentUser.company;
      const generatedPassword = randomPassword();

      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        company: userCompany,
        manager: values.manager,
        password: generatedPassword,
        confirmPassword: generatedPassword
      }

      const confirmRegistration = await UserApi.registerUser(userData);
      console.log(confirmRegistration);

    } catch (error) {
      console.log(error);
    }
  }

  function randomPassword() {
    const charString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";
    let passGenerated = "";
    for (let i = 0; i < 20; i++) {
      passGenerated += charString.charAt(Math.floor(Math.random() * charString.length));
    }
    passGenerated += "CHANGEME"
    setValues({ ...values, password: passGenerated })
    return passGenerated;
  }


  return (
    <div>
      <Navbar />
      <Header heading={'Add Employee'} />
      <div className="is-flex is-justify-content-center">
        <div className="box mt-6 box2">
          <form onSubmit={handleAddEmployee}>
            <Input
              handleChange={handleChange}
              name="firstName"
              value={values.firstName}
              type="text"
              placeholder="Employee first name (required)"
            />
            <Input
              handleChange={handleChange}
              name="lastName"
              value={values.lastName}
              type="text"
              placeholder="Employee last name (required)"
            />
            <Input
              handleChange={handleChange}
              name="email"
              value={values.email}
              type="text"
              placeholder="Employee email (required)"
            />
            <div className="control" >
              <label className="radio">
                <input
                  onClick={() => setValues({ ...values, manager: true })}
                  type="radio"
                  value='true'
                  name="manager"
                /> Manager
                    </label>
              <label className="radio">
                <input
                  onClick={() => setValues({ ...values, manager: false })}
                  type="radio"
                  value='false'
                  name="manager"
                /> Employee
                    </label>
            </div>
            <Button
              name="Add Employee"
              type="submit"
              color="#219ebc"
              margin='1rem'
            />
            <h3>{values.password}</h3>
            <a href={`mailto:${values.email}`} target='_blank' rel='noreferrer'>
              Click here to send email (copy the password and paste in email)</a>
          </form>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default AddEmployee;