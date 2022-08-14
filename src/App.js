import React, {Component} from 'react';
import Cart from './components/Cart';
import store from '../src/components/redux/store'
import { Provider } from "react-redux";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <Provider store={store}>
          <Cart></Cart>
      </Provider>
    );
  }
}

export default App;