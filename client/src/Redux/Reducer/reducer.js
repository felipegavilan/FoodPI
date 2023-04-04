
import { GET_DIETS, GET_ID, GET_RECIPES, GET_NAME, FILTER_BY_NAME, FILTER_BY_DIETS, FILTER_BY_HEALTH_SCORE, POST_RECIPES, FILTER_BY_API_OR_BDD, FAVORITE, DELETE} from '../Actions/types'

const initialState ={
    recipes:[],
    recipesCopy:[],
    diets:[],
    detail:[],
    favorites:[],
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
            let recipesFilter = payload === 'asc' ?
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
                recipes: [...state.recipes, recipesFilter]
            }
        case FILTER_BY_DIETS:
            const dietsFilter = state.recipesCopy

            let filtered = []
            if(payload === 'all'){
                filtered = state.recipesCopy
            } else{
                dietsFilter.map(ele => ele.diets.includes(payload) ? filtered.push(ele) : null) 
            }   
            return{
                ...state,
                recipes: filtered
            } 
        case FILTER_BY_HEALTH_SCORE:
            let filterRecipeHS = state.recipes.sort((a,b) => {
                if (payload === 'up') return a.healthScore - b.healthScore
                if( payload === 'down') return b.healthScore - a.healthScore
                else return 0
            })
            return{
                ...state,
                recipes: [...state.recipes, filterRecipeHS]
            }
        case POST_RECIPES:
            return{
                ...state,
                
            }
        case FILTER_BY_API_OR_BDD:
            const filterRecipes = state.recipesCopy
            const filt = []
            if(payload === 'bdd'){
                filterRecipes.map(ele => isNaN(ele.id) ? filt.push(ele) : null)
                
            } else if (payload === 'api'){
                filterRecipes.map(ele => !isNaN(ele.id) ? filt.push(ele) : null)
               
            }
            return{
                ...state,
                recipes: filt
            }
        case FAVORITE:
            const recipes = state.recipes
            const filterFav = recipes.filter(ele => ele.id === payload ? ele : null)
            return{
                ...state,
                favorites:[...state.favorites, filterFav]
            }
        case DELETE:
            const fav = state.favorites
            const deleteFavorite = fav.filter(ele=> ele[0].id !== payload) 
            return{
                ...state,
                favorites: deleteFavorite
            }
        default:
            return state
    }
}

export default rootReducer;
