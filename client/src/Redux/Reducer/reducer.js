
import { GET_RECIPES } from '../Actions/types'

const initialState ={
    recipes:[],
    recipesCopy:[],
    diets:[],
}

const rootReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case GET_RECIPES:
            return{
                ...state,
                recipe: [...state.recipes, payload],
                recipeCopy: [...state.recipesCopy, payload],
            }
        default:
            return{...state}
    }
}

export default rootReducer;
