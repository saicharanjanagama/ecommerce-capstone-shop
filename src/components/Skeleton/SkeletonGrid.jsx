import styled from "styled-components";

const SkeletonGrid = () => {
  return (
    <Wrapper>
      <SliderSkeleton />

      <HeaderSkeleton>
        <Line width="160px" />
        <Line width="220px" small />
      </HeaderSkeleton>

      <Grid>
        {[...Array(8)].map((_, i) => (
          <Card key={i}>
            <Image />
            <Text />
            <Button />
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

/* ---------- Styles ---------- */

const Wrapper = styled.div`
  padding: 1rem;
`;

/* Slider */
const SliderSkeleton = styled.div`
  height: 360px;
  border-radius: 16px;
  background: #e5e7eb;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

/* Header */
const HeaderSkeleton = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Line = styled.div`
  height: ${p => (p.small ? "12px" : "18px")};
  width: ${p => p.width};
  background: #e5e7eb;
  border-radius: 6px;
  margin: 0.4rem auto;
`;

/* Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/* Card */
const Card = styled.div`
  background: white;
  border-radius: 14px;
  padding: 1rem;
`;

const Image = styled.div`
  height: 180px;
  background: #e5e7eb;
  border-radius: 10px;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const Text = styled.div`
  height: 14px;
  background: #e5e7eb;
  border-radius: 6px;
  margin-bottom: 0.6rem;
`;

const Button = styled.div`
  height: 36px;
  background: #e5e7eb;
  border-radius: 8px;
`;

export default SkeletonGrid;