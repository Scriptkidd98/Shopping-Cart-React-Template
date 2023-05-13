import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { itemAdded } from './redux/actions';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import '../components/myStyles.css';
import Card from 'react-bootstrap/Card';
import store from './redux/store';




class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exists: false
        }
    }
    render() {
        return(
            <div className='product-body-div'>
                <Link to="/Cart" className='cart-link'>Go to cart</Link>

                <Container className='product-container'>
                    <Row>
                        {this.props.item.inventory.map((item) => (
                            <Col lg={4} md={6} sm={6} xs={12} key={item.id}>
                                <Card style={{marginTop: '50px', paddingTop: '20px'}}>
                                    <div className='image-div'>
                                        <div style={
                                            {
                                                backgroundImage: `url(${item.image})`, 
                                                backgroundPosition: 'center',
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                minHeight: '180px',
                                                minWidth: '286px'
                                            }
                                        }></div>
                                    </div>
                                    <Card.Body className=''>
                                        <Card.Title className='product-name'>{item.product}</Card.Title>
                                        <p className='product-price'>${item.price}</p>
                                        <Button variant="primary" className='add-to-cart' onClick={() => {
                                            if(Object.values(store.getState().cart).includes(`${item.product}`)){
                                                alert("Item already exists in cart. Increase quantity")
                                            }else {
                                                store.dispatch(itemAdded(item.product, item.id));
                                                alert('Item added to cart');
                                            }
                                        }}>Add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
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
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Products);