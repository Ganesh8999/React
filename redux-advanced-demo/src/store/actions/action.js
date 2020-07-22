export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDITION = 'ADDITION'
export const SUBTRACTION = 'SUBTRACTION'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'


export const increment = () => {

    return {
        type: INCREMENT
    }
}


export const decrement = () => {

    return {
        type: DECREMENT
    }
}

export const addtion = (value) => {

    return {
        type: ADDITION,
        val: value
    }
}

export const subtraction = (value) => {

    return {
        type: SUBTRACTION,
        val: value
    }
}

export const storeResult = (res) => {

    return {
        type: STORE_RESULT,
        result: res
    }
}

export const deleteResult = (id) => {

    return {
        type: STORE_RESULT,
        resultElementId: id
    }
}