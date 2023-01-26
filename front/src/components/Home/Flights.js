import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Flights = (props) => {
  //   console.log(data);
  // const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/flight')
      .then(response => response.json())
      .then(data =>{
        setFilterData(data)
        setData(data)})
  }, []);


  //   Filter Type 
  const filterType = (category) => {  
       console.log(data)
       setFilterData(data.filter((item) => {
        return item.category === category;
      }))}
    

  //Filter by price
  const filterPrice = (price) => {
    setFilterData(data.filter((item) => {
            return item.price === price;
        }))}

  const handleClick = (id)=>{
    console.log(id)
  }
 


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="hover:text-amber-300 text-stone-700 font-bold text-4xl text-center">
        Top Rated Vacation
        
        {/* <span className="text-blue-600">Rated</span>{" "}
        <span className="text-stone-900">Menu Items</span> */}
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-stone-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFilterData(data)}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              All
            </button>
            <button
              onClick={() => filterType("Asia")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              Asia
            </button>
            <button
              onClick={() => filterType("North America")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              North Ameria
            </button>
            <button
              onClick={() => filterType("South America")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              South Amercia
            </button>
            <button
              onClick={() => filterType("Europe")}
              className="m-1 border-stone-700 text-blue-600  hover:text-stone-700"
            >
              Europe
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1    font-bold border-blue-600 text-stone-700  hover:text-blue-600"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display flights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer">
        {filterdata.map((item, index) => (
          <div onClick={() => navigate('/About/'+item._id)}
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-blue-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
