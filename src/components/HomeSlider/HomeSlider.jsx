  import { useEffect, useState } from "react";
  import styled from "styled-components";
  import { Link } from "react-router-dom";

  const slides = [
    {
      title: "Latest Electronics",
      subtitle: "Upgrade to the latest tech",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
    },
    {
      title: "Fashion Sale",
      subtitle: "Trending styles for you",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg",
    },
    {
      title: "Daily Essentials",
      subtitle: "Everything you need, every day",
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    },

  ];

  const HomeSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex(prev => (prev + 1) % slides.length);
      }, 4000);

      return () => clearInterval(timer);
    }, []);

    return (
      <Slider>
        {slides.map((slide, i) => (
          <Slide key={i} active={i === index} bg={slide.image}>
            <Overlay>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <CTA to="/">Shop Now</CTA>
            </Overlay>
          </Slide>
        ))}
      </Slider>
    );
  };

  const Slider = styled.div`
    height: 360px;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin: 1rem;

    @media (max-width: 768px) {
      height: 240px;
      border-radius: 12px;
      margin: 0.8rem;
    }

    @media (max-width: 480px) {
      height: 200px;
      margin: 0.6rem;
    }
  `;

  const Slide = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${p => p.bg});
    background-size: cover;
    background-position: top;
    opacity: ${p => (p.active ? 1 : 0)};
    transition: opacity 1s ease;

    @media (max-width: 768px) {
      background-position: center;
    }
  `;

  const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(14, 165, 164, 0.75) 0%,
      rgba(14, 165, 164, 0.55) 35%,
      rgba(14, 165, 164, 0.25) 55%,
      rgba(14, 165, 164, 0.05) 75%,
      rgba(14, 165, 164, 0) 100%
    );
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      justify-content: end;
      padding-left: 1.5rem;
      padding-bottom: 1.5rem;
      background: linear-gradient(
      90deg,
      rgba(14, 165, 164, 0.75) 0%,
      rgba(14, 165, 164, 0.25) 50%,
      rgba(14, 165, 164, 0) 100%
    );

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      padding-left: 1rem;
      padding-bottom: 1rem;

      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.85rem;
      }
    }
  `;

  const CTA = styled(Link)`
    background: white;
    color: #0ea5a4;
    width: fit-content;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-weight: 700;

    @media (max-width: 768px) {
      padding: 0.45rem 1rem;
      font-size: 0.85rem;
    }
  `;

  export default HomeSlider;