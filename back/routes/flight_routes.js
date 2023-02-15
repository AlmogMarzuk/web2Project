const express = require("express");
const router=express.Router();
const Flight=require('../controllers/flights')
const Cart = require('../controllers/Cart');
/**
* @swagger
* tags:
* name: Auth
* description: The Authentication API
*/

router.get('/',Flight.getFlights)
router.get('/:id',Flight.getFlightById)
router.post('/add',Flight.addFlight)
router.post('/removeFlight',Flight.removeFlight)
router.post('/addToCart',Cart.addToCart)
router.post('/getCart',Cart.getCart)
router.post('/removeFromCart',Cart.removeFromCart)
router.post('/emptyCart',Cart.emptyCart)
module.exports = router