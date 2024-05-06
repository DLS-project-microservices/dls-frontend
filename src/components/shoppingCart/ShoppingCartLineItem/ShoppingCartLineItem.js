import './ShoppingCartLineItem.css'

const ShoppingCartLineItem = ({ lineItem }) => {
    return (
        <div>{lineItem.name}</div>
    )
}

export default ShoppingCartLineItem;