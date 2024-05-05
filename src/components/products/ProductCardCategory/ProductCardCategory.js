import './ProductCardCategory.css'

const ProductCardCategory = ({ category }) => {
    return (
        <span className="product-card-category">
            <small>{category.name}</small>
        </span>  
    )
}

export default ProductCardCategory;