import * as api from '../api';

export const signin = (signinValues, history) => async (dispatch) => {
    try {
        const { data } = await api.signin(signinValues);

        dispatch({ type: 'AUTH', payload: data })

        history('/');
    }
    catch (err) {
        // console.log(err.message)
    }
}

export const signup = (signupValues, history) => async (dispatch) => {

    try {
        const { data } = await api.signup(signupValues);

        dispatch({ type: 'AUTH', payload: data })
        history('/');
    }
    catch (err) {

        // return err;
    }
}

export const logout = (history) => async (dispatch) => {

    try {


        dispatch({ type: 'LOGOUT' })
        history('/');
    }
    catch (err) {
        console.log(err.message)
    }
}