import * as actions from './actionTypes';


export function itemAdded(description, id) {
    return {
        type: actions.ITEM_ADDED,
        payload: {
            description: description,
            id: id
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
export function updateInventory(product, price, category, id, description, image) {
    return {
        type: actions.UPDATE_INVENTORY,
        payload: {
            product: product,
            price: price,
            description: description,
            category: category,
            id: id,
            image: image
        }
    }
};
export function increaseCartQuantity(description, quantity) {
    return {
        type: actions.INCREASE_CART_QUANTITY,
        payload: {
            description: description,
            quantity: quantity
        }
    }
}
export function decreaseCartQuantity(description, quantity) {
    return {
        type: actions.DECREASE_CART_QUANTITY,
        payload: {
            description: description,
            quantity: quantity
        }
    }
}