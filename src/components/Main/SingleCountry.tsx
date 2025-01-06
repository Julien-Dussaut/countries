import { Link } from 'react-router-dom';
import ICountry from '../../@types/ICountry.d';

interface SingleCountryProps {
  country: ICountry;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<ICountry | undefined>
  >;
}
export default function SingleCountry({
  country,
  setSelectedCountry,
}: SingleCountryProps) {
  return (
    <Link
      to={`/country/${country.name.common}`}
      className="main-content-data-link"
      style={{ display: 'contents' }}
      onClick={() => setSelectedCountry(country)}
    >
      <img
        className="main-content-data-img"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <p className="main-content-data-text">{country.name.common}</p>
      <p className="main-content-data-text">
        {Intl.NumberFormat('en-EN').format(country.population)}
      </p>
      <p className="main-content-data-text">
        {Intl.NumberFormat('en-EN').format(country.area)}
      </p>
      <p className="main-content-data-text md-none">{country.region}</p>
    </Link>
  );
}
