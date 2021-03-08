import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
