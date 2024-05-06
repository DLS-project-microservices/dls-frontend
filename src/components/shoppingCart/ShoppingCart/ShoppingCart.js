import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ShoppingCartLineItem from '../ShoppingCartLineItem/ShoppingCartLineItem';
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';


function ShoppingCart() {
    const { cart, getItemTotal } = useShoppingCart();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        { getItemTotal() === 0 ? 'Empty cart': getItemTotal()}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((lineItem) => {
           return (
            <ShoppingCartLineItem 
            key={lineItem._id}
            lineItem={lineItem}/>
           ) 
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;