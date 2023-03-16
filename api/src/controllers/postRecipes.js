const { Recipe, Diets } = require('../db');

const postRecipe = async( title, summary, healthScore, steps, diets, image ) =>{
    const newRecipe = await Recipe.create({
        title,
        summary,
        healthScore,
        steps,
        image,
    })
        const dietsDb = await Diets.findAll({
            where:{
                name: [diets]
            }
        })
        await newRecipe.addDiets(dietsDb)

        return newRecipe
    }


module.exports = { postRecipe }