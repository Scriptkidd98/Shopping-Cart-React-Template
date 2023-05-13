import store from './store';
import {updateInventory, logIn} from './actions';
import axios from 'axios';

store.subscribe(() => {
    //console.log("Cart Updated", store.getState());
})

const baseURL = 'https://fakestoreapi.com/products/';

const fetchData = async () => {
    try {
      const { data } = await axios.get(baseURL); 

      //console.log(data, "data")

      data.map((data, index) => {
        return (
            store.dispatch(updateInventory(data.title, Math.ceil(data.price), data.category, data.id, data.description, data.image))
        )
      })
    } catch (error) {
      console.log(error)
    }
}
fetchData();

store.dispatch(logIn("johndoe1234"));
//store.dispatch(itemRemoved(1));

//console.log(store.getState());

export const object = store.getState();