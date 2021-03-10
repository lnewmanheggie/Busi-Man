// from https://levelup.gitconnected.com/react-template-for-jwt-authentication-with-private-routes-and-redirects-f77c488bfb85

const User = require('./../models/users');
const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

// create token for authenticated user
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const createUserToken = async(user, code, req, res) => {
    const token = signToken(user._id);

    //cookie settings
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 8 * 3600000),  // expires in 8 hours
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
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
}

// create new user
exports.registerUser = async(req, res, next) => {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            company: req.body.company,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });

        createUserToken(newUser, 201, req, res);
    } catch(err) {
        next(err);
    }
}

// log user in
exports.loginUser = catchAsync(async(req, res, next) => {
    const { username, password } = req.body;

    // do email and password exist in db?
    if (!username || !password) {
        return next(new AppError('Provide a valid username and password', 400));
    }

    // are username and password correct?
    const user = await User.findOne({ username }).select('+password'); //exclude always but include sometimes
    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect username or password', 401));
    }

    createUserToken(user, 200, req, res);
})

// check if user is logged in
exports.checkUser = catchAsync(async(req, res, next) => {
    let currentUser;
    if (req.cookies.jwt) {
        const token = req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        currentUser = await User.findById(decoded.id);
    } else {
        currentUser = null;
    }

    res.status(200).send({ currentUser });
})

// log out
exports.logoutUser = catchAsync(async (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true
    });
    res.status(200).send('user logged out');
})