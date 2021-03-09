import React from 'react';
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

function App() {

  // const [getEmployeeState, setEmployeeState]

  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/employee-dashboard' component={EmployeeDash} />
        <Route path='/add-employees' component={AddEmployee}/>
        <Route path='/make-a-sale' component={Sale}/>
        <Route path='/receive-items' component={Receive}/>
        <Route path='/view-stats' component={Stats}/>
        <Route path='/view-employees' component={ViewEmployees}/>
        <Route path='/post-announcement' component={Announcement}/>
        <Route path='/track-inventory' component={Inventory}/>
      </div>
    </Router>
  );
}

export default App;
