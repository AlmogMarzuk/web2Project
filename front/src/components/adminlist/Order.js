import React, { Component }  from 'react';
import { useState , useRef ,useEffect} from 'react';
import './Order.css';

const Order =(props)=>{
  


    return(
        <div className="order">
        <div className="orderText">
            <span className="letter">Name: {props.order.name}</span>
        </div>
      
        <div className="orderText">
        <span className="letter">Price: {props.order.price}$</span>
        </div>
    
      </div>
    )

}

export default Order;