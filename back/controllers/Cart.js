const e = require('express')
const {Cart} = require('../models/Cart');

const addToCart = async(req,res)=>{
   
    const item = req.body
    const i = Cart.findIndex(e => e.name === item.name);
if(i==-1){
  item.sum=1;
  item.totalPrice = item.price;
  Cart.push( item) ;
}else{
  Cart[i].sum++;
  Cart[i].totalPrice = Cart[i].totalPrice + item.price;
}
console.log(Cart)
    return res.send(Cart);
 }

 const removeFromCart = async(req,res)=>{
    const item = req.body
const i = Cart.findIndex(e => e.name === item.name);
if(i==-1){
 res.send("Item is not in the cart")
}else{
    if(Cart[i].sum==1){
        console.log("test")
        Cart.splice(i, 1)
        console.log(Cart)
    }else{
        Cart[i].sum--;
       Cart[i].totalPrice = Cart[i].totalPrice - item.price;
       console.log(Cart)
    }

}
    return res.send(Cart);
 }


const getCart = async(req,res)=>{
    res.send(Cart)
}

const emptyCart = async(req,res)=>{
    Cart.length = 0;
    res.send("order finished")
}

 module.exports={
    addToCart,
    getCart,
    removeFromCart,
    emptyCart
}