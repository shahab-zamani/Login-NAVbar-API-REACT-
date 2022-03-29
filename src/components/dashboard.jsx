import axios from "axios";
import { useEffect } from "react";


axios.defaults.headers.common['token'] = localStorage.getItem ('token'); //send token to api from header of request

const Dashboard = () => {

    useEffect (async () => {
        console.log('dashboard')
        const response = await axios.get ('https://reqres.in/api/unknown');
        console.log(response.data);
    },[]);
    


    return ( <h1>Dashboard</h1> );
}
 
export default Dashboard;