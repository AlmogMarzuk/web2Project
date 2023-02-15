const express = require("express");
const router=express.Router();
const admins = require("../controllers/admins")
router.get('/',(req,res)=>{
    res.send('TOP vaction');
})

router.get('/admins',admins.getAdmins);
router.get('/cookieCheck',admins.checkCookie)
router.get('/login', admins.login);
router.get('/getOrders',admins.getOrders);
router.post('/addOrder',admins.addOrder)
module.exports = router