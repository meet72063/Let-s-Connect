const express = require('express')
const router = express.Router()
const {register,login,signUp,loggedout} = require('../controllers/authContoller')
const AuthenctionMiddleware= require('../middlewares/authentication')
const tokenAuthentication = require('../middlewares/signUpauthentication')
const {editUser,deleteUser,getUser} = require('../controllers/userActions')

router.post('/register',register)
router.post('/login',AuthenctionMiddleware ,login)
router.get('/signup',tokenAuthentication,signUp)
router.get('/logout',loggedout)
router.delete('/delete',tokenAuthentication,deleteUser)
router.patch('/update',tokenAuthentication,editUser)
router.get('/getUser',tokenAuthentication,getUser)








module.exports = router

