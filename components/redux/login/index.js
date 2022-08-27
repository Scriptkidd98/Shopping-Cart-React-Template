import store from './store';
import {logIn, logOut} from './action';

store.subscribe(() => {
    console.log("Logged In/Out", store.getState());
})

store.dispatch(logIn("nattymaniac"));

console.log(store.getState());