import axios from "axios";
import {
  GET_RECIPES,
  GET_DIETS,
  GET_ID,
  GET_NAME,
  FILTER_BY_NAME,
  FILTER_BY_DIETS,
  FILTER_BY_HEALTH_SCORE,
  FILTER_BY_API_OR_BDD,
  FAVORITE,
  DELETE,
} from "./types";

export const getRecipes = () => {
  return async function (dispatch) {
    const allRecipes = await axios.get("/recipes");
    const recipes = await allRecipes.data;
    dispatch({
      type: GET_RECIPES,
      payload: recipes,
    });
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const allDiets = await axios.get("/diets");
    const diets = await allDiets.data;

    dispatch({
      type: GET_DIETS,
      payload: diets,
    });
  };
};

export const getId = (id) => {
  return async function (dispatch) {
    const recipeId = await axios.get(`/recipes/${id}`);
    const idRecipe = await recipeId.data;

    dispatch({
      type: GET_ID,
      payload: idRecipe,
    });
  };
};

export const getSearch = (title) => {
  return async function (dispatch) {
    const recipeTitle = await axios.get(`/recipes?title=${title}`);
    const searchRecipe = recipeTitle.data;
    if(recipeTitle.status === 200){
        console.log("funciona");
        dispatch({
          type: GET_NAME,
          payload: searchRecipe,
        });
    }
  };
};

export const filterByName = (payload) => {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
};

export const filterByDiets = (payload) => {
  return {
    type: FILTER_BY_DIETS,
    payload,
  };
};

export const filterHealthScore = (payload) => {
  return {
    type: FILTER_BY_HEALTH_SCORE,
    payload,
  };
};

export const postRecipes = (payload) => {
  return async function () {
    let json = await axios.post("/recipes", payload);
    return json;
  };
};

export const filterApiOrBdd = (payload) => {
  return {
    type: FILTER_BY_API_OR_BDD,
    payload,
  };
};

export const addFavorite = (payload) => {
  return {
    type: FAVORITE,
    payload,
  };
};

export const deleteFav = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
