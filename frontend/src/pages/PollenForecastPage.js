import usePollenCount from "../hooks/usePollenCount";

export default function PollenForecastPage() {
  const { pollenCounts } = usePollenCount();
  console.log(pollenCounts[0]?.content[13]?.Pollen?.Birke);

  return (
    <div>
      <h1>Pollen Forecast</h1>
      <p>Here comes your personal pollen forecast for Hamburg!</p>
      {pollenCounts[0]?.content?.map((pollenItem) => (
        <div>
          <p>{pollenItem.Pollen.Birke.today}</p>
          <p>{pollenItem.Pollen.Birke.tomorror}</p>
          <p>{pollenItem.Pollen.Birke.dayafter_to}</p>
        </div>
      ))}
      {/*{pollenCounts[0]?.content[13]?.region_name}*/}
      {/*{pollenCounts[0]?.content[13]?.Pollen[]}*/}
    </div>
  );
}
