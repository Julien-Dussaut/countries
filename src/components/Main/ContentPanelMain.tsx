import ICountry from '../../@types/ICountry.d';
import SingleCountry from './SingleCountry';

interface ContentPanelMainProps {
  countries: ICountry[];
}
export default function ContentPanelMain({ countries }: ContentPanelMainProps) {
  return (
    <section className="main-content-data">
      <h2 className="main-content-head-column">Flag</h2>
      <h2 className="main-content-head-column">Name</h2>
      <h2 className="main-content-head-column">Population</h2>
      <h2 className="main-content-head-column">Area (km²)</h2>
      <h2 className="main-content-head-column">Region</h2>
      {countries.map((country) => (
        <SingleCountry key={country.name.official} country={country} />
      ))}
    </section>
  );
}
