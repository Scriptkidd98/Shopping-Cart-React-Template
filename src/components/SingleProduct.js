import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import store from './redux/store';
import { itemAdded } from './redux/actions';

const SingleProduct = () => {
    const location = useLocation();
    //console.log(location.state)
  return (
    <div>
        <Link to="/Cart" className='cart-link'>Go to cart</Link>
        <Link to="/Products">Continue shopping</Link>

        <Container style={{paddingTop: '100px'}}>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <img src={location.state.image} alt={location.state.product} style={{height: '300px'}}></img>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <span className='product-category'>{location.state.category}</span>
                    <p style={{fontSize: '30px', marginTop: '30px'}}><strong>{location.state.product}</strong></p>
                    <p className='product-price'>${location.state.price}</p>
                    <p>{location.state.description}</p>
                    <Button variant="primary" className='product-add-to-cart' onClick={() => {
                        if(Object.values(store.getState().cart).includes(`${location.state.product}`)){
                            alert("Item already exists in cart. Increase quantity")
                        }else {
                            store.dispatch(itemAdded(location.state.product, location.state.id));
                            alert('Item added to cart');
                        }
                    }}>Add to cart</Button>

                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SingleProduct