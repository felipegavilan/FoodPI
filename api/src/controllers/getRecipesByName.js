

const concatAllRecipes = require('./getRecipes')


const getRecipesByName = async(title) =>{
    
    const recipe = await concatAllRecipes();
    let recipeName = recipe.filter((r => r.title.toLowerCase().includes(title.toLowerCase())))

    return recipeName
    
}



module.exports= getRecipesByName