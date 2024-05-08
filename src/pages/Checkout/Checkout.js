import './Checkout.css'
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import CheckoutLineItem from '../../components/checkout/CheckoutLineItem/CheckoutLineItem';
import { useEffect } from 'react';

const Checkout = () => {
    const { cart, clearCart, getPriceTotal } = useShoppingCart();

    async function createCheckoutSession() {
      const selectedProducts = {
        items: cart.map((lineItem) => {
          return {
            productId: lineItem.id,
            quantity: lineItem.selectedQuantity
          }
        })
      }

      const response = await fetch(`${process.env.REACT_APP_CUSTOMER_INVENTORY_URL}/payment`, {
        method: "POST",
        body: JSON.stringify(selectedProducts)
      });

      if (response.ok) {
        const data = await response.json();
        window.location = data.sessionId;
      }
      else {
        toastr.error('There was an error while trying to check out. Please try again later.')
      }
    }
   
    useEffect(() => {
        if (cart.length === 0) {
            window.location = '/products';
        }
    }, [cart])
    
    return (
        <div className="checkout-line-item-container">
             <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price/unit</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((lineItem) => {
                return (
                    <CheckoutLineItem key={lineItem._id} lineItem={lineItem}></CheckoutLineItem>
                )
              })}
            </tbody>
          </table>
          <h5 className="shopping-cart-total">Total price: ${getPriceTotal()}</h5>
          <div className="checkout-button-container">
            <Button variant="danger" onClick={clearCart}>
              Clear shopping cart
            </Button>
            <Button variant="primary" onClick={createCheckoutSession}>
              Proceed to payment
            </Button>
          </div>
        </div>
  )
}

export default Checkout
