const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connect = require('./Db/connect')
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFoundMiddleware')
const router = require('./routes/userRoute')
const postrouter = require('./routes/postRoutes')

require('express-async-errors');




const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin :'http://localhost:3000',
credentials:true}))
//middlewares
app.use('/',router)
app.use('/',postrouter)




//routes
app.get('/',(req,res,next)=>{
    res.send('welcome to the home page ')
    
    // throw new Error('this is the new error')
})




//errorHandler
app.use(errorHandler)

app.use(notFound)




const port = process.env.Port||4000

const start = async()=>{
    try {
       await connect(process.env.mongo_url)
       console.log('mongo connected')
    } catch (error) {
        console.log(error)
    }
}


start()
app.listen(port,()=>{
    console.log(`server is listening on the port ${port}`)
})