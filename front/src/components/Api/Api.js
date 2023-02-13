import React, { Component }  from 'react';
import './Api.css'
import axios from 'axios';
import { useState , useRef ,useEffect } from 'react';
import default1 from './default';
const Api = ()=>{
  const [isActive, setIsActive] = useState(false);
    const [data, setdata] = useState(default1);
  const london = ()=>{
    const option = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: 'London', days: '7'},
        headers: {
          'X-RapidAPI-Key': 'c5e1fa75e8msh433e8726817dda3p16016cjsn33723a3074ec',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      axios.request(option).then(function (response) {  
        setdata(response.data)
        setIsActive(true)
    }).catch(function (error) {
        console.error(error);
    });
  

    }
    
const newYork = ()=>{

const newYork_option = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: 'new york', days: '7'},
  headers: {
    'X-RapidAPI-Key': 'c5e1fa75e8msh433e8726817dda3p16016cjsn33723a3074ec',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(newYork_option).then(function (response) {
  setdata(response.data)
  setIsActive(true)
}).catch(function (error) {
	console.error(error);
});
}

const Berlin =()=>{
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'berlin', days: '7'},
    headers: {
      'X-RapidAPI-Key': 'c5e1fa75e8msh433e8726817dda3p16016cjsn33723a3074ec',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setdata(response.data)
    setIsActive(true)
  }).catch(function (error) {
    console.error(error);
  });
}
      
 const Barcelona=()=>{
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'Barcelona', days: '7'},
    headers: {
      'X-RapidAPI-Key': 'c5e1fa75e8msh433e8726817dda3p16016cjsn33723a3074ec',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setdata(response.data)
    setIsActive(true)
  }).catch(function (error) {
    console.error(error);
  });
 }       

 const Tokyo=()=>{
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'tokyo', days: '7'},
    headers: {
      'X-RapidAPI-Key': 'c5e1fa75e8msh433e8726817dda3p16016cjsn33723a3074ec',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setdata(response.data)
    setIsActive(true)
  }).catch(function (error) {
    console.error(error);
  });
 }


  
 
  return  (
<div>
  <h1>Check the forecast in those location before you order a ticket</h1>
<div>
            <button onClick={()=>{london()}}>London</button>
            <button onClick={()=> {newYork()}}>New-York</button>
            <button onClick={()=>{Berlin()}}>Berlin</button>
            <button onClick={()=>{Barcelona()}}>Barcelona</button>
            <button onClick={()=>{Tokyo()}}>Tokyo</button>
        </div>
                <div  id="api_card"
                  style={{
                    visibility: isActive ? 'visible' : 'hidden'
                  }}
                >
               <h2>Date:{data.forecast.forecastday[0].date} Degrees Celsius: {data.forecast.forecastday[0].day.maxtemp_c} Condition: {data.forecast.forecastday[0].day.condition.text} <img src={data.forecast.forecastday[0].day.condition.icon}></img></h2>
                <h2>Date: {data.forecast.forecastday[1].date} Degrees Celsius: {data.forecast.forecastday[1].day.maxtemp_c}  Condition: {data.forecast.forecastday[1].day.condition.text} <img src={data.forecast.forecastday[1].day.condition.icon}></img> </h2>
                <h2>Date: {data.forecast.forecastday[2].date} Degrees Celsius: {data.forecast.forecastday[2].day.maxtemp_c}  Condition: {data.forecast.forecastday[2].day.condition.text} <img src={data.forecast.forecastday[2].day.condition.icon}></img></h2>
                </div>
</div>
  )

       
   
    
}

export default Api;