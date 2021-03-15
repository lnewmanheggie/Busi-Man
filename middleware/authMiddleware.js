const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const User = require('./../models/users');

exports.checkUser = catchAsync(async(req, res, next) => {
    let currentUser;
    console.log(req.headers)
    let token = req.headers.customheader.split(' ')[1]
    console.log(token);

    // req.headers?.cookie?.split(' ')[1].startsWith('jwt') || 
    
    if (token) {
        // const token = req.headers.cookie.split(' ')[1].substring(4);
        const decoded = await jwt.verify (token, process.env.JWT_SECRET);
        currentUser = await User.findById(decoded.id);
        if (currentUser._id) {
            // next()
            res.status(200).json({currentUser})
        } else {
            res.status(404).json({message: 'not authorized'})
        }
        // const decoded = await jwt.verify (token, process.env.JWT_SECRET);
        // console.log(decoded);
    } else {
        res.status(401).json({message: 'not authorized'})
    }
})