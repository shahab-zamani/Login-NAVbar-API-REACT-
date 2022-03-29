import React, {Component} from 'react';
import Navbar from './components/navbar';
import Users from './components/users';
import {Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/login';
import Login2 from './components/login2';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';
import Tab1 from './components/tab1';
import Tab2 from './components/tab2';
import Content from './components/content';
import NotFound from './components/notfound';
import "./index.css"
import Dashboard from './components/dashboard';
// import axios from 'axios';
import Logout from './components/logout';
import Protect from './components/protect';

class App extends Component {
     state = { 
         user : null
      } 

      componentDidMount (){
          const token = localStorage.getItem('token');
          if(!token) {
              this.setState({user : null});
              return;
          }

        //  const response= await axios.post ('https://reqres.in/api/login',{token})
        const response = {
    data : {
            user: {
                name : 'mohamad',
                email : 'mohamad@gmail.com'
        }
      }
    }

    if (!response.data.user){
        this.setState({user : null});
        return;

    }
    this.setState({user : response.data.user});
}


authHandle (){
    const isAuth = localStorage.getItem('token');

    if(!isAuth) {
       return null;
        
    }
    return 'true';

}
    render() { 

        return <>
                <Navbar user = {this.state.user} />
                    <div className='container mt-3'>
                 <Routes>
                    <Route path = "/users" element = {< Users  /> } />
                    <Route path = "/users/:id" element= {<User/>} />
                 
                    <Route path = "/login" element= {<Login/>} />
                    <Route path = "/login2" element= {<Login2/>} />
                    <Route path = "/logout" element= {<Logout/>} />
                    <Route path = "/login/:id" element= {<Register/>} />
                    <Route path = "/dashboard" element= {this.authHandle() ? <Dashboard/> :   <Navigate replace to='/login' />} /> 
                           

                    <Route path = "/register" element= {<Register/>} >
                        <Route path = "tab1" element = {<Tab1/>} >
                                <Route path = ":id" element = {<Content/> } />   
                        </Route>
                        <Route path = "tab2" element = {<Tab2/>} />
                        
                    </Route>
                    <Route path = "/customers" element= {<Navigate replace to= "/users"/>} />
                    <Route path = "/Home" element= {<Navigate replace to= "/"/>} />
                    <Route path = "/"  element= {<Home/>} />
                    <Route path ="*" element = {<NotFound/>} />

                  
                </Routes> 
                    </div>

                </>
        
        // <Users></Users>;
        // <h1 className = 'font-big bg-primary fluid text-white container bg '  >shahab</h1>;
    
    }
}
 
export default App;