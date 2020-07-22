import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility/utility.js";



const initialState = {

    result: []
}

const deleteResult = (state, action) => {

    const updatedArray = state.result.filter(resultItem => resultItem.id !== action.resultElementId)
    return updateObject(...state, { result: updatedArray })


}

const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionTypes.STORE_RESULT: return updateObject(...state, { result: state.result.concat({ id: new Date(), value: action.result }) });
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
        default:
            break;


    }
    return state;
}


export default reducer;