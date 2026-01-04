import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { OrderContext } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usdToInr } from "../utils/currency";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // 🧾 CREATE ORDER OBJECT
    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, i) => sum + i.price * i.qty, 0),
      date: new Date().toLocaleString()
    };

    // 💾 SAVE ORDER
    addOrder(order);

    // 🧹 CLEAR CART
    clearCart();

    // ✅ SUCCESS UI
    setSuccess(true);

    // ⏳ REDIRECT TO ORDERS PAGE
    setTimeout(() => navigate("/orders"), 2000);
  };

  if (success) {
    return (
      <SuccessBox>
        <h3>Thank you for your order 🎉</h3>
        <p>Your order has been placed successfully</p>
        <p>Redirecting to orders...</p>
      </SuccessBox>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Checkout</h2>

      <input placeholder="Name" required />
      <input placeholder="Address" required />

      <Summary>
        <span>Total Amount</span>
        <strong>₹ {usdToInr(
          cart.reduce((sum, i) => sum + i.price * i.qty, 0)
        )}</strong>
      </Summary>

      <button type="submit" disabled={cart.length === 0}>
        Place Order
      </button>
    </Form>
  );
};

/* ---------- Styles ---------- */

const Form = styled.form`
  max-width: 420px;
  margin: 4rem auto;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  input {
    padding: 0.7rem;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 0.95rem;

    &:focus {
      outline: none;
      border-color: #0ea5a4;
      box-shadow: 0 0 0 3px rgba(14, 165, 164, 0.25);
    }
  }

  button {
    margin-top: 0.5rem;
    padding: 0.75rem;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    color: white;

    background: linear-gradient(135deg, #0ea5a4, #38bdf8);
    box-shadow: 0 8px 20px rgba(14, 165, 164, 0.35);
    transition: box-shadow 0.15s ease;

    &:hover {
      box-shadow: 0 14px 30px rgba(14, 165, 164, 0.45);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
`;

const Summary = styled.div`
  margin-top: 0.5rem;
  padding: 0.8rem;
  border-radius: 10px;
  background: #f7f7fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;

  span {
    color: #6b7280;
    font-weight: 500;
  }

  strong {
    font-size: 1.05rem;
    color: #0ea5a4;
  }
`;


const SuccessBox = styled.div`
  max-width: 420px;
  margin: 5rem auto;
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  h3 {
    font-size: 1.4rem;
    color: #16a34a;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
  }

  &::before {
    content: "✔";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #16a34a;
    color: white;
    font-size: 1.8rem;
  }
`;


export default CheckoutPage;
