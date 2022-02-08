var mongoose = require('mongoose');
const User = require('../models/User')

exports.createUser = async (req, res) => {
    const { name, email, photo_url, role, active, password } = req.body;
    if (!email || !password) {
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
    try {
        var response = await user.save();
        return res.status(201).json(
            response
        );
    }
    catch (err) {

        res.status(500).json({
            error: err
        })
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.sendStatus(406);
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                error: 'We have not found your email.'
            })
        }
        const isValid = await user.comparePassword(password);
        if (!isValid)
            return res.status(401).json({
                error: 'Invalid Password'
            })
        const token = await user.getJwtSignedToken();
        res.status(200).json({
            token: token,
            message: "Login Success"
        })
    }
    catch (err) {
        console.log('error', err);
    }

}