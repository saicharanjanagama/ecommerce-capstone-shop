import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { usdToInr } from "../../utils/currency";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQty } = useContext(CartContext);

  return (
    <Item>
      <Left>
        <ImageWrap>
          <img src={item.image} alt={item.title} />
        </ImageWrap>

        <Info>
          <Title>{item.title}</Title>
          <Price>₹ {usdToInr(item.price)}</Price>

          <QtyControl>
            <button onClick={() => updateQty(item.id, -1)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </QtyControl>
        </Info>
      </Left>

      <RemoveBtn onClick={() => removeFromCart(item.id)}>
        Remove
      </RemoveBtn>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ImageWrap = styled.div`
  background: #f7f7fb;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Title = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  max-width: 260px;
  color: #111827;
  line-height: 1.3;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #0ea5a4;
`;

const QtyControl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.3rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background: #e5e7eb;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s ease;

    &:hover {
      background: #d1d5db;
    }
  }

  span {
    min-width: 22px;
    text-align: center;
    font-weight: 600;
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: 1px solid #ef4444;
  color: #ef4444;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;

export default CartItem;