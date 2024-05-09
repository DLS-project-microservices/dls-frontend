import './Products.css'
import toastr from 'toastr';
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${process.env.REACT_APP_CUSTOMER_INVENTORY_URL}/products`);
        const data = await response.json();
        setProducts(data.data);
      }
      catch(error) {
        console.log(error);
        toastr.error('Could not get products. Please try again later.')
      } 
    }

    fetchProducts();
}, [])
  return (
    <div className="product-list-container">
        {products.map(product => (
            <ProductCard key={product._id} product={product} />
            ))}
    </div>
  )
}

export default Products
