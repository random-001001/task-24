import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' });

  const handleChange = (e) => setCard({ ...card, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    dispatch(clearCart());
    navigate("/success");
  };

  return (
    <div className="container">
      <h2>Payment Page</h2>
      <ul className="list">
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>

      <form className="form" onSubmit={handleSubmit}>
        <input name="number" placeholder="Card Number" value={card.number} onChange={handleChange} required />
        <input name="name" placeholder="Cardholder Name" value={card.name} onChange={handleChange} required />
        <input name="expiry" placeholder="MM/YY" value={card.expiry} onChange={handleChange} required />
        <input name="cvv" placeholder="CVV" value={card.cvv} onChange={handleChange} required />
        <button type="submit">Pay Now</button>
      </form>

      <button className="back" onClick={() => navigate("/")}>⬅️ Continue Shopping</button>
    </div>
  );
};

export default Payment;
