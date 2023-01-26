const express = require("express");
const router=express.Router();
const Flight=require('../controllers/flights')

/**
* @swagger
* tags:
* name: Auth
* description: The Authentication API
*/

router.get('/',Flight.getFlights)
router.get('/:id',Flight.getFlightById)
router.post('/',Flight.addFlight)

module.exports = router