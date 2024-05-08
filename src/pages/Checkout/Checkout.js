import './Checkout.css'
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import { useEffect } from 'react';
import testImage from '../../assets/products/sunglasses.jpg';

const Checkout = () => {
    const { cart, removeItemFromCart } = useShoppingCart();

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
                    <tr key={lineItem._id}>
                      <td><img className="checkout-product-image" alt={lineItem.name} src={testImage}></img></td>
                      <td className="checkout-product-name">{lineItem.name}</td>
                      <td>{lineItem.selectedQuantity}</td>
                      <td>${lineItem.price}</td>
                      <td>${lineItem.price * lineItem.selectedQuantity}</td>
                      <td>
                      <button 
                className="shopping-cart-line-item-remove-button"
                onClick={() => {
                    console.log('click');
                    console.log(lineItem._id)
                    removeItemFromCart(lineItem._id);
                }}>X
                </button>
                      </td>
                    </tr>
                )
              })}
            </tbody>
          </table>
            
        </div>
  )
}

export default Checkout
