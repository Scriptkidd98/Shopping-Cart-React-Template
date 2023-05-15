import React, {Component} from 'react';
import Cart from '../src/components/Cart';
import Products from '../src/components/Products';
import store from '../src/components/redux/store'
import { Provider } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SingleProduct from './components/SingleProduct';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Products></Products>}></Route>
              <Route path="/Products" element={<Products></Products>}></Route>
              <Route path="/Cart" element={<Cart></Cart>}></Route>
              <Route exact path="/SingleProduct" element={<SingleProduct></SingleProduct>}></Route>
            </Routes>
          </Router>
      </Provider>
    );
  }
}

export default App;