const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:[true,'Please provide title'] ,
       
    },
    content:{
        type:String,
        required:[true,'Please provide post content']
    },
    author:{
          type:String,
          default:"Unknown"
    },
     createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: [true, 'Please provide user'],
      },
},{timestamps:true})



module.exports= mongoose.model('posts',postSchema)