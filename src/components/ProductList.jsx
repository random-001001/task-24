import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Nike Air Max', price: 7999 },
  { name: 'Adidas Ultraboost', price: 9999 },
  { name: 'Puma Running Shoes', price: 4999 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Shoe Store</h1>
      <Link className="link" to="/cart">🛒 View Cart</Link>
      <div className="grid">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
