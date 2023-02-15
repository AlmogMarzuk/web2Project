import React, { Component }  from 'react';
import { Fragment } from 'react';
import { useState , useRef ,useEffect } from 'react';
import axios from 'axios';
import classes from './AuthForm.module.css';
import Register from '../Register/Register'
import List from '../FlightsList/List';
import AdminList from '../adminlist/AdminList';
import Api from '../Api/Api';

const Layout = (props) => {
  const [formStatus, setformStatus] = useState("1"); 
  useEffect(() => {
 
      let data = window.localStorage.getItem('userName');
      if(data != "null"){
        axios.get('http://localhost:8000/admins')
        .then(function (response) {
        const adminslist = response.data;
        let found = false;
        adminslist.forEach(element => {
          if(element.name == data){
            found = true;
            setformStatus("4");
          }
        });
        if(found == false){setformStatus("3")}
        })
      }
  },[]);

const login =  (enteredEmail)=>{
  window.localStorage.setItem('userName', enteredEmail);
  axios.get('http://localhost:8000/admins')
  .then(function (response) {
  const adminslist = response.data;
  let found = false;
  adminslist.forEach(element => {
    if(element.name == enteredEmail){
      found = true;
      setformStatus("4");
    }
  });
  if(found == false){setformStatus("3")}
  })

};
 
const emailInputRef = useRef();
const passwordInputRef = useRef(); 
const [error,setError] = useState("");
const [logintest,setLogin] = useState("")
const [isLogin, setIsLogin] = useState("false");
const [isLoading, setIsLoading] = useState(false);
const [name,setName]= useState("")



const submitHandler = (event) =>{
event.preventDefault();

const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

// optional add validation 

setIsLoading(true);

let url ; 



url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0Xs5gm4eJ2D3G5ia43sC-j7IQTYtj-pQ';


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
  setError("hello "+enteredEmail+" your details are correct");
  setName(enteredEmail)
login(enteredEmail);
  
}).catch (err => {
  setError("Email And Password Are Not Match")

});
}  



  
 if(formStatus=="1"){
  return (
    <div className={classes.frag}>
    <Fragment>
    <div>
      <div id="main-navbar" className={classes.navbar} >
        <h1 className="logo">Login to watch out flights or sign-up if you don't have an account</h1>
        <nav>
          <ul>
          <li  onClick={()=>setformStatus("1")}>
            Login
          </li>
          <li onClick={()=>setformStatus("2")}>
            Sing-Up
          </li>
         
          </ul>
        </nav>
      </div>
    </div>
    
      <div className={classes.test}>
      <main>{props.children}</main>
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
         <button 
         onClick={submitHandler}
         >Login</button>
          {
            isLoading && <p> Loading ... </p>
          }
          <button
            type='button'
            className={classes.toggle}
           
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
     <h1>{error}</h1>
    
    </section>
    </div>
    <div className={classes.api}>

    <Api></Api>
    </div>
   
    </Fragment>
    </div>
  );
 } else if(formStatus=="2"){
  return(

    <Fragment>
     <div>
      <div id="main-navbar" className={classes.navbar} >
        <h1 className="logo">Login to watch out flights or sign-up if you don't have an account</h1>
        <nav>
          <ul>
          <li  onClick={()=>setformStatus("1")}>
            Login
          </li>
          <li onClick={()=>setformStatus("2")}>
            Sing-Up
          </li>
         
          </ul>
        </nav>
      </div>
    </div>
  
    <main>{props.children}</main>
    <Register />;
  </Fragment>
  
   )
 } else if(formStatus =="3"){
  return (
    <Fragment>
  <List name={name}/>
  </Fragment>)
  
 }else{
  return(
   <AdminList></AdminList>
  )
 }
 
};

export default Layout;
