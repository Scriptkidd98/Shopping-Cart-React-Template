import React, {Component} from 'react';
import './redux/index';
import {itemRemoved} from './redux/actions';
import { connect } from 'react-redux';


class Cart extends Component {
    constructor(props){
      super(props);
      console.log("Props", props.item);
      this.state = {
        item: {},
      }
    }
    render() {
      return(
        <div>Cart {this.props.item.length}
          {this.props.item.map ((items, index) => {
            return (
              <React.Fragment key={index}>
                  <div>
                    <p>{items.description}</p>
                    <button onClick={() => this.props.itemRemoved(items.id)}>Remove</button>
                  </div>
              </React.Fragment>
            );
          })}
        </div>
      );
    }
}

const mapStateToProps = function(state) {
    console.log("State", state);
    return {
      item: state,
    }
}

const mapDispatchToProps = function(dispatch) {
  return {
    itemRemoved: item => dispatch(itemRemoved(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);