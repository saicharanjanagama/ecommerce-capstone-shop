import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchProductById } from "../services/api";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import styled from "styled-components";
import { usdToInr } from "../utils/currency";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAdd = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  return (
    <Wrapper>
      <ImageBox>
        <img src={product.image} alt={product.title} />
      </ImageBox>

      <Details>
        <h2>{product.title}</h2>
        <Price>₹ {usdToInr(product.price)}</Price>

        <button onClick={handleAdd}>
          {user ? "Add to Cart" : "Login to Add"}
        </button>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    margin: 1.5rem auto;
    padding: 0.8rem;
  }
`;

const ImageBox = styled.div`
  background: #f7f7fb;
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 350px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    img {
      max-height: 280px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    img {
      max-height: 220px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, #0ea5a4, #38bdf8);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: box-shadow 0.15s ease;

    &:hover {
      box-shadow: 0 10px 24px rgba(14, 165, 164, 0.45);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    h2 {
      font-size: 1.25rem;
    }

    button {
      width: 100%;
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0ea5a4;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export default ProductDetail;
