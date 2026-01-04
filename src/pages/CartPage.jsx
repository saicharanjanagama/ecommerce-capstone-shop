import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/Cart/CartItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { usdToInr } from "../utils/currency";

const CartPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Page>
      <CartWrapper>
        <Header>
          <h2>Your Cart 🛒</h2>
          {cart.length > 0 && (
            <ClearBtn onClick={clearCart}>Clear Cart</ClearBtn>
          )}
        </Header>

        {cart.length === 0 && (
          <Empty>
            <p>Your cart is empty</p>
            <Link to="/">Continue Shopping →</Link>
          </Empty>
        )}

        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length > 0 && (
          <Summary>
            <Total>Total: ₹ {usdToInr(total)}</Total>

            <CheckoutBtn to="/checkout">
              Proceed to Checkout
            </CheckoutBtn>
          </Summary>
        )}
      </CartWrapper>
    </Page>
  );
};

const Page = styled.div`
  background: #f7f7fb;
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
`;

const CartWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const Empty = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: #6b7280;

  p {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  a {
    color: #0ea5a4;
    font-weight: 600;
  }
`;

const Summary = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Total = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
`;

const ClearBtn = styled.button`
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;

const CheckoutBtn = styled(Link)`
  background: linear-gradient(135deg, #0ea5a4, #38bdf8);
  color: white;
  padding: 0.75rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(14, 165, 164, 0.35);
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 14px 30px rgba(14, 165, 164, 0.45);
  }
`;


export default CartPage;
