

const concatAllRecipes = require('./getRecipes')


const getRecipesByName = async(title) =>{
    
    const recipe = await concatAllRecipes();
    let recipeName = []
    recipe.map(r => r.title.toLowerCase().includes(title.toLowerCase()) ? recipeName.push(r) : null )

    return recipeName
    
}



module.exports= getRecipesByName