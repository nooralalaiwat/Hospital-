const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment')
const Doctor=require('../models/Doctors');


function requireLogin(req,res,next){
    if(!req.session.useId)return res.rediect('/auth/sign-in');
    next();
}
//new appointment
router.get('/new/:doctorId',requireLogin,async (req,res)=>{
    const doctor=await Doctor.findById(req.params.doctorId);
    res.render('appointment-new',{doctor});
});


// create appointment
router.post('/',requireLogin,async (req,res)=>{
    const {date,time,doctorId}=req.body;
const application=await Appointment.create
({
    date,

    time,

    patient:req.session.useId,

    doctor:doctorId,
});

res.redirect('/appointments/${appointment._id}')
});



//update
router.post('/:id/update',requireLogin,async (req,res)=>{
    const {date,time}=req.body;
await Appointment.findByIdAndUpdate(req.params.id,{date,time});
 res.redirect('/appointment/${req.params.id}');
});

//read appointment
router.get('/id',requireLogin,async (req,res)=>{
    const appointment=await Appointment.findById(req.params.id)
    .populate('doctors')
    .populate('patient');
    res.render('appointment-show',{appointment});
});

//edit form 
router.get('/:id/:edit',requireLogin,async (req,res)=>{
    const appointment=await Appointment.findById(req.params.doctorId)
     .populate('doctor');
     res.render('appointment-edit',{appointment});
});



//delete
router.get('/id/delete',requireLogin,async (req,res)=>{
await Appointment.findByIdAndDelete(req.params.id);
 res.redirect('/home');
});

module.exports = router;