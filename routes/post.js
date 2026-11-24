const express = require('express');
const postController = require('../controllers/post');

const { verify, verifyAdmin } = require('../auth');

const router = express.Router();

router.post('/addPost', verify, postController.addPost);
router.get('/getPosts', verify, postController.getPosts);
router.get('/getPost/:id', verify, postController.getPostById);
router.patch('/updatePost/:id', verify, postController.updatePost);
router.delete('/deletePost/:id', verify, verifyAdmin, postController.deletePost);

module.exports = router;