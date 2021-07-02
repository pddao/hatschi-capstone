import useCities from '../hooks/useCities';
import { useState } from 'react';
import usePollenCount from '../hooks/usePollenCount';

export default function CitySearchComponent() {
  const { cities } = useCities();
  const { pollenCount } = usePollenCount();
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  return (
    <div>
      <h3>Städtesuche</h3>

      <section>
        <label htmlFor="cities">Choose a city:</label>
        <select name="cities" id="cities" onChange={handleChange}>
          {cities?.map((city) => (
            <option key={city.id} value={city.response_position}>
              {city.name}
            </option>
          ))}
        </select>
      </section>

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
              <td>{pollenCount[0]?.content[location]?.Pollen.Birke.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Birke.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Earl</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Erle.today}</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Erle.tomorrow}</td>
            </tr>
            <tr>
              <td>Ragweed</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Ambrosia.today}
              </td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Ambrosia.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Grasses</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Graeser.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Graeser.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Mugwort</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Beifuss.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Beifuss.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Hazel</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Hasel.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Hasel.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Rye</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Roggen.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Roggen.tomorrow}
              </td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>{pollenCount[0]?.content[location]?.Pollen.Esche.today}</td>
              <td>
                {pollenCount[0]?.content[location]?.Pollen.Esche.tomorrow}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
