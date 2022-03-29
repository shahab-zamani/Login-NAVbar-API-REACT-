import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingUsers from './loading/loadingUsers';
import {Link, Outlet } from "react-router-dom";
import { useState,useEffect } from 'react';
import{useNavigate} from 'react-router-dom';
import  { Component } from 'react';



// const Users = () => {
//      const [users,setUsers] = useState([]);
//      const [isLoading,setisLoading] = useState(true);

//      useEffect (  async()=> {
        
//            const response = await axios.get('https://reqres.in/api/users');
//            setTimeout(() => {
//            setUsers(response.data.data);
//            setisLoading(false);
//             // console.log (response2);

//            }, 1000);
//       });
//     //   const params = useParams(); // call for pass paramet
    
//      const navigate = useNavigate();
//             return (
//                  <>
//             <button onClick= { ()=> {navigate('/register')}} className = "btn btn-lg btn-primary">Register</button>

//             <button onClick= { ()=>{handleCreate()}}  className = "btn btn-lg btn-primary">Create</button>
//             <div className = "row">{
//              isLoading ?  (
//                    <LoadingUsers/> 
//                    ) : (users.map((user) =>{
//                                                 return (
                        
//                                                     <div className='col-4 text-center p-5'>
//                                                         <img src={user.avatar} style = {{ borderRadius : '50px' , width : '50%' }} alt = ''></img>
//                                                        <Link to= {`${user.id}`}>
//                                                                <h4>{user.first_name} {user.last_name}</h4>
//                                                        </Link>
//                                                         <h5>{user.email}</h5>
//                                                         <div className='row'>
//                                                             <div className='col-6'>
//                                                                 <bottom onClick = {()=>{handleUpdate(user)}} className='btn btn-info btn-sm'>Update</bottom>
//                                                                 </div>
//                                                                 <div onClick = { ()=>{handleDelete(user)}}  className='col-6'>
//                                                                 <bottom className='btn btn-danger btn-sm'>Delete</bottom>
//                                                                 </div>
//                                                                 </div>
//                                                                 </div>
                        
//                                                         );
//                                                 })
//                                        ) 
//                                         }
                                  
//                                     </div>
//                                     <Outlet/>
//                                 </>          
//                             );
                        
                   
                   
                   
                           
    

//         async function handleCreate()  {
//         const newUser = {
//             id :'7',
//             first_name : 'Shahab',
//             last_name : 'mz',
//             email: 'sh.m@gmail.com',
//             avatar : 'https://persianaweb.com/wp-content/uploads/2020/09/head-1.png'
//         };

//             const response = await axios.post('https://reqres.in/api/users',newUser);
//              console.log(response);

//     //  console.log(response.data);
//     setUsers(newUser) ;

//     }

//     async function handleUpdate (user)  {
//     user.first_name = 'ali';

//         const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
//         //    console.log(response);
//     console.log (response);
//     const updatedUser = [...users]; //copy object array
//     const index = updatedUser.indexOf(user);
//      updatedUser[index] = [...user]
//      setUsers(updatedUser);
    


//     }

//     async function handleDelete (user)  {

//             const response = await axios.delete(`https://reqres.in/api/users/${user.id}`);
//             //    console.log(response);
//             console.log(response);

//      const newUsers = users.filter(u => u.id !== user.id);
//      setUsers(newUsers);

//     }
// }
// export default Users ;





class Users extends Component {
    state = {
        users  : [],
        isLoading : true,
      } 
      async componentDidMount() {
           const response = await axios.get('https://reqres.in/api/users');
        //    console.log (response);
           setTimeout(() => {
            this.setState({users:response.data.data, isLoading:false})

           }, 1);
      }
    //   const params = useParams(); // call for pass parametr
//    
// handleClick = (e)=> {
//    return( windows.location =( '/register') );
//       }
    
      render() { 
      

            return(
                 <>

            <br></br>
            <br></br>
            <bottom onClick= {this.handleCreate} className = "btn btn-lg btn-primary">Create</bottom>
            <div className = "row">
               { this.state.isLoading ?  (
                   <LoadingUsers/> 
                   ) : ( this.state.users.map((user) =>{
                            return (
    
                                <div className='col-4 text-center p-5'>
                                    <img src={user.avatar} style = {{ borderRadius : '50px' , width : '50%' }} alt = ''></img>
                                   <Link to= {`${user.id}`}>
                                           <h4>{user.first_name} {user.last_name}</h4>
                                   </Link>
                                    <h5>{user.email}</h5>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <bottom onClick = {()=> {this.handleUpdate(user)}} className='btn btn-info btn-sm'>Update</bottom>
                                            </div>
                                            <div onClick = { ()=> {this.handleDelete(user)}}  className='col-6'>
                                            <bottom className='btn btn-danger btn-sm'>Delete</bottom>
                                            </div>
                                            </div>
                                            </div>
    
                                    );
                                })
                   )  }
              
                </div>
                <Outlet/>
            </>          
        );
    }

    handleCreate = async () => {
        const newUser = {
            id :'7',
            first_name : 'Shahab',
            last_name : 'mz',
            email: 'sh.m@gmail.com',
            avatar : 'https://persianaweb.com/wp-content/uploads/2020/09/head-1.png'
        };
    const response = await axios.post('https://reqres.in/api/users',newUser);
    console.log(response.data);
    this.setState({users : [...this.state.users , newUser]}) ;
    }

    handleUpdate = async(user) => {
    user.first_name = 'ali';
    const response = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
    console.log (response);
    const updatedUser = [...this.state.users]; //copy object array
    const index = updatedUser.indexOf(user);
    updatedUser[index] = {...user};
    this.setState({users : updatedUser});

    }

    handleDelete = async (user) => {
     const response =await axios.delete(`https://reqres.in/api/users/${user.id}`);
     console.log(response);
     const newUsers = this.state.users.filter(u => u.id !== user.id);
     this.setState({users : newUsers});

    }

    


}
export default Users ;






