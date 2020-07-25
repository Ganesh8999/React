import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-orders";


export const addIngredient = (name) => {

    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}


export const removeIngredient = (name) => {

    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {

    return {

        type: actionTypes.SET_INGREDIENTS,
        ingredientName: ingredients
    }
}

export const fetchIngredientsFailed = () => {

    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}


export const initIngredients = (ingredients) => {

    return dispatch => {


        axios.get('https://react-burger-project-2231f.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });

    }
}

