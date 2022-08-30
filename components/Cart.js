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
        <div> {this.props.item.user.userID}'s Cart
          {Object.entries(this.props.item.cart).map(([key, value]) => {
            return (
              <React.Fragment key={key}>
                  <div>
                    <p>{value}</p>
                    <button onClick={() => this.props.itemRemoved(key)}>Remove</button>
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