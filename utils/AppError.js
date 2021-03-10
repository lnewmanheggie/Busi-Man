/* creating custom error handling
from https://levelup.gitconnected.com/react-template-for-jwt-authentication-with-private-routes-and-redirects-f77c488bfb85 */

class AppError extends Error {
    constructor(message, code) {
        super(message)
            console.log('App Error');
            this.code = code;
            this.isOperational = true;
            Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;