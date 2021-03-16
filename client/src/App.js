import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import AddEmployee from './pages/AddEmployee';
import Sale from './pages/Sale';
import Announcement from './pages/Announcement';
import Inventory from './pages/Inventory';
import Receive from './pages/Receive';
import Stats from './pages/Stats';
import ViewEmployees from './pages/ViewEmployees';
import EmployeeDash from './pages/EmployeeDash';
import Transactions from './pages/Transactions';
import EmployeeChangePass from './pages/EmployeeChangePass';

function App() {

  return (
    <Router>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/change-password' component={EmployeeChangePass} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/employee-dashboard' component={EmployeeDash} />
          <Route exact path='/add-employees' component={AddEmployee} />
          <Route exact path='/make-a-sale' component={Sale} />
          <Route exact path='/receive-items' component={Receive} />
          <Route exact path='/view-stats' component={Stats} />
          <Route exact path='/view-employees' component={ViewEmployees} />
          <Route exact path='/post-announcement' component={Announcement} />
          <Route exact path='/track-inventory' component={Inventory} />
          <Route exact path='/view-transactions' component={Transactions}/>
        </div>
    </Router>
  );
}

export default App;