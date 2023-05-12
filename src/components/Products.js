import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import store from './redux/store';
import { itemAdded } from './redux/actions';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import '../components/myStyles.css'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exists: false
        }
    }
    render() {
        /* console.log(store.getState().cart);
        let exists = Object.values(store.getState().cart).includes('Apple');
        console.log(exists); */
        return(
            <div>
                <Link to="/Cart">Go to cart</Link>
                <Link to="/Api" className='api-link'>Go to API</Link>

                {Object.entries(this.props.item.inventory).map(([key, value])  =>  {
                    return(
                        <React.Fragment key={key}>
                            <Container fluid>
                                <Row>
                                    <Col xs={8} md={4} lg={4}>
                                        <p>{key}</p>
                                        <p>${value}</p>
                                    </Col>
                                    <Col xs={4} md={6} lg={6}>
                                        <button onClick={() => {
                                            if(Object.values(store.getState().cart).includes(`${key}`)) {
                                                alert("Item already exists in cart. Increase quantity")
                                            } else {
                                                store.dispatch(itemAdded(key)); 
                                                alert(key + " added to cart");
                                            }
                                        }}>Add to cart</button>
                                    </Col>
                                </Row>
                            </Container>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    //console.log("State", state);
    return {
      item: state,
    }
}
const mapDispatchToProps = function(_dispatch) {
    return {
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Products);