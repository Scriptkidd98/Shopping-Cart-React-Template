import * as actions from './actionTypes';
let lastId = 0;
let initial = 0;

export default function reducer(state = {cart: {}, cartQuantity: {}, user: {userID: null}, inventory: {}}, action) {
    switch(action.type) {
        case actions.ITEM_ADDED:
            state.cart[++lastId] = action.payload.description
            state.cartQuantity[action.payload.description] = initial + 1
            return {
                ...state,
                cart: {
                    ...state.cart
                },
                cartQuantity: {
                    ...state.cartQuantity
                }
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
        case actions.UPDATE_INVENTORY:
            state.inventory[action.payload.product] = action.payload.price;
            return {
                ...state
            };
        case actions.INCREASE_CART_QUANTITY:
            //console.log(state)
            const description = action.payload.description;
            const quantity = action.payload.quantity;
            return {
                ...state,
                cartQuantity: {
                    ...state.cartQuantity, [description]: quantity + 1
                }
            }
        case actions.DECREASE_CART_QUANTITY:
            //console.log(state)
            const descriptions = action.payload.description;
            const quantitys  = action.payload.quantity;
            if(quantitys > 1) {
                return {
                    ...state,
                    cartQuantity: {
                        ...state.cartQuantity, [descriptions]: quantitys - 1
                    }
                }
            } else {
                alert("Minimim quantity of 1. Remove item instead")
                return {
                    ...state,
                    cartQuantity: {
                        ...state.cartQuantity, [descriptions]: 1
                    }
                }
            }
        default:
            return state;
    }
}