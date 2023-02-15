const {Admin}=require('../models/admins')
const{Orders} = require('../models/orders')

const getAdmins = async(req,res)=>{
    try{
        admins =await Admin.find()
        res.status(200).send(admins)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}


const getOrders = async(req,res)=>{
    try{
        orders =await Orders.find()
        res.status(200).send(orders)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}

const login = async(req,res)=>{
   const user = req.query.username.enteredEmail
    req.session.user = user;
   req.session.save();
   console.log(req.session)
   return res.send("Your are logged in");
}

const checkCookie = async(req,res)=>{
     console.log(req.session)
    if(req.session.user){
        res.send(true);
    }else{
        res.send(false);
    }
}

const addOrder=async(req,res)=>{
    console.log(req.body);
    await Orders.insertMany(req.body);
    res.status(200).send("Order finished")
  
}

module.exports={
    getAdmins,
    login,
    checkCookie,
    getOrders,
    addOrder
}