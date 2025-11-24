import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './pages/Login';
import RegisterOrg from './pages/RegisterOrg';
import Employees from './pages/Employees';
import Teams from './pages/Teams';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<RegisterOrg />} /> 
        <Route path="/employees" element={<Employees />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

