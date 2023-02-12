import store from './store';
import {itemAdded, updateInventory, logIn} from './actions';

store.subscribe(() => {
    console.log("Cart Updated", store.getState());
})

store.dispatch(itemAdded("Apple"));
store.dispatch(itemAdded("Orange"));
store.dispatch(itemAdded("Fries"));
store.dispatch(logIn("johndoe1234"));
store.dispatch(updateInventory("Apple", 500));
store.dispatch(updateInventory("Orange", 300));
store.dispatch(updateInventory("Fries", 200));
store.dispatch(updateInventory("Chicken", 200));
//store.dispatch(itemRemoved(1));

//console.log(store.getState());

export const object = store.getState();