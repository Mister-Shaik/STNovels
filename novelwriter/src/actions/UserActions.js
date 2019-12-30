import {GetUser, ChangePassword, SignOut} from './Types';

export const getuser = (UserId) => {
    return dispatch => {
        dispatch({type: GetUser, UserId: UserId});
    };
};

export const changepassword = (UserId) => {
    return dispatch => {
        dispatch({type: ChangePassword, UserId: UserId});
    };
};

export const signout = (UserId) => {
    return dispatch => {
        dispatch({type: SignOut, UserId: UserId});
    };
};