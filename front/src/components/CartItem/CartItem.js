import React, { Component }  from 'react';
import { useState , useRef ,useEffect} from 'react';
import '../Flight/Flight.css';

const CartItem =(props)=>{
    
    return(
        <div className="card">
        <div className="card-header">
            <span className="letter">Location: {props.flight.name}</span>
        </div>
        <div className="card-title-group">
            <h5 className="card-title">Mainland {props.flight.category}</h5>
          </div>
        <img className="card-image" src={props.flight.image}  alt="Logo" />
        <div className="card-text">
        <span className="letter">Price: {props.flight.price}$</span>
        
        
        </div>
        <div><span className="letter">quantity: {props.flight.sum}</span></div>
        <span className="letter">Total-Price: {props.flight.totalPrice}</span>
       
        <div className="card-like-bar">
         <div>
         <button id="PlusButton" >+</button>
              <button id='MinusButton'>-</button>
         </div>
        </div>
       
      </div>
    )

}

export default CartItem;
