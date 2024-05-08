import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingCartLineItem from '../ShoppingCartLineItem/ShoppingCartLineItem';
import './ShoppingCart.css'
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';


function ShoppingCart() {
    const { cart, getItemTotal, clearCart } = useShoppingCart();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.selectedQuantity);
    }, 0);

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        { getItemTotal() === 0 ? 'Empty cart': getItemTotal()}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cart.length === 0 ? (
                        <h5>Your cart is empty.</h5>
                    ) : (
                      <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price/unit</th>
                                    <th></th>
                              
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((lineItem) => {
                                    return (
                                        <ShoppingCartLineItem
                                            key={lineItem._id}
                                            lineItem={lineItem} />
                                    )
                                })}
                                    <h4 className="shopping-cart-total">
                                      Total: ${total}
                                    </h4>
                            </tbody>
                        </table>

                        <div className='shopping-cart-button-container'>
                        <Button variant="danger" className="shopping-cart-button shopping-cart-clear-cart-button" onClick={clearCart}>Clear Cart</Button>

                        <Link to="/checkout">
                          <Button className="shopping-cart-button" onClick={handleClose}>Go to checkout</Button>
                        </Link>
                      </div>
                      </>
                        
                    )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;