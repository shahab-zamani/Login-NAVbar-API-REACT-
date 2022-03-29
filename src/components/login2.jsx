import React, { Component } from 'react';

import Input from './input';
import * as yup from'yup';
import axios from 'axios';
// import {  useNavigate } from 'react-router-dom';
// import WithNavigate from './withnavigate';

// import axios from 'axios';
// import React, { createRef,Component} from 'react';
// import {useLocation} from 'react-router-dom';
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


  class Login2 extends Component  {
    //  email = createRef();
    // password = createRef();
  state ={
      account : {
       email : '',
       password : ''
      },
      errors : [],
      sending : false
  }


  schema = yup.object().shape({
      email : yup.string().email('Email Format is wrong').required('Email field is Required') ,
      password : yup.string().min(4,'Password should be at least 4 chracter')
  })

      validate = async ()=> {
        try {
          const result = await this.schema.validate(this.state.account, {abortEarly : false});
          return result
        } catch (error) {
          console.log(error.errors);
          this.setState({errors : error.errors})
          
        }
      }
      

     handleSubmit = async (e)=> {
      e.preventDefault();
     const result = await this.validate();
     console.log(result);
     if(result){      // result is true means no error like required min 4 and email format 
      try {
        this.setState({sending : true})
        const response = await axios.post('https://reqres.in/api/login',result);  // sending email and password with await to api // 200
        console.log(response);
        console.log(response.data.token);
        // const navigate = useNavigate();
        localStorage.setItem('token',response.data.token);
        window.location= ('/dashboard');
        // onclick = { ()=> navigate('/dashboard')} ;
        
        this.setState({sending : false})
        this.setState({errors: ['Email or password is correct']}); 
      } catch (error) {
        this.setState({errors: ['Email or password is wrong']});  // check error for email and password after result check // 400
        this.setState({sending : false})
        
      }
     }
    //   console.log('email:',this.email.current.value);
    //   console.log('password:',this.password.current.value);
    //   const account = {email: this.email.current.value ,password : this.password.current.value};
    //   if (account.email && account.password){
    //       const response = await axios.post ('https://reqres.in/api/login',account);
    //       console.log (response);
//   }
    }

    handleChange = async ({ currentTarget : input })=>{
        // const input = e.currentTarget;
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState ( {account});

    }

  //   
  

//   withNavigate = (props) => {
//     let navigate = useNavigate();
//     return  navigate={navigate} 
// }
      
  render()  {
    //    location = useLocation();

    const {email ,password} = this.state.account;
            // const navigate = useNavigate();

      return ( 
          <>{
            this.state.errors.length !== 0 && (
              <div className="alert alert-danger"> 
              <ul>
                {
                  this.state.errors.map((e,i)=> <li key = {i} > {e} </li>)
                }
              </ul>
              </div>
            )
          }
          
          <form onSubmit = {this.handleSubmit}>

            <Input name='email' value={email} onChange={this.handleChange} lable='Email'/>

              

              <Input name='password' value={password} onChange={this.handleChange} lable='Password'/>

              <br></br>
              <button disabled={this.state.sending} className='btn btn-primary '>Login</button>
          </form>
          </>
       );
    }
}
  
    export default Login2;

    // onClick= { this.result !== ''   &&   this.withNavigate ('/dashboard')} 