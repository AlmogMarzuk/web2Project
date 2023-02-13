
import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import Api from  './components/Api/Api'
import socketClient  from "socket.io-client";
import { useState } from 'react';
const SERVER = "http://localhost:3000";


function App() {
 

    return (
  <div>
      <Layout ></Layout>
     
      </div>
    );
  }
    
  


export default App;
