
import { GET_DIETS, GET_ID, GET_RECIPES, GET_NAME, FILTER_BY_NAME, FILTER_BY_DIETS, FILTER_BY_HEALTH_SCORE} from '../Actions/types'

const initialState ={
    recipes:[],
    recipesCopy:[],
    diets:[],
    detail:[]
}

const rootReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case GET_RECIPES:
            return{
                ...state,
                recipes: payload,
                recipesCopy:payload
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
        case GET_NAME:
            return{
                ...state,
                recipes: payload
        }
        case FILTER_BY_NAME:
            const recipesFilter = payload === 'asc' ?
            state.recipes.sort((a, b)=>{
                if (a.title > b.title) return 1;
                if(b.title > a.title) return -1;
                return 0;
            }) :
            state.recipes.sort((a,b) =>{
                if(a.title > b.title) return -1;
                if(b.title > a.title) return 1;
                return 0;
            });
          
            return{
                ...state,
                payload: recipesFilter
            }
        case FILTER_BY_DIETS:
            const dietsFilter = state.recipesCopy
            const filtered = []
            dietsFilter.map(ele => ele.diets.includes(payload) ? filtered.push(ele) : null) 
            return{
                ...state,
                recipes: filtered
            } 
        case FILTER_BY_HEALTH_SCORE:
            const filterRecipeHS = state.recipes.sort((a,b) => {
                if (payload === 'up') return a.healthScore - b.healthScore
                if( payload === 'down') return b.healthScore - a.healthScore
                else return 0
            })
            return{
                ...state,
                recipes: filterRecipeHS
            }
        // case POST_RECIPES:
        //     return{
        //     }
        default:
            return state
    }
}

export default rootReducer;
