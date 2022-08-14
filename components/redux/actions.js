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