const {customApiError} = require('../errors/index')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
 
  
 
 
  if(err.name==='ValidationError'){
   let emptyFields = ''
    Object.entries(Object.entries(err)[0][1]).map(([key,value])=>{
      return key
    }).map((missing)=>{emptyFields +=`${missing+' '}`})

    return res.status(StatusCodes.BAD_REQUEST).json({msg:`Post ${emptyFields} can't be empty`} )
  }

  if(err.code ===11000){
    return res.status(StatusCodes.BAD_REQUEST).json({msg:"this email is already registered"})
  }

  if (err instanceof customApiError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })

  
}

module.exports = errorHandlerMiddleware
