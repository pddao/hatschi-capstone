import styled from "styled-components/macro";
import usePollenCount from "../hooks/usePollenCount";
import PollenCountItem from "../components/PollenCountItem";

export default function HomePage() {
  const { pollenCounts } = usePollenCount();

  return (
    <Wrapper>
      <h1>Homepage</h1>
      <p>Hey!</p>
      <p>Here comes your personal pollen forecast for Hamburg!</p>
      <div>
        {pollenCounts.map((pollenCount) => (
          <PollenCountItem key={pollenCount.id} pollenCount={pollenCount} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;
