var mongoose = require('mongoose');
const User = require('../models/User')

exports.createUser = async(req,res)=>{
    const {name,email,photo_url,role,active,password} = req.body;
    if(!email || !password){
        return res.sendStatus(406);
    }
    const user = new User({
        name,
        email,
        photo_url,
        role,
        active,
        password,
    });
    try{
        var response = await user.save();
        return res.status(201).json(
            response
        );
    }
    catch(err){

        res.status(500).json({
            error:err
        })
    }
    
}