import * as actionTypes from "../../store/actions/action";



const initialState = {

    result: []
}


const reducer = (state = initialState, action) => {


    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:

            // One way
            // const id = 2;
            // const newArray = [...state.result];
            // newArray.splice(id, 1);
            // return {
            //     ...state,
            //     result: newArray
            // }

            // Alternative way
            const updatedArray = state.result.filter(resultItem => resultItem.id !== action.resultElementId)
            return {
                ...state,
                result: updatedArray
            }

        default:
            break;


    }
    return state;
}


export default reducer;