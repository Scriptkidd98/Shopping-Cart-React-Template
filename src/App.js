import React, {Component} from 'react';
import Cart from './components/Cart';
import Products from './components/Products';
import store from './components/redux/store'
import { Provider } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Api from './components/Api';
import 'bootstraps/dist/css/bootstrap.css';



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
              <Route path="/Api" element={<Api></Api>}></Route>
            </Routes>
          </Router>
      </Provider>
    );
  }
}

export default App;