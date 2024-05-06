import { useState } from 'react';
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
                        <p>Your cart is empty.</p>
                    ) : (
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
                            <Button variant="danger" className="shopping-cart-clear-cart-button" onClick={clearCart}>Clear Cart</Button>
                        </table>
                        
                    )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;