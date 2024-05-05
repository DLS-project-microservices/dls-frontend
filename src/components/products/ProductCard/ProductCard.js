import './ProductCard.css';
import testImage from '../../../assets/products/sunglasses.jpg'
import ProductCardCategory from '../ProductCardCategory/ProductCardCategory';
import { useState } from 'react';



const ProductCard = ({ product }) => {

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const incrementQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        if (value >= 1) {
            setSelectedQuantity(value);
        }
    }

    return (
        <div className="product-card">
            <div className="product-card-image-container">
                <img className="nav-logo" src={testImage} alt="Site Logo" />
            </div>

            <div className="product-card-information">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>{product.price ?? 'MISSING PRICE'}</h3>
            </div>

            <div className="product-card-button-container">
                <button onClick={decrementQuantity}>
                    -
                </button>
                <input className="product-card-quantity" type='number' value={selectedQuantity} onChange={handleQuantityChange}></input>
                <button onClick={incrementQuantity}>
                    +
                </button>
                
            </div>
            <div className="product-card-add-to-cart-button-container">
                <button>Add to cart</button>
                
            </div>

            <div className="product-card-category-list">
                {product.categories.map(category => {
                    return (
                        <ProductCardCategory key={category.id} category={category} />       
                    )
                })}
            </div>
            
        </div>
    )
}

export default ProductCard;