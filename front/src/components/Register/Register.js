import React, { Component }  from 'react';
import { useState , useRef } from 'react';

import classes from './Register.module.css';

const Register = () => {
 
  const emailInputRef = useRef();
  const passwordInputRef = useRef(); 
   const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const checkBeforeSubmit = (Event) =>{
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
   var valid = true;
  console.log(enteredPassword.length);


if(!validateEmail(enteredEmail)){
    setError("Email is not valid");
    valid = false;
}else  if(enteredPassword == ""){
    setError("Fill the password please!")
        valid = false;
   }else  if (enteredPassword.length<8) {
    setError("Password must be with more then 8 characters")
    valid = false;
}

 if(valid== true){submitHandler()}
 
};

  const submitHandler = () =>{
  

const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

// optional add validation 

setIsLoading(true);

let url ; 





  url =  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0Xs5gm4eJ2D3G5ia43sC-j7IQTYtj-pQ' ; 
 

fetch (url ,
  {
    method: 'POST',
    body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then ( res => {
    setIsLoading(false);
    if(res.ok) {
     return res.json();
    }else{
      return res.json ().then((data) => {
       let errorMessage = 'Auth failed';
    
       throw new Error( errorMessage);
      });
    }
  }).then( (data) => {
    setError("You signed up!")
  }).catch (err => {
    setError("Error, try again later...")
  });
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
     
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref = {passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button className={classes.registerButton} onClick={checkBeforeSubmit}>Create Account</button>
          {
            isLoading && <p> Loading ... </p>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>

      <h1>{error}</h1>
    </section>
  );
};

export default Register;
