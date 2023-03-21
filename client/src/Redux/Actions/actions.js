import axios from 'axios';
import { GET_RECIPES, GET_DIETS, GET_ID } from "./types";

export const getRecipes = () =>{

    return async function(dispatch){
        const allRecipes = await axios.get('http://localhost:3001/recipes')
         const recipes = await allRecipes.data
          dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    }
}

export const getDiets = () =>{

    return async function(dispatch) {
        const allDiets = await axios.get("http://localhost:3001/diets")
        const diets = await allDiets.data

        dispatch({
            type: GET_DIETS,
            payload: diets
        })
    }
}

export const getId = (id) =>{
    return async function(dispatch){
        const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`)
        const idRecipe = await recipeId.data

        dispatch({
            type: GET_ID,
            payload: idRecipe
        })
    }
}

