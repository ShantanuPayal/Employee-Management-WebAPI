import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Listemployee() {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7065/api/Employee")
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            });
    }, []);

    const buttonStyle = {
        padding: '2px 10px',
        margin: '0 5px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        textDecoration: 'none',
    };

    const displayIcon = <FontAwesomeIcon icon={faEye} />;
    const editIcon = <FontAwesomeIcon icon={faEdit} />;
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

    const entryStyle = {
        borderBottom: '4px solid #ccc',
        padding: '15px 0',
    };

    return (
        <div>
            <h4><Link to="/create">Create</Link></h4>
            <select>
            {
                employees.map((emp) =>(
                    <option>{emp.email}</option>
                ))}
            </select>
            <h2>Employees Data...</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ background: '#3498db', color: '#fff' }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {employees.map(emp => (
                        <tr key={emp.id} style={entryStyle}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>
                                <Link to={'/emp/' + emp.id} style={{ ...buttonStyle, background: '#27ae60' }}>{displayIcon} Display</Link>
                                <Link to={'/empup/' + emp.id} style={{ ...buttonStyle, background: '#f39c12' }}>{editIcon} Edit</Link>
                                <Link to={'/empdel/' + emp.id} style={{ ...buttonStyle, background: '#e74c3c' }}>{deleteIcon} Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
}

export default Listemployee;
