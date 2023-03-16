const axios = require('axios')
const { Recipe, Diets } = require('../db')
const { API_KEY } = process.env

const getRecipesApi = async () =>{
    let allRecipes =[];
    let url = `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
    let allRecipesList = await axios.get(url)
    allRecipesList.data.results.map(r => {
        
        allRecipes.push({
            id: r.id,
            title: r.title,
            image: r.image,
            summary: r.summary,
            healthScore: r.healthScore,
            steps: r.analyzedInstructions.map(s => s.steps.map(s => s.step)),
            diets: r.diets.map(d=> d),
            created: false
        })
    })
    return allRecipes;
}

const getRecipesDb = async() =>{
    const dbRecipes = await Recipe.findAll({
        include: [{
            model: Diets,
            attributes: ['name'],
            throught: {
                attributes: []
            }
        }]
    })
    
    const allRecipesDb = await dbRecipes.map( r => {
        return{
            id: r.id,
            title: r.title,
            image: r.image,
            summary: r.summary,
            healthScore: r.healthScore,
            steps: r.steps,
            diets: r.diets.map(d=> d),
            created: true,
        }
    })

    return allRecipesDb;
    // return dbRecipes
}

const concatAllRecipes = async() =>{
    const apiRecipes = await getRecipesApi();
    const dbRecipes = await getRecipesDb();
    return [...dbRecipes, ...apiRecipes]
}

module.exports = concatAllRecipes;
