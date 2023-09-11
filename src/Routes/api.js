const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
//Blogs related routes
router.get('/blog/create',blogController.create);
router.get('/blog/read',blogController.read);
router.get('/blog/delete',blogController.delete);
router.get('/blog/update',blogController.update);

module.exports = router;