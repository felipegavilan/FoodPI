const { Router } = require('express')
const getDietsHandler = require('../handlers/handlerDiets')

const dietsRouter = Router();

dietsRouter.get('/', getDietsHandler)

module.exports = dietsRouter;