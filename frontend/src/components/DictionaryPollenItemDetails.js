import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import usePollenDetails from "../hooks/usePollenDetails";

export default function DictionaryPollenItemDetails() {
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <Wrapper>
      <h2>{pollenDetails.englishName}</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
      <section>
        <p> Latin name: {pollenDetails.latinName} </p>
        <p>
          {" "}
          Blooming season from: {pollenDetails.beginBloomingSeason} till:{" "}
          {pollenDetails.endBloomingSeason}{" "}
        </p>
        <p> Distribution: {pollenDetails.distribution} </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;

  img {
    margin: 0;
    width: 50%;
  }
`;
