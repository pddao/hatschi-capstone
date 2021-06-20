import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import usePollenDetails from "../hooks/usePollenDetails";
import NavigationBar from "./NavigationBar";

export default function DictionaryPollenItemDetails() {
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <Wrapper>
      <h2>{pollenDetails.englishName}Pollen details page</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
      <ul className="list-items">
        <li>Latin name: {pollenDetails.latinName}</li>
        <li>
          Blooming season from: {pollenDetails.beginBloomingSeason} till:{" "}
          {pollenDetails.endBloomingSeason}
        </li>
        <li>Distribution: {pollenDetails.distribution}</li>
      </ul>
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
