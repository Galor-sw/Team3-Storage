const { Router } = require('express');
const storageController = require('../controllers/storageController');
const storageRouter = Router();

storageRouter.post('/unit', storageController.addUnit);
storageRouter.get('/', storageController.getUnits);

module.exports = storageRouter;