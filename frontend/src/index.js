import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nopage from './Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contactus from './Contactus';
import Listemployee from './Listemployee';
import Createemp from './Createemp';
import Employee from './Employee';
import Employeeup from './Employeeup';
import Employeedel from './Employeedel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="ListEmployee" element={<Listemployee/>}/>
        <Route path="Create" element={<Createemp/>}/>
        <Route path="emp/:id" element={<Employee />} />
        <Route path="empup/:id" element={<Employeeup/>}/>
        <Route path="empdel/:id" element={<Employeedel />} />


    </Route>
        
    
        <Route path="*" element={<Nopage />} />
  </Routes>
</BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


