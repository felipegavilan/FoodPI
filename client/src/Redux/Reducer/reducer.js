
import { GET_DIETS, GET_RECIPES } from '../Actions/types'

const initialState ={
    recipes:[],
    allRecipes:[],
    diets:[],
    detail:[]
}

const rootReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case GET_RECIPES:
            return{
                ...state,
                recipes: payload,
                recipesCopy:  payload
            }
        case GET_DIETS:
            return{
                ...state,
                diets: payload
            }
        default:
            return state
    }
}

export default rootReducer;
