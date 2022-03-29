import React, { Component } from 'react';
import {Outlet,Link,NavLink} from 'react-router-dom';

class Register extends Component {
    // state = {  } 
    render() { 
        return (
        <>
        <h1>Register</h1>
        <div className='col-2 p-3'>
        <NavLink style = {({isActive})=>{
            return {color : isActive ? "red" : "blue" }
        }} to= "/register/tab1">Tab1</NavLink>
        <NavLink style = {({isActive})=>{
            return {color : isActive ? "red" : "blue" }
        }} to= "/register/tab2">Tab2</NavLink>
        </div>
        <Outlet/>
        </>
        );
    }
}
 
export default Register;