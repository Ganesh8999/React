import * as actionTypes from "./actionTypes";

export const increment = () => {

    return {
        type: actionTypes.INCREMENT
    }
}


export const decrement = () => {

    return {
        type: actionTypes.DECREMENT
    }
}

export const addition = (value) => {

    return {
        type: actionTypes.ADDITION,
        val: value
    }
}

export const subtraction = (value) => {

    return {
        type: actionTypes.SUBTRACTION,
        val: value
    }
}

