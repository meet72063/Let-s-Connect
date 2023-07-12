const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'e-mail is required'],
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) caracters'],
    },

    role: {
        type: Number,
        default: 0
    }

}, { timestamps: true })


userSchema.pre('save',async function(){
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.createJWt = function(){
 return jwt.sign({userId:this._id,userName:this.firstName},process.env.JWt_Secret,{expiresIn:1000*60*60})
}

userSchema.methods.comparePassword = async function(userPassword){
    const result =   await bcrypt.compare(userPassword,this.password)
    return result
}


module.exports = mongoose.model('User',userSchema)