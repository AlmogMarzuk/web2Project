import { useState , useRef ,useEffect, Fragment} from 'react';
import axios from 'axios';
import Flight from '../Flight/Flight';
import '../FlightsList/List.css';
import CartItem from '../CartItem/CartItem'
import classes from '../Layout/AuthForm.module.css'

const AdminList = ()=> {


   const locationInputRef = useRef();
   const mainlandInputRef = useRef(); 
   const imageinputRef = useRef();
   const priceinputRef = useRef();
  const [list,setlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [Data,setData] = useState([])
  const [error,setError] = useState("");
  
  useEffect(()=>{
    axios.get('http://localhost:8000/flight/')
    .then(function (response) {
     setlist(response.data) 
     setData(response.data) 
     setLoading(false)
    })
  },[]);

   
  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}

const validInput = (location,land,img,price) =>{
    var bool =  true;
    console.log(location + land + img + price)
     if(location==""||land==""||img == ""|| price==""){
        bool = false;
        setError("Fill all the inputs")
     }else if(land!="Asia"&&land!="Australia"&&land!="North America"&&land!="South America"&&land!="Europe"){
        bool= false;
        setError("Main-Land is not valid")
     }else if(!isValidUrl(img)){
        bool = false;
        setError("img source is not valid")
     }else if(isNaN(price)){
        bool = false;
        setError("Price must be a number")
     }
     console.log(bool);
    return bool;
}

const removeFlight = (flight) =>{
    console.log("click")
console.log(flight)

}

const logout =() =>{
  window.localStorage.setItem('userName', null);
  window.location.reload();
 };


const submitHandler = () => {
  const location = locationInputRef.current.value;
   const land = mainlandInputRef.current.value;
   const img = imageinputRef.current.value;
   const price = priceinputRef.current.value;

   if(validInput(location,land,img,price)){
    const newflight = [  {
        id: Math.floor(Math.random() * 1000000).toString(),
        name: locationInputRef.current.value,
        category: mainlandInputRef.current.value,
        image: imageinputRef.current.value,
        price: priceinputRef.current.value,
        sum: 0,
        totalPrice:0,
      }]
      axios.post('http://localhost:8000/flight/add', newflight)
      .then(function (response) {
        if(response.data == "Found"){
          setError("This flight is aleady in the DB")
        }else{
            console.log(response.data)
        setData(response.data)  
        setError("This flight was added to the DB")
        }
       
       })
    
    
    }
 
}

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

 
 if(isLoading) {
  return (
    <h1>Loading</h1>
      )
 }else{
 
    return( 
      <Fragment>
    
        <div>
           <div id="main-navbar" className="navbar" >
             <h2 className="logo">Welcome back admin user here you can add new flights to the website</h2>
             <nav>
               <ul>
          
               <li onClick={()=>logout()}>
               Logout
               </li>
              
               </ul>
             </nav>
           </div>
         </div>
           
          
         <section className={classes.auth}>
      <h1>Add a new flight</h1>
      
        <div className={classes.control}>
          <label htmlFor='email'>Location</label>
          <input type='email' id='email' required ref = {locationInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Mail-Land</label>
          <input id='password' required ref = {mainlandInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Image URL</label>
          <input  id='password' required ref = {imageinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>price</label>
          <input  id='password' required ref = {priceinputRef} />
        </div>
        <div className={classes.actions}>
         <button 
         onClick={submitHandler}
         >Login</button>
        
        </div>
     <h1>{error}</h1>
    </section>


           
         <input id="filter"  onChange={inputChange} placeholder="Serach flight by the location name,mainland or max price "></input>
        <section class="cards">
           {Data.map( (flight )  => {
            return(
             <div>
           <Flight flight={flight} ></Flight> 
             
             <button onClick={()=>removeFlight(flight)}>Remove flight</button>
             </div> )
           }
           
           )}
       </section>
       </Fragment>
         )
  }
  
 }


export default AdminList;