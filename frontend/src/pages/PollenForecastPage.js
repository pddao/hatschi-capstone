import usePollenCount from "../hooks/usePollenCount";
import styled from "styled-components/macro";
import CitySearchComponent from "../components/CitySearchComponent";

export default function PollenForecastPage() {
  const { pollenCounts } = usePollenCount();

  return (
    <Wrapper>
      <h1>Pollen Forecast</h1>
      <p>
        Here comes your personal pollen forecast for{" "}
        {pollenCounts[0]?.content[1]?.region_name}! Pleaser consider: next
        update takes place at {pollenCounts[0]?.next_update}.
      </p>

      <CitySearchComponent />

      <section>
        <table className="tableStyle">
          <thead>
            <tr>
              <th>Pollen type</th>
              <th>Today</th>
              <th>Tomorrow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Birch</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Birke.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Birke.tomorrow}</td>
            </tr>
            <tr>
              <td>Earl</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Erle.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Erle.tomorrow}</td>
            </tr>
            <tr>
              <td>Ragweed</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Ambrosia.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Ambrosia.tomorrow}</td>
            </tr>
            <tr>
              <td>Grasses</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Graeser.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Graeser.tomorrow}</td>
            </tr>
            <tr>
              <td>Mugwort</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Beifuss.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Beifuss.tomorrow}</td>
            </tr>
            <tr>
              <td>Hazel</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Hasel.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Hasel.tomorrow}</td>
            </tr>
            <tr>
              <td>Rhye</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Roggen.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Roggen.tomorrow}</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Esche.today}</td>
              <td>{pollenCounts[0]?.content[1]?.Pollen.Esche.tomorrow}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="legend">
        <p>Legend: </p>
        <p>0 no pollen count </p>
        <p>1 low pollen count</p>
        <p>2 medium pollen count </p>
        <p>3 high pollen count</p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tableStyle td {
    width: 100%;
    text-align: center;
  }
`;
