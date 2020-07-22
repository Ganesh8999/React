import * as actionTypes from "../../store/actions/action";



const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.INCREMENT:

            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1

            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACTION:
            return {
                ...state,
                counter: state.counter - action.val
            }

        default:
            break;


    }
    return state;
}


export default reducer;