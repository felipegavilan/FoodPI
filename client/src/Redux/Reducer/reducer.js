
import { GET_DIETS, GET_ID, GET_RECIPES, GET_NAME } from '../Actions/types'

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
            }
        case GET_DIETS:
            return{
                ...state,
                diets: payload
            }
        case GET_ID:
            return{
                ...state,
                detail: payload
            }
        case GET_NAME:{
            return{
                ...state,
                recipes: payload
            }
        }
        default:
            return state
    }
}

export default rootReducer;
