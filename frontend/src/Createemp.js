import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Createemp() {
    const [employee, setEmployee] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);

        fetch("https://localhost:7065/api/Employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo,
        }).then((r) => {
            console.log(r.json());
        });

        event.preventDefault();

        navigate('/');
    };

    const formStyle = {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginTop: '50px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '10px',
        boxSizing: 'border-box',
        borderRadius: '3px',
        border: '1px solid #ccc',
    };

    const submitButtonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <label style={labelStyle}>Name:</label>
            <input
                type="text"
                name="name"
                onChange={handleChange}
                style={inputStyle}
            />
            <br />
            <label style={labelStyle}>Email:</label>
            <input
                type="text"
                name="email"
                onChange={handleChange}
                style={inputStyle}
            />
            <br />
            <label style={labelStyle}>Department:</label>
            <input
                type="text"
                name="department"
                onChange={handleChange}
                style={inputStyle}
            />
            <br />
            <input type="submit" style={submitButtonStyle} />
        </form>
    );
}
