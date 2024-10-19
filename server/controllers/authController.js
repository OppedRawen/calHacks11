const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'User already exists'});
    
             //create new user
             user = new User({name,email,password});
             await user.save();
    
             //return token
             const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:'1d'});
            res.status(201).json({token});
            
        }
    } catch (error) {
        res.status(500).json({msg:'Server error'});
    }
    
    
}

exports.loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:'Invalid credentials'});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'Invalid credentials'});

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({message:'Server error'});
    }
}
