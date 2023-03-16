const axios = require('axios')
const { Recipe, Diets } = require('../db')
const { API_KEY } = process.env


const getRepiceIdApi = async(id) =>{
    let recipeId = []
    let recipeApiId = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    console.log(recipeApiId.data.id)
    const info = recipeApiId.data
    recipeId.push({
        id: info.id,
        title: info.title,
        image: info.image,
        summary: info.summary.replace(/<\/?[^>]+(>|$)/g, ""),
        healthScore: info.healthScore,
        steps: info.analyzedInstructions.map(s => s.steps.map(s => s.step)),
        diets: info.diets.map(d=> d),
    })
    return recipeId;
}

const getRecipeIdDb = async(id) =>{
    let recipeIdBd = await Recipe.findAll({
        where: {
            id: id
        },
        include:{
            model: Diets,
            attributes: ['name'],
            throught:{
                attributes:[]
            }
        }
    })
  
    const res = recipeIdBd.map( r =>{
        return{
            id: r.id,
            title: r.title,
            image: r.image,
            summary: r.summary.replace(/<\/?[^>]+(>|$)/g, ""),
            healthScore: r.healthScore,
            steps: r.steps,
            diets: r.diets.map(d=> d),
        }
    })
   
    return res
}

const getRecipeById = async(id, source) =>{
    const recipe = source == "bdd" ?
    await getRecipeIdDb(id) :
    await getRepiceIdApi(id);
    return recipe;
}


module.exports = getRecipeById 


