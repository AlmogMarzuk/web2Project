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
    console.log(req.body.Name)
    
    const flight=Flight({
        Name:req.body.Name
    })

    flight.save((error,newFlight)=>{
        if(error){
            res.status(400).send({
                'status': 'fail',
                'error':error.message
            })

        }else{
            res.status(200).send({
                'status': 'ok',
                'flight':newFlight
            })
        }

    })
}

module.exports={
    getFlights,
    addFlight,
    getFlightById
}