import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

const Tab1 = () => {
    return (
        <>
        <h1>Tab1</h1>
        <Outlet/>
        </>  
    );

}
 
export default Tab1;