import './ShoppingCartLineItem.css'
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';

const ShoppingCartLineItem = ({ lineItem }) => {
    const { removeItemFromCart } = useShoppingCart();
    return (
        <tr>
            <td className='product-name'>{lineItem.name}</td>
            <td>{lineItem.selectedQuantity}</td>
            <td>${lineItem.price}</td>
            <td>
                <button 
                className="shopping-cart-line-item-remove-button"
                onClick={() => {
                    console.log('click');
                    console.log(lineItem._id)
                    removeItemFromCart(lineItem._id);
                }}>x
                </button>
            </td>
        </tr>
    )
}

export default ShoppingCartLineItem;