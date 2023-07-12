const customAPiError = require('./customApiError')
const {StatusCodes} = require('http-status-codes')

class BadRequest extends customAPiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest