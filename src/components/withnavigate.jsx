import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const WithNavigate = (props) => {
    const navigate = useNavigate();

    return (
        <>
        <button className= 'btn btn-primary btn-sm' onClick = { ()=> {
            navigate ('/login', {state: 'Shahab'});
         } }> Login</button>
         </>
    );
}
 
export default WithNavigate;