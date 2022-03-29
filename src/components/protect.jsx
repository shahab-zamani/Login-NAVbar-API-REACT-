import React from 'react';
import { Routes,Navigate } from 'react-router-dom';

const Protect = ({component:Component, ...restProps}) => {
    const isAuth = localStorage.getItem('token');
    return ( 
        <Routes {...restProps} render={ ( props)=>{
            isAuth ? <Component {...props} /> : <Navigate replace to='/login' />
        } } />


     );
}
 
export default Protect;