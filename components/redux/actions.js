import * as actions from './actionTypes';


export function itemAdded(description) {
    return {
        type: actions.ITEM_ADDED,
        payload: {
            description: description
        }
    }
};
export function itemRemoved(id) {
    return {
        type: actions.ITEM_REMOVED,
        payload: {
            id: id
        }
    }
};
export function logIn(userID) {
    return {
        type: actions.LOGGED_IN,
        payload: {
            userID: userID,
        }
    }
};
export function logOut(userID) {
    return {
        type: actions.LOGGED_OUT,
        payload: {
            userID: userID,
        }
    }
};
export function updateInventory(product, price) {
    return {
        type: actions.UPDATE_INVENTORY,
        payload: {
            product: product,
            price: price
        }
    }
}