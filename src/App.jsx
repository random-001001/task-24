import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<PaymentSuccess />} />
    </Routes>
  </Router>
);

export default App;

