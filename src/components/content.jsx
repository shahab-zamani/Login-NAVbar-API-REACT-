import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Content = () => {
    const {id} = useParams();
    return <h1>URL Params is {id} </h1> ;
}
 
export default Content;