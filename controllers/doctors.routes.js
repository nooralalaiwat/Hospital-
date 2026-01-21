const express = require("express");
const router = express.Router();
const Doctor= require('../models/Doctors')



router.get('/specialties',(req,res)=>{
    const specialities = [
'Pediatrics',
'Orthopedics',
'Dermatology',
'Obstetrics',
'Psychiatry',
'General Surgery',
'Ophthalmology',
'Anesthesiology',
    ];
    res.render('specialty.ejs',{specialities})
})




module.exports = router;