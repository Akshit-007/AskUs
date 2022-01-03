const express = require('express');
const { getPosts, createPost, commentPost, deletePost } = require('../controllers/posts.js')

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.put('/comment', commentPost)
router.delete('/:id', deletePost)

module.exports = router;