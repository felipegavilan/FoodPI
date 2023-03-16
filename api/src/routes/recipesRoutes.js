const { Router } = require('express')
const {getRecipesHandler, getRecipesIdHandler, postRecipesHandler} = require('../handlers/handlerRecipes')

const recipesRouter = Router();


recipesRouter.get('/', getRecipesHandler)

recipesRouter.get('/:id', getRecipesIdHandler)

recipesRouter.post('/', postRecipesHandler)

module.exports = recipesRouter;