import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_FAIL,
    SIGN_IN_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const signInUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_IN_USER });

        /*firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        });*/

        signInUserSuccess(dispatch, 'prasad');
    };
};

const signInUserFail = (dispatch) => {
    dispatch({ type: SIGN_IN_USER_FAIL });
};

const signInUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGN_IN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};
