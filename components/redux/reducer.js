
import * as actions from './actionTypes';
let lastId = 0;

export default function reducer(state = {cart: {}, user: {userID: null}}, action) {
    switch(action.type) {
        case actions.ITEM_ADDED:
            state.cart[++lastId] = action.payload.description;
            return {
                ...state
            }
        case actions.ITEM_REMOVED:
            delete state.cart[action.payload.id];
            return {
                ...state
            };
        case actions.LOGGED_IN:
            state.user["userID"] = action.payload.userID;
            return {
                ...state,
                user: {
                    ...state.user, userID: action.payload.userID
                }
            }
        case actions.LOGGED_OUT:
            state.user["userID"] = null;
            return {
                ...state
            };
        default:
            return state;

    }
}
