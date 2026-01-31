const express=require('express');
const router=express.Router();

function requireLogin(req,res,next){
    if(!req.session.useId)return res.rediect('/auth/sign-in');
    next();
}

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


    
router.get('/',requireLogin, (req,res)=>{
    res.render('specialties',{specialities});
}),


module.exports = router;