import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { usdToInr } from "../utils/currency";

const OrdersPage = () => {
  const { orders, removeOrder, clearOrders } =
    useContext(OrderContext);

  return (
    <Page>
      <OrdersWrapper>
        <Header>
          <h2>Your Orders 📦</h2>

          {orders.length > 0 && (
            <ClearBtn onClick={clearOrders}>
              Clear Orders
            </ClearBtn>
          )}
        </Header>

        {orders.length === 0 && (
          <Empty>
            <p>No orders placed yet</p>
            <Link to="/">Start Shopping →</Link>
          </Empty>
        )}

        {orders.map(order => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <span>Order #{order.id}</span>
              <span>{order.date}</span>
            </OrderHeader>

            <Items>
              Items: {order.items.length}
            </Items>

            <Footer>
              <Total>
                Total: ₹ {usdToInr(order.total)}
              </Total>

              <RemoveBtn
                onClick={() => removeOrder(order.id)}
              >
                Remove
              </RemoveBtn>
            </Footer>
          </OrderCard>
        ))}
      </OrdersWrapper>
    </Page>
  );
};

const Page = styled.div`
  background: #f7f7fb;
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
`;

const OrdersWrapper = styled.div`
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

const OrderCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.6rem;
`;

const Items = styled.p`
  font-size: 0.95rem;
  color: #374151;
  margin-bottom: 0.6rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.p`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0ea5a4;
`;

const ClearBtn = styled.button`
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.35rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;


export default OrdersPage;
