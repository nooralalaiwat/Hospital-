const express = require("express");
const router = express.Router();
const Doctor= require('../models/Doctors')



function requireLogin(req,res,next){
    if(!req.session.useId)return res.rediect('/auth/sign-in');
    next();
}
router.get('/specialties',requireLogin,async (req,res)=>{
    const speciaity = req.params.specialities;
const doctors = await Doctor.find({speciaity});
    res.render('doctors',{speciaity});

}),

module.exports = router;