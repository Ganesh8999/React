import * as actionTypes from "./actionTypes";



export const saveResult = (res) => {

    // Here we can write data transforming logic 
    // const r = res * 2;

    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }

}

export const storeResult = (res) => {


    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctrRedu.counter;
            console.log("old Counter " + oldCounter);
            dispatch(saveResult(res))
        }, 2000)
    }

}
export const deleteResult = (id) => {

    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: id
    }
}