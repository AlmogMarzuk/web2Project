import React, { Component }  from 'react';
import { useState , useRef ,useEffect} from 'react';
import '../Flight/Flight.css';
import axios from 'axios';
import Api from '../Api/Api';
const CartItem =(props)=>{
  
  const [totalPrice,setTotalPrice] = useState(props.flight.totalPrice)
  const [quantity,setQuantity] = useState(props.flight.sum)
  const [visible,setvisible] = useState(true);

  const plusButton =()=>{
    setTotalPrice(totalPrice+props.flight.price);
    setQuantity(quantity+1);
    axios.post('http://localhost:8000/flight/addToCart', props.flight)
    .then(function (response) {
     if(response.data){
      console.log(response.data)
     }
     })
  }

  const minusButton =()=>{
  
    if(quantity==1){
      setvisible(false);
    }else{
      setTotalPrice(totalPrice-props.flight.price);
      setQuantity(quantity-1);
    }
    axios.post('http://localhost:8000/flight/removeFromCart', props.flight)
    .then(function (response) {
     if(response.data){
      console.log(response.data)
     }
     })
 
   
    } 
    return(
      <div  style={{
        display: visible ? 'block' : 'none'
      }}>
        <div className="card">
        <div className="card-header">
            <span className="letter">Location: {props.flight.name}</span>
        </div>
        <div className="card-title-group">
            <h5 className="card-title">Mainland {props.flight.category}</h5>
          </div>
        <img className="card-image" src={props.flight.image}  alt="Logo" />
        <div className="card-text">
        <span className="letter">Price per one ticket: {props.flight.price}$</span>
        
        
        </div>
        <div><span className="letter">quantity: {quantity}</span></div>
        <span className="letter">Total-Price: {totalPrice}</span>
       
        <div className="card-like-bar">
         <div>
         <button onClick={()=> plusButton()} id="PlusButton" >+</button>
              <button onClick={()=>minusButton()} id='MinusButton'>-</button>
         </div>
        </div>
       
      </div>
      </div>
    )

}

export default CartItem;
