import * as actions from './actionTypes'

export function reducer (state = [], action) {
    switch(action.type){
        case actions.LOGGED_IN:
            return [
                ...state, {
                    userID: action.payload.userID
                }];
        case actions.LOGGED_OUT:
            return state.filter(user => user.userID !== action.payload.userID);
        default:
            return state
    }
}