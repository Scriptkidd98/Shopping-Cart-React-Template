import React, {Component} from 'react';
import './redux/index';
import {itemRemoved, logOut, itemAdded, decreaseCartQuantity, increaseCartQuantity} from './redux/actions';
import { connect } from 'react-redux';
import './myStyles.css';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstraps/dist/css/bootstrap.css';
import store from './redux/store';
import {Link} from 'react-router-dom';


class Cart extends Component {
    constructor(props){
      super(props);
      console.log("Props", props.item);
      this.state = {
        totalarray: [],
        total: 0
      }
    }
    render() {
      //console.log(this.state.totalarray.length);
      // eslint-disable-next-line array-callback-return
      this.state.totalarray.map((number) => {
        //console.log(number)
        const total = number + number
        console.log(number, total)
      })
      return(
        <div> 
          <div className="body">

            <div className="user">
              Hello {this.props.item.user.userID}! <button onClick={() => this.props.logOut(this.props.item.user.userID)} className="logout-button">(Log Out)</button>
            </div>

              <Container fluid className="">
                <Row>
                  <Col xs={12} md={12} lg={8} className="products-plain">
                    <div className="products">
                      <Container fluid className="removepadding">
                        <Row>
                          <Col xs={6} md={6} lg={6}>
                            <h1>Shopping Cart</h1>
                          </Col>
                          <Col xs={6} md={6} lg={6}>
                            <div className="">
                              { //Check if message failed
                                (Object.entries(this.props.item.cart).length > 1)
                                  ? <h2 className="items"> {Object.entries(this.props.item.cart).length} items </h2> 
                                  : <h2 className="items"> {Object.entries(this.props.item.cart).length} item </h2>  
                              }
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      <hr></hr>
                      <div>

                        <div className="productheader">
                          <Container fluid className="removepadding">
                            <Row>
                              <Col lg={3} md={3} xs={3}>
                                <p>PRODUCT DETAILS</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>PRICE</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>QUANTITY</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} className="product-header-each">
                                <p>TOTAL</p>
                              </Col>
                            </Row>
                          </Container>
                        </div>

                        {Object.entries(this.props.item.cart).map(([key, value]) => {
                          this.state.totalarray.push(this.props.item.inventory[value] * this.props.item.cartQuantity[value])
                          return (
                            <React.Fragment key={key}>
                                <Container fluid className="productbody">
                                  <Row>
                                    <Col lg={3} md={3} xs={3}>
                                      <p>{value}</p>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                      ${this.props.item.inventory[value]}
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                    <span onClick={() => {
                                        store.dispatch(decreaseCartQuantity(value, this.props.item.cartQuantity[value]));
                                      }} className="minus">-</span>
                                      <span>{this.props.item.cartQuantity[value]}</span>
                                      <span onClick={() => {
                                        store.dispatch(increaseCartQuantity(value, this.props.item.cartQuantity[value]));
                                      }}className="plus">+</span>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} className="product-header-each">
                                      ${this.props.item.inventory[value] * this.props.item.cartQuantity[value]}
                                      
                                    </Col>
                                    <Col lg={3} md={3} xs={3}>
                                      <button onClick={() => this.props.itemRemoved(key)} className="remove">Remove</button>
                                    </Col>
                                  </Row>
                                </Container>
                            </React.Fragment>
                          );
                        })}

                      </div>
                      <p className="continue-shopping-para">
                        <Link to="/Products">Continue shopping</Link>
                      </p>
                    </div>  
                  </Col>
                  <Col xs={12} md={12} lg={4} className="order-summary-colored">
                    <div className="checkout">
                        <h2 className="order-summary">Order Summary</h2>
                        <hr></hr>
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
    logOut: item => dispatch(logOut(item)),
    itemAdded: item => dispatch(itemAdded(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);