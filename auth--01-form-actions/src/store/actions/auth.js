import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {

    return {
        type: actionTypes.LOGOUT,
        error: null,
        expiresIn: null
    }
}

export const checkAuthTimeout = (expiresIn) => {

    return dispatch => {

        setTimeout(() => {

            dispatch(logout());

        }, expiresIn * 1000);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {

            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwb2rh2NlPvNvhb4JYRcy1c9v9CVQUer8";

        if (!isSignUp) {

            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwb2rh2NlPvNvhb4JYRcy1c9v9CVQUer8";
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));

            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));

            })
    };
};