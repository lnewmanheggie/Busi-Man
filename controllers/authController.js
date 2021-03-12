// from https://levelup.gitconnected.com/react-template-for-jwt-authentication-with-private-routes-and-redirects-f77c488bfb85

const User = require('./../models/users');
const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');

// create token for authenticated user
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const createUserToken = async(user, code, req, res) => {
    try{
        const token = signToken(user._id);
    
        //cookie settings
        res.cookie('jwt', token, 
        {
            expires: new Date(Date.now() + 30 * 60000),  // expires in 30 min
            httpOnly: true,
            // secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
            sameSite: 'none'
        });
    
        // remove user password from output
        user.password = undefined;
        res.status(code).json({
            status: 'success',
            token,
            data: {
                user
            }
        })
    } catch (error){
        console.log(error)
    }
}

// create new user
exports.registerUser = async(req, res, next) => {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            company: req.body.company,
            manager: req.body.manager,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });

        createUserToken(newUser, 201, req, res);
    } catch(err) {
        res.status(500).json({error: err});
    }
}

// log user in
exports.loginUser = catchAsync(async(req, res, next) => {
    const { email, password } = req.body;

    // do email and password exist in db?
    if (!email || !password) {
        return next(new AppError('Provide a valid email and password', 400));
    }

    // are email and password correct?
    const user = await User.findOne({ email }).select('+password'); //exclude always but include sometimes
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    createUserToken(user, 200, req, res);
})

// // check if user is logged in
// exports.checkUser = catchAsync(async(req, res) => {
//     let currentUser;
//     let token = req.headers?.cookie?.split(' ')[1].startsWith('jwt') || req.headers.authorization.split(' ')[1]
//     if (token) {
//         // const token = req.headers.cookie.split(' ')[1].substring(4);
//         const decoded = await jwt.verify (token, process.env.JWT_SECRET);
//         currentUser = await User.findById(decoded._id);
//         // const decoded = await jwt.verify (token, process.env.JWT_SECRET);
//         // console.log(decoded);
//         res.status(200).send({ currentUser });
//     } else {
//         res.status(404).json({message: 'not found'})
//     }
// })


// log out
// exports.logoutUser = catchAsync(async (req, res) => {
//     res.cookie('jwt', 'loggedout', {
//         expires: new Date(Date.now() + 1 * 1000),
//         httpOnly: true
//     });
//     res.status(200).send('user logged out');
// })