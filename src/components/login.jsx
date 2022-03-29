import axios from 'axios';
import React, { createRef,Component} from 'react';
import {useLocation} from 'react-router-dom';
// import React, {  useRef} from 'react';

//   functional component with useRef
// const Login = () => {
//   const email = useRef(null);
//   const password = useRef(null);

//   async function  handleSubmit (e) {
//     e.preventDefault();
//     console.log('email:',email.current.value);
//     console.log('password:',password.current.value);
//     const account = {email: email.current.value ,password : password.current.value};
//     if (account.email && account.password){
//         const response = await axios.post ('https://reqres.in/api/login',account);
//         console.log (response);
// }
//   }
    

//     const location = useLocation();
//     return ( 
//         <>
//         <h1>Hi,{location.state}</h1>
//         <h1>Login Form:</h1>
//         <form onSubmit = {handleSubmit}>
//             <div className="mb3">
//                <label htmlFor="email">Email:</label>
//                <input ref={email} id='email' className='form-control' type="text" />
//             </div>
//             <div className="mb3">
//                <label htmlFor="password">Password:</label>
//                <input ref={password} id='password' className='form-control' type="text" />
//             </div>
//             <br></br>
//             <button className='btn btn-primary '>Login</button>
//         </form>
//         </>
//      );
//   }


//   export default Login;


// class component with create Ref


  class Login extends Component  {
     email = createRef();
    password = createRef();
  
     handleSubmit = async (e)=> {
      e.preventDefault();
      console.log('email:',this.email.current.value);
      console.log('password:',this.password.current.value);
      const account = {email: this.email.current.value ,password : this.password.current.value};
      if (account.email && account.password){
          const response = await axios.post ('https://reqres.in/api/login',account);
          console.log (response);
  }
    }
      
  render(){
    //    location = useLocation();
      return ( 
          <>
          <h1>Hi,</h1>  
      
          <h1>Login Form:</h1>
          <form onSubmit = {this.handleSubmit}>
              <div className="mb3">
                 <label htmlFor="email">Email:</label>
                 <input ref={this.email} id='email' className='form-control' type="text" />
              </div>
              <div className="mb3">
                 <label htmlFor="password">Password:</label>
                 <input ref={this.password} id='password' className='form-control' type="text" />
              </div>
              <br></br>
              <button className='btn btn-primary '>Login</button>
          </form>
          </>
       );
    }
}
  
    export default Login;
