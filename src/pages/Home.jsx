import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import SkeletonGrid from "../components/Skeleton/SkeletonGrid";
import styled from "styled-components";
import HomeSlider from "../components/HomeSlider/HomeSlider";

const Home = ({ category }) => {
  const { products, loading, error } = useProducts();

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(p => p.category === category); 

  if (loading) return <SkeletonGrid />;

  if (error) {
    return (
      <ErrorState>
        <h3>Something went wrong 😢</h3>
        <p>{error}</p>
      </ErrorState>
    );
  }

  return (
  <>
    {/* 🎞 HERO SLIDER */}
    <HomeSlider />

    {/* 🏷 SECTION TITLE */}
    <SectionHeader>
      <h2>Products</h2>
      <p>Explore our latest collection</p>
    </SectionHeader>

    {/* ❌ EMPTY STATE */}
    {filteredProducts.length === 0 && (
      <EmptyState>
        <h3>No products found 😕</h3>
        <p>Try selecting a different category.</p>
      </EmptyState>
    )}

    {/* 🛍 PRODUCT GRID */}
    {filteredProducts.length > 0 && (
      <HomePage>
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </HomePage>
    )}
  </>
);

};

const ErrorState = styled.div`
  padding: 4rem 1rem;
  text-align: center;
  color: #ef4444;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
  }
`;

const SectionHeader = styled.div`
  margin: 2.5rem 1rem 1.2rem;
  text-align: center;

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
  }

  @media (max-width: 768px) {
    margin: 1rem 1rem 1rem;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    margin: 1.6rem 0.8rem 0.8rem;

    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const EmptyState = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  color: #6b7280;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;


const HomePage = styled.div`
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    padding: 0.8rem;
  }
`;



export default Home;

/* ---------- Styles ---------- */


