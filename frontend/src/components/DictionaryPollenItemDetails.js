import styled from "styled-components/macro";
// import { useParams } from "react-router-dom";
import usePollenItems from "../hooks/usePollenItems";

export default function DictionaryPollenItemDetails() {
  const { pollenItem } = usePollenItems();
  // const { id } = useParams();

  return (
    <Wrapper>
      <h2>{pollenItem.id}</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
      <section>
        <p> Latin name: {pollenItem.latinName} </p>
        <p>
          {" "}
          Blooming season from: {
            pollenItem.beginBloomingSeason.nameOfMonth
          }{" "}
          till: {pollenItem.endBloomingSeason.nameOfMonth}{" "}
        </p>
        <p> Distribution: {pollenItem.distribution} </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;

  img {
    margin: repat(4, 8px);
    width: 100%;
  }
`;
