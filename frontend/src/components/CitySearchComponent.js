import useCities from '../hooks/useCities';
// import { useState, useEffect } from 'react';
import usePollenCount from '../hooks/usePollenCount';

export default function CitySearchComponent() {
  const { cities } = useCities();
  // const [city, setCity] = useState();
  const { pollenCount } = usePollenCount();
  //
  // const handleChange = (event, city) => {
  //   event.preventDefault();
  //   setCity;
  // };
  //
  // const useEffect = (city) => {
  //   console.log(pollenCount[0]?.content[1]?.Pollen.Birke.today)
  //   handleChange(city)
  // }, [city]}

  console.log(pollenCount);

  console.log(pollenCount[0]?.content[1]?.Pollen.Birke.today);

  return (
    <div>
      <h3>Städtesuche</h3>
      <section>
        <label htmlFor="cities">Choose a city:</label>
        <select value={this.state.value} name="cities" id="cities">
          {cities?.map((city) => (
            <option value={city.name}>{city.name}</option>
          ))}
        </select>
      </section>

      {/*<section>*/}
      {/*  <table className="tableStyle">*/}
      {/*    <thead>*/}
      {/*      <tr>*/}
      {/*        <th>Pollen type</th>*/}
      {/*        <th>Today</th>*/}
      {/*        <th>Tomorrow</th>*/}
      {/*      </tr>*/}
      {/*    </thead>*/}
      {/*    <tbody>*/}
      {/*      <tr>*/}
      {/*        <td>Birch</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Birke.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Birke.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Earl</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Erle.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Erle.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Ragweed</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Ambrosia.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Ambrosia.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Grasses</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Graeser.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Graeser.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Mugwort</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Beifuss.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Beifuss.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Hazel</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Hasel.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Hasel.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Rhye</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Roggen.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Roggen.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*      <tr>*/}
      {/*        <td>Ash</td>*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Esche.today}</td>*!/*/}
      {/*        /!*<td>{pollenCount[0]?.content[1]?.Pollen.Esche.tomorrow}</td>*!/*/}
      {/*      </tr>*/}
      {/*    </tbody>*/}
      {/*  </table>*/}
      {/*</section>*/}
    </div>
  );
}
