const e = require('express')
const {Flight}=require('../models/flight_model')

const getFlights= async(req,res)=>{
    try{
        flights=await Flight.find()
        res.status(200).send(flights)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}


const getFlightById= async(req,res)=>{

    if(req.params.id==null | req.params.id==undefined){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    }
    try{
        flight=await Flight.findById(req.params.id)
        res.status(200).send(flight)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}

const addFlight=async(req,res)=>{
        console.log("add new flight to the DB")
        await Flight.insertMany(req.body);
        flights=await Flight.find()
        res.status(200).send(flights)
      
}

const removeFlight = async(req,res) =>{
    console.log(req.body);
   await Flight.deleteOne( { 
        name: req.body.name ,
        price: req.body.price } )
        flights=await Flight.find()
        res.status(200).send(flights)  


}


module.exports={
    getFlights,
    addFlight,
    getFlightById,
    removeFlight
}