import './Products.css'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/ProductCard/ProductCard';

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
    <div className="product-list-container">
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
    </div>
  )
}

export default Products
