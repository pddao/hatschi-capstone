import styled from "styled-components/macro";

export default function DictionaryPollenItem({ pollenItem }) {
  return (
    <Wrapper>
      <h2>{pollenItem.englishName}</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
      <section>
        <p> Lateinischer Name: {pollenItem.latinName} </p>
        <p>
          {" "}
          Blütezeit von: {pollenItem.beginSeason} bis {pollenItem.endSeason}
        </p>
        <p> Vorkommen: {pollenItem.distribution} </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  display: grid;

  img {
    margin: 0;
    width: 50%;
  }
`;
