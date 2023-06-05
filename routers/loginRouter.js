const { Router } = require('express');
const loginController = require('../controllers/loginController');
const loginRouter = Router();

loginRouter.post('/', loginController.authentication);

module.exports = loginRouter;