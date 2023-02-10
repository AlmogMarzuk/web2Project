import { useState , useRef ,useEffect} from 'react';
import './Flight.css';

const Flight =(props)=>{
  


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
        <div className="card-like-bar">
      
        </div>
    
      </div>
    )

}

export default Flight;
