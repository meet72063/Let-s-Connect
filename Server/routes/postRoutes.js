const express = require('express')
const router = express.Router()
const {newPost,deletePost,EditPost,getAllposts} = require('../controllers/usePosts')
const tokenauthentication = require('../middlewares/signUpauthentication')



router.route('/newPost').post(tokenauthentication,newPost)
router.route('/post/:id').delete(tokenauthentication,deletePost).patch(tokenauthentication,EditPost).get(tokenauthentication,getAllposts)









module.exports = router