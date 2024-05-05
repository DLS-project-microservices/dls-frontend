import './Products.css'
import { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);


useEffect(() => {
    async function fetchProducts() {
        const response = await fetch(`${process.env.REACT_APP_CUSTOMER_INVENTORY_URL}/products`);
        const data = await response.json();
        setProducts(data);
    }

    fetchProducts();
}, [])
  return (
    <>
    <div className="product-list-container">
        { products.map(product => (
            <div>
            <h1>{product.name}</h1>
            <h1>{product.description}</h1>
            <h1>{product.price ?? 'MISSING PRICE'}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default Products
