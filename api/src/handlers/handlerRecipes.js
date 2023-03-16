const concatAllRecipes = require('../controllers/getRecipes')
const getRecipeById = require('../controllers/getRecipesById')
const getRecipesByName = require('../controllers/getRecipesByName')
const {postRecipe} = require('../controllers/postRecipes')

const getRecipesHandler = async(req, res)=>{
    const { title } = req.query;
    try {
        const getRecipes = title ? await getRecipesByName(title) : await concatAllRecipes()
        title && getRecipes.length > 0 ?  res.status(200).json(getRecipes) : res.status(400).json('Sorry, the recipe does not exist') ;
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// const getRecipesIdHandler = async(req, res) =>{
//     const { id } = req.params;
//     const allRecipes = await concatAllRecipes();
//     try {
//         if(id){
//             const getId = await allRecipes.find( r=> r.id == id)

//             getId ? res.status(200).json(getId) : res.status(400).json("Recipe not found")
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

const getRecipesIdHandler = async(req, res)  =>{
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const getId = await getRecipeById(id, source);
        res.status(200).json(getId)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postRecipesHandler = async(req, res) =>{

    const {title, summary, healthScore, steps, diets, image, create } = req.body;
    try {
        if(!title || !summary || !healthScore || !steps || !diets){
            res.status(400).json("Datos incompletos")
        } else{
            const newRecipe = await postRecipe(title, summary, healthScore, steps, diets, image);
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {getRecipesHandler, getRecipesIdHandler, postRecipesHandler}