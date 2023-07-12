const customAPiError = require('./customApiError')
const {StatusCodes} = require('http-status-codes')

class notFound extends customAPiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = notFound