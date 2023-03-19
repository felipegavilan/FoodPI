import axios from 'axios';
import { GET_RECIPES } from "./types";

const getRecipes = () =>{

    const allRecipes = axios.get('http://localhost:3001/recipes')
    const recipe = allRecipes.data
    return{
        type: GET_RECIPES,
        payload: recipe
    }
}

export default {getRecipes}