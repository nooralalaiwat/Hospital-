const express=require('express');
const router=express.Router();

function requireLogin(req,res,next){
    if(!req.session.useId)return res.rediect('/auth/sign-in');
    next();
}

router.get('/',(req,res)=>res.redirect('/auth/sign-in'));


router.get('/profile',requireLogin,(req,res)=>{
    res.render('profile');
});

router.get('/home',requireLogin,(req,res)=>{
    res.render('home');
});

module.exports=router;