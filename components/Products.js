import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from './redux/store';
import { itemAdded } from './redux/actions';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <div>
                <Link to="/Cart">Go to cart</Link>

                {Object.entries(this.props.item.inventory).map(([key, value])  =>  {
                    return(
                        <React.Fragment key={key}>
                            <p>{key} {value}</p>
                            <button onClick={() => store.dispatch(itemAdded(key))}>Add to cart</button>
                        </React.Fragment>
                    );
                })};
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
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Products);