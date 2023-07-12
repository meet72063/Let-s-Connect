const customAPiError = require('./customApiError')
const {StatusCodes} = require('http-status-codes')

class AuthenctionError extends customAPiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = AuthenctionError