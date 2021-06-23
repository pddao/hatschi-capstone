import usePollenCount from "../hooks/usePollenCount";
import styled from "styled-components/macro";

export default function PollenForecastPage() {
  const { pollenCounts } = usePollenCount();
  // console.log(pollenCounts);

  return (
    <div>
      <h1>Pollen Forecast</h1>
      <p>
        Here comes your personal pollen forecast for{" "}
        {pollenCounts[0]?.content[1]?.region_name}!
      </p>
      <ForecastStyling>
        <p className="TableHeader">Pflanzenart und Datum</p>
        <div className="TableBody">
          <p>Birke heute: {pollenCounts[0]?.content[1]?.Pollen?.Birke.today}</p>
          <p>
            Birke morgen: {pollenCounts[0]?.content[1]?.Pollen?.Birke.tomorrow}
          </p>{" "}
          <p>Erle heute: {pollenCounts[0]?.content[1]?.Pollen?.Erle.today}</p>
          <p>
            Erle morgen: {pollenCounts[0]?.content[1]?.Pollen?.Erle.tomorrow}
          </p>{" "}
          <p>
            Ambrosia heute:{" "}
            {pollenCounts[0]?.content[1]?.Pollen?.Ambrosia.today}
          </p>
          <p>
            Ambrosia morgen:{" "}
            {pollenCounts[0]?.content[1]?.Pollen?.Ambrosia.tomorrow}
          </p>
          <p>
            Roggen heute: {pollenCounts[0]?.content[1]?.Pollen?.Roggen.today}
          </p>
          <p>
            Roggen morgen:{" "}
            {pollenCounts[0]?.content[1]?.Pollen?.Roggen.tomorrow}
          </p>{" "}
          <p>
            Graeser heute: {pollenCounts[0]?.content[1]?.Pollen?.Graeser.today}
          </p>
          <p>
            Graeser morgen:{" "}
            {pollenCounts[0]?.content[1]?.Pollen?.Graeser.tomorrow}
          </p>{" "}
          <p>
            Beifuss heute: {pollenCounts[0]?.content[1]?.Pollen?.Beifuss.today}
          </p>
          <p>
            Beifuss morgen:{" "}
            {pollenCounts[0]?.content[1]?.Pollen?.Beifuss.tomorrow}
          </p>{" "}
          <p>Hasel heute: {pollenCounts[0]?.content[1]?.Pollen?.Hasel.today}</p>
          <p>
            Hasel morgen: {pollenCounts[0]?.content[1]?.Pollen?.Hasel.tomorrow}
          </p>{" "}
          <p>Esche heute: {pollenCounts[0]?.content[1]?.Pollen?.Esche.today}</p>
          <p>
            Esche morgen: {pollenCounts[0]?.content[1]?.Pollen?.Esche.tomorrow}
          </p>
        </div>
      </ForecastStyling>
    </div>
  );
}

// Pollendaten für alle Regionen
// {pollenCounts[0]?.content?.map((pollenItem) => (
//     <div>
//         <p>Today: {pollenItem.Pollen.Graeser.today}</p>
//         <p>Tomorrow: {pollenItem.Pollen.Graeser.tomorrow}</p>
//     </div>
// ))}

/*Filterfunktionen auf Regionen? - Grid-Template einfügen*/

const ForecastStyling = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "header header header"
    "main main main";

  .TableHeader {
    grid-area: header;
  }

  .TableBody {
    grid-area: main;
  }
`;
