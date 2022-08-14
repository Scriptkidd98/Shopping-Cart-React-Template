import store from './store';
import {itemAdded, itemRemoved} from './actions';

store.subscribe(() => {
    console.log("Cart Updated", store.getState());
})

store.dispatch(itemAdded("Apple"));
store.dispatch(itemAdded("Orange"));

//store.dispatch(itemRemoved(1));

//console.log(store.getState());

export const object = store.getState();