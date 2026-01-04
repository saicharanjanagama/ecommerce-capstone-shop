import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { usdToInr } from "../../utils/currency";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  return (
    <Card>
      <ImageWrap>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
      </ImageWrap>

      <Content>
        <Title>{product.title}</Title>
        <Price>₹ {usdToInr(product.price)}</Price>

        <Button onClick={handleAdd}>
          {user ? "Add to Cart" : "Login to Add"}
        </Button>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

const ImageWrap = styled.div`
  background: #f7f7fb;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    max-width: 170px;
    max-height: 170px;
    transition: transform 0.25s ease;
  }

  @media (max-width: 768px) {
    height: 160px;

    img {
      max-width: 140px;
      max-height: 140px;
    }
  }

  @media (max-width: 480px) {
    height: 140px;

    img {
      max-width: 120px;
      max-height: 120px;
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const Title = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  height: 2.6em;
  overflow: hidden;
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    height: 2.4em;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    height: 2.2em;
  }
`;

const Price = styled.p`
  font-size: 1.05rem;
  font-weight: 700;
  color: #0ea5a4;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  background: linear-gradient(135deg, #0ea5a4, #38bdf8);
  color: white;
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(14, 165, 164, 0.4);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem;
  }
`;



export default ProductCard;
