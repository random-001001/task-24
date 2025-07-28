import { Link } from "react-router-dom";
import "./styles.css";

const PaymentSuccess = () => (
  <div className="container">
    <h2>🎉 Payment Successful!</h2>
    <p>Thank you for your purchase.</p>
    <Link className="link" to="/">Return to Store</Link>
  </div>
);

export default PaymentSuccess;