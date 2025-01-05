import ICountry from '../../@types/ICountry.d';

interface SingleCountryProps {
  country: ICountry;
}
export default function SingleCountry({ country }: SingleCountryProps) {
  return (
    <>
      <img
        className="main-content-data-img"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <p className="main-content-data-text">{country.name.common}</p>
      <p className="main-content-data-text">{country.population}</p>
      <p className="main-content-data-text">{country.area}</p>
      <p className="main-content-data-text">{country.region}</p>
    </>
  );
}
