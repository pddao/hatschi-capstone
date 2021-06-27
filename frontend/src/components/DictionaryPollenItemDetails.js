import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import usePollenDetails from "../hooks/usePollenDetails";

export default function DictionaryPollenItemDetails() {
  const { id } = useParams();
  const { pollenDetails } = usePollenDetails(id);

  return (
    <Wrapper>
      <h2>{pollenDetails.englishName}</h2>
      <img src={pollenDetails.firstPicUrl} alt="" />
      <img src={pollenDetails.secondPicUrl} alt="" />
      <img src={pollenDetails.thirdPicUrl} alt="" />

      <section className="description">
        <b>Latin name:</b> <br />
        {pollenDetails.latinName} <br />
        <b>Blooming season: </b> <br />
        {pollenDetails.beginBloomingSeason?.nameOfMonth}-
        {pollenDetails.endBloomingSeason?.nameOfMonth}
        <br />
        <b>Distribution: </b>
        <br />
        {pollenDetails.description}
        <br />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  font-size: medium;

  img {
    padding: 5px;
    width: 100%;
  }
`;
