import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button className="remove" onClick={() => removeFromCart(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total:</strong> ₹{total}</p>
      <button disabled={cartItems.length === 0} onClick={() => navigate("/payment")}>Proceed to Payment</button>
    </div>
  );
};

export default Cart;