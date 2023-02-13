import React, { Component }  from 'react';
import { useState , useRef ,useEffect, Fragment} from 'react';
import axios from 'axios';
import Flight from '../Flight/Flight';
import './List.css';
import CartItem from '../CartItem/CartItem'
const List = ()=> {

  const [list,setlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [formStatus, setformStatus] = useState("1"); 
  const [Cart,setCart] = useState([]);
  const [Data,setData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:8000/flight/')
    .then(function (response) {
     setlist(response.data) 
     setData(response.data) 
     setLoading(false)
    })

  },[]);

 const logout =() =>{
  window.localStorage.setItem('userName', null);
  window.location.reload();
 };


  const inputChange = event => {

    if(event.target.value == ""){
      setlist(Data)
      console.log("test")
    return;
    }
    let result = [];
    if(isNaN(event.target.value)){
      Data.forEach(item =>{
        if(item.name.toLowerCase().includes(event.target.value)){result.push(item)}
        if(item.category.toLowerCase().includes(event.target.value)){result.push(item)}
       })
       setlist(result); 
    }else{
      Data.forEach(item =>{
        if(parseInt(item.price) <parseInt(event.target.value)){result.push(item)
          console.log(event.target.value)
        console.log(item.price)}
      })
      setlist(result); 
    }

  };
const addToCart =((item)=>{


console.log(item);
const i = Cart.findIndex(e => e.name === item.name);
if(i==-1){
  item.sum++;
  item.totalPrice = item.price;
  setCart ( (Cart ) => {
    return [item , ...Cart];
  });
}else{
  Cart[i].sum++;
  const j = Data.findIndex(e => e.name == item.name)
  Cart[i].totalPrice = Data[j].price*Cart[i].sum;
}



})
 
 if(isLoading) {
  return (
    <h1>Loading</h1>
      )
 }else{
  if(formStatus==1){
    return( 
      <Fragment>
      
        <div>
           <div id="main-navbar" className="navbar" >
             <h1 className="logo">Buy flights and move to checkout when ready</h1>
             <nav>
               <ul>
               <li  onClick={()=>setformStatus("1")}>
                 Flights
               </li>
               <li onClick={()=>setformStatus("2")}>
                 Cart
               </li>
               <li onClick={()=>logout()}>
               Logout
               </li>
              
               </ul>
             </nav>
           </div>
         </div>
       <div className="filter">
       <input   onChange={inputChange} placeholder="Serach flight by the location name,mainland or max price "></input>
       </div>
        
        <section class="cards">
           {list.map( (flight )  => {
            return(
              <div>
           <Flight flight={flight} ></Flight> 
              <button onClick={()=>addToCart(flight)}> Add to Cart</button>
              </div>
            
            )
           }
           
           )}
       </section>
       </Fragment>
         )
  }else{
    return( 
      <Fragment>
        
        <div>
           <div id="main-navbar" className="navbar" >
             <h1 className="logo">Edit your cart </h1>
             <nav>
               <ul>
               <li  onClick={()=>setformStatus("1")}>
                 Flights
               </li>
               <li onClick={()=>setformStatus("2")}>
                 Cart
               </li>
               <li onClick={()=>logout()}>
               Logout
               </li>
               </ul>
             </nav>
           </div>
         </div>
     
     
        <section class="cards">
           {Cart.map( (flight )  => {
            return(
              <div>
           <CartItem flight={flight} ></CartItem> 
              <button id="RemoveButton" onClick={()=>addToCart(flight)}>Remove</button>
            
              </div>
            
            )
           }
           
           )}
       </section>
       </Fragment>
         )
  }
  
 }
}

export default List;