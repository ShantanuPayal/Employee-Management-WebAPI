import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Employeedel() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7065/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            });
    }, { id });

    const handeldel = (event) => {
        fetch("https://localhost:7065/api/Employee/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result);
            });
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={{ color: 'red' }}>Are you sure?</h1>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>Id:</label>
                {employee.id}<br />
                <label style={{ marginRight: '10px' }}>Name:</label>
                {employee.name}<br />
                <label style={{ marginRight: '10px' }}>Email:</label>
                {employee.email}<br />
                <label style={{ marginRight: '10px' }}>Department:</label>
                {employee.department}
            </div>
            <form onSubmit={handeldel}>
                <button style={{ padding: '10px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }} type="submit">Delete</button>
            </form>
        </div>
    );
}

export default Employeedel;
