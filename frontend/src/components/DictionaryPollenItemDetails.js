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
      <section className="list-items">
        <ul>
          <li>Latin name: {pollenDetails.latinName}</li>
          <li>
            Blooming season from:{" "}
            {pollenDetails.beginBloomingSeason?.nameOfMonth} till:{" "}
            {pollenDetails.endBloomingSeason?.nameOfMonth}
          </li>
          <li>Distribution: {pollenDetails.distribution}</li>
        </ul>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: medium;

  img {
    margin: 0;
    width: 50%;
  }
`;
