const express = require('express');
const { setPost, getPost, updatePost,deletePost,getSinglePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getPost);
router.get('/:id', getSinglePost);
router.post('/', setPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;




