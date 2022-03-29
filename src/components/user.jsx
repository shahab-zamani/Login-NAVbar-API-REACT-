import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; // hood v-6 rrd
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const User = () => {
const navigate = useNavigate();
const params = useParams();// call for pass parametr
const [searchParams,setsearchParams] = useSearchParams();
console.log([...searchParams]);
// console.log(searchParams.get('sort')); // 'name'
console.log(searchParams); // ▶ URLSearchParams {}
// console.log(searchParams.entries()); // ▶ Iterator {}
// for (const entry of searchParams.entries()) {
//     const [param, value] = entry;
//     console.log(param, value);

// console.log(searchParams.entries());

 const [user,setUser] = useState({});
//  console.log(queryString.parse(props.location.search));
    
    useEffect ( async ()=> {

       const response = await axios.get(`https://reqres.in/api/users/${params.id}`);
    //    console.log(response);
       setUser(response.data.data);
    } , []);
    //    console.log(params);
    // constructor =(props)=> {
      
    // }
    return (
    <>
    <img src={user.avatar} style = {{ borderRadius : '50px' , width : '50%' }} alt = ''></img>
                                   <Link to= {`{users/${user.id}`}>
                                   <h4>{user.first_name} {user.last_name}</h4>
                                   
                                   </Link>
                                    <h5>{user.email}</h5>

    <button onClick =  { () => { navigate ('/users') }} className = "btn btn-lg btn-primary">Users Page</button>

    </>
    );
}
 
export default User;