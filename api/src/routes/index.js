const { Router } = require('express');
const recipesRouter = require('./recipesRoutes')
const dietsRouter = require('./dietsRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesRouter)
router.use('/diets', dietsRouter)

module.exports = router;
