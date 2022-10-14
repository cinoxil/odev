const express = require('express');
const Router = express.Router();
const { postMw } = require('../middlewares/helloMiddleware');
const { getController, postController, putController, deleteController } = require('../controllers/helloController');

Router.get('/', getController);

Router.post('/', postMw, postController);

Router.put('/', putController);

Router.delete('/', deleteController);

module.exports = Router;
