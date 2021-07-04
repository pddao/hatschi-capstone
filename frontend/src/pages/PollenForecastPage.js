import styled from 'styled-components/macro';
import CitySearchComponent from '../components/CitySearchComponent';

export default function PollenForecastPage() {

  return (
    <Wrapper>
      <h1>Pollen Forecast</h1>

      <CitySearchComponent />

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
