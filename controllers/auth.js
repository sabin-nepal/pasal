var mongoose = require('mongoose');
const User = require('../models/User')

exports.createUser = async(req,res)=>{
    
}
const user1 = new User({
    email: 'sabinnepal2k17@gmail.com',
    password: 'sabin123',
})
console.log(user1)
setTimeout(()=>{
    
user1.save((err,data)=>{
    if(err) return console.error(err)
    console.log(data + 'created');
});
},5000)