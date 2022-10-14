const express = require('express');
const Router = express.Router();
const helloRoute = require('./helloRoutes');
const { helloMw } = require('../middlewares/helloMiddleware');

Router.use('/hello', helloMw, helloRoute);

module.exports = Router;
