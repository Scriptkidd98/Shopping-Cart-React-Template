import React, {Component} from 'react';
import Cart from '../src/components/Cart';
import Products from '../src/components/Products';
import store from '../src/components/redux/store'
import { Provider } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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
              <Route path="/" element={<Cart></Cart>}></Route>
              <Route path="/Products" element={<Products></Products>}></Route>
              <Route path="/Cart" element={<Cart></Cart>}></Route>
            </Routes>
          </Router>
      </Provider>
    );
  }
}

export default App;