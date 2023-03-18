const { Recipe, Diets } = require('../db');

const postRecipe = async( title, summary, healthScore, steps, diets, image ) =>{
    const newRecipe = await Recipe.create({
        title,
        summary,
        healthScore,
        steps,
        image,
    })


       diets.forEach(async ele =>{
        const [diets] = await Diets.findOrCreate({
            where:{
                name: [ele]
            }
        })
        await newRecipe.addDiets(diets)
       })

        return newRecipe
    }


module.exports = { postRecipe }