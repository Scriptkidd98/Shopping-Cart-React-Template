import React, {Component} from 'react';
import '../components/redux/index';
import {itemRemoved, logOut, itemAdded, decreaseCartQuantity, increaseCartQuantity} from '../components/redux/actions';
import { connect } from 'react-redux';
import './myStyles.css';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstraps/dist/css/bootstrap.css';
import store from '../components/redux/store';
import {Link} from 'react-router-dom';


class Cart extends Component {
    constructor(props){
      super(props);
      //console.log("Props", props.item);
      this.state = {
        totalarray: [],
        total: 0
      }
    }
    render() {
      let totalPricesArray = [];
      Object.entries(this.props.item.cart).map(([key, value]) => {
        totalPricesArray.push(this.props.item.inventory[key - 1].price * this.props.item.cartQuantity[value])
        return(totalPricesArray)
      })
      let totalPrice = 0
      for(let i=0; i < totalPricesArray.length; i++) {
        totalPrice += totalPricesArray[i]
      }
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
                              <Col lg={4} md={4} xs={4} sm={4}>
                                <p>PRODUCT DETAILS</p>
                              </Col>
                              <Col lg={2} md={2} xs={2} sm={2} className="product-header-each">
                                <p>PRICE</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} sm={3} className="product-header-each">
                                <p>QUANTITY</p>
                              </Col>
                              <Col lg={3} md={3} xs={3} sm={3} className="product-header-each">
                                <p>TOTAL</p>
                              </Col>
                            </Row>
                          </Container>
                        </div>

                        {Object.entries(this.props.item.cart).map(([key, value]) => {
                          this.state.totalarray.push(this.props.item.inventory[key - 1].price * this.props.item.cartQuantity[value])
                          //console.log(this.state.totalarray)
                          return (
                            <React.Fragment key={key}>
                                <Container fluid className="productbody">
                                  <Row>
                                    <Col lg={4} md={4} xs={4} sm={4}>
                                      <p>{value}</p>
                                    </Col>
                                    <Col lg={2} md={2} xs={2} sm={2} className="product-header-each">
                                      {/* ${Math.round((this.props.item.inventory[key - 1].price + Number.EPSILON) * 100) / 100} */}
                                      ${this.props.item.inventory[key - 1].price}
                                      {/* ${Number(this.props.item.inventory[key - 1].price.toFixed(2))} */}
                                      {/* {parseFloat(this.props.item.inventory[key - 1].price.toFixed(2))} */}
                      
                                    </Col>
                                    <Col lg={3} md={3} xs={3} sm={3} className="product-header-each">
                                      <span onClick={() => {
                                        store.dispatch(decreaseCartQuantity(value, this.props.item.cartQuantity[value]));
                                        }} className="minus">-
                                      </span>
                                      <span className="quantity">{this.props.item.cartQuantity[value]}</span>
                                      <span onClick={() => {
                                        store.dispatch(increaseCartQuantity(value, this.props.item.cartQuantity[value]));
                                        }}className="plus">+
                                      </span>
                                    </Col>
                                    <Col lg={3} md={3} xs={3} sm={3} className="product-header-each">
                                      ${this.props.item.inventory[key - 1].price * this.props.item.cartQuantity[value]}
                                    </Col>
                                    <Col lg={3} md={3} xs={3} sm={3}>
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
                        {((totalPrice !== 0) ? 
                          <p className='summary-total-para'>
                            <span>Total:</span>
                            <span className='total-price-span'>${totalPrice}</span>
                          </p> : null
                        )}
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
    //console.log("State", state);
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