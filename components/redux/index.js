import store from './store';
import {itemAdded, itemRemove, logIn} from './actions';

store.subscribe(() => {
    console.log("Cart Updated", store.getState());
})

store.dispatch(itemAdded("Apple"));
store.dispatch(itemAdded("Orange"));
store.dispatch(logIn("johndoe1234"));

//store.dispatch(itemRemoved(1));

//console.log(store.getState());

export const object = store.getState();