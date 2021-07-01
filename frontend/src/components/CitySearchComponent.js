import useCities from "../hooks/useCities";

export default function CitySearchComponent() {
  const { cities } = useCities();

  return (
    <div>
      <h3>Städtesuche</h3>
      <div>
        {cities?.map((city) => (
          <div>
            <p>{city.name}</p>
          </div>
        ))}
      </div>
      <section>
        <label htmlFor="cities">Choose a city:</label>
        <select name="cities" id="cities">
          <option value="hamburg">Hamburg</option>
          <option value="berlin">Berlin</option>
          <option value="munich">Munich</option>
        </select>
      </section>
    </div>
  );
}
