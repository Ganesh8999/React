const initialState = {
    counter: 0,
    result: []
}


const reducer = (state = initialState, action) => {


    switch (action.type) {
        case "INCREMENT":

            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1

            return newState;
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "ADDITION":
            return {
                ...state,
                counter: state.counter + action.val
            }
        case "SUBTRACTION":
            return {
                ...state,
                counter: state.counter - action.val
            }
        case "STORE_RESULT":
            return {
                ...state,
                result: state.result.concat({ id: new Date(), value: state.counter })
            }
        case "DELETE_RESULT":

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