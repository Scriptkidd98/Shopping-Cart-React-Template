import React, {Component} from 'react';
import './redux/index';
import {itemRemoved, logOut} from './redux/actions';
import { connect } from 'react-redux';
import './myStyles.css';
import {Container, Nav, Row, Col} from "react-bootstrap";
import 'bootstraps/dist/css/bootstrap.css';


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
        <div> 
          <div className="body">

              <Container fluid className="">
                <Row>
                  <Col xs={12} md={8} lg={8} className="">
                    <div className="products">
                      <Container fluid>
                        <Row>
                          <Col xs={6} md={6} lg={6}>
                            <h1>Shopping Cart</h1>
                          </Col>
                          <Col xs={6} md={6} lg={6}>
                            <h2 className="items">{Object.entries(this.props.item.cart).length} items</h2>
                          </Col>
                        </Row>
                      </Container>
                      <div>

                        {this.props.item.user.userID}'s Cart <button onClick={() => this.props.logOut(this.props.item.user.userID)}>Log Out</button>

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
                    </div>  
                  </Col>
                  <Col xs={12} md={4} lg={4} className="">
                    <div className="checkout">
                        <h2>Order Summary</h2>
                    </div>
                  </Col>
                </Row>
              </Container>

          </div>
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
    itemRemoved: item => dispatch(itemRemoved(item)),
    logOut: item => dispatch(logOut(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);