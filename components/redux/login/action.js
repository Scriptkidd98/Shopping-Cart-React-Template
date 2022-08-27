import * as actions from './actionTypes';

export function logIn(userID) {
    return {
        type: actions.LOGGED_IN,
        payload: {
            userID: userID,
        }
    }
}
export function logOut(userID) {
    return {
        type: actions.LOGGED_OUT,
        payload: {
            userID: userID,
        }
    }
}