import React, { Component }  from 'react';
import { useState , useRef ,useEffect, Fragment} from 'react';
import axios from 'axios';
import Flight from '../Flight/Flight';
import './List.css';
import CartItem from '../CartItem/CartItem'
import Api from '../Api/Api';
const List = (props)=> {

  const [list,setlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [formStatus, setformStatus] = useState("1"); 
  const [Cart,setCart] = useState([]);
  const [Data,setData] = useState([])
  const [name,setname] = useState(props.name)
  useEffect(()=>{
    axios.get('http://localhost:8000/flight/')
    .then(function (response) {
     setlist(response.data) 
     setData(response.data) 
     setLoading(false)
    })
   
    axios.post('http://localhost:8000/flight/getCart')
    .then(function (response) {
    setCart(response.data);
    })

 
   
    console.log("test")
    
  },["1", formStatus]);

 const logout =() =>{
  window.localStorage.setItem('userName', null);
  window.location.reload();
 };

const finishOrder=()=>{

  //if(Cart!=[]){
    let totalprice = 0 ;
  axios.post('http://localhost:8000/flight/getCart')
  .then(function (response) {
  response.data.forEach(item=>{
    console.log(item.totalPrice)
    totalprice+=item.totalPrice
})

const newOrder = [{
  id: Math.floor(Math.random() * 1000000).toString(),
  name: name,
  price: totalprice
}]

axios.post('http://localhost:8000/addOrder',newOrder)
.then(function (response) {
console.log(response.data);

axios.post('http://localhost:8000/flight/emptyCart')
.then(function (response) {
  console.log("cart is empty")
  })

})

setformStatus("3")
setTimeout(() => {
  window.localStorage.setItem('userName', null);
  window.location.reload();
}, 3000);
})
  





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

  axios.post('http://localhost:8000/flight/addToCart', item)
      .then(function (response) {
       if(response.data){
        console.log(response.data)
        setCart(response.data);
       }
       })
       
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
       <div className="api">
       <Api></Api>
       </div>
       </Fragment>
         )
  }else if((formStatus==2)){
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
             
            
              </div>
            
            )
           }
           
           )}
        
       </section>
       <button  onClick={()=>finishOrder()}>FINISH YOUR ORDER</button>
       <div className="api">
       <Api></Api>
       </div>
    
       </Fragment>
         )
  }else if((formStatus==3)){
    return (
      <h1>Your order is finished</h1>
    )
  }
  
 }
}

export default List;