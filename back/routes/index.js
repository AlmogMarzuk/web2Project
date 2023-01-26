const express = require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('TOP vaction');
})

module.exports = router