const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment')


//create open form for appointment
router.get('/new',(req,res)=>{
res,render('Appointment')
}
);

// create appointment
router.post('/',async (req,res)=>{
const application=await Appointment.create(req.body);
res.redirect('/new');
});




module.exports = router;