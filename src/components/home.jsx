import React, { Component } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
   
const navigate = useNavigate();

    return (
        <>
        <button className= 'btn btn-primary btn-sm' onClick = { ()=> {
           navigate ('/login', {state: 'Shahab'});
        }}>Login</button>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/login">Login</Link> 
        <Link to="/login">Login2</Link> 
        <br></br>
        <Link to="/register">Register</Link> 
        </>
        );

    }
 
    export default Home;


    // useNavigate doesnt call in class component 

// class Home extends Component {
//     // state = {  } 
//     render() { 
//         const useNavigate = useNavigate();
//         return (
//         <>
//         <botton onClick = { ()=> {
           
//         }}>Login</botton>
//         <Link to="/login">Login</Link> 
//         <br></br>
//         <Link to="/register">Register</Link> 
//         </>
//         );
//     }
// }
 
// export default Home;


    
