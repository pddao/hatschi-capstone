import styled from 'styled-components/macro';
import usePollenCount from '../hooks/usePollenCount';
import CitySearchComponent from '../components/CitySearchComponent';

export default function PollenForecastPage() {
  const { pollenCount } = usePollenCount();

  return (
    <Wrapper>
      <h1>Pollen Forecast</h1>
      <p>
        Here comes your personal pollen forecast for{' '}
        {pollenCount[0]?.content[1]?.region_name}! Pleaser consider: next update
        takes place at {pollenCount[0]?.next_update}.
      </p>

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
