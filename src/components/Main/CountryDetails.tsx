import { Link } from 'react-router-dom';
import ICountry from '../../@types/ICountry.d';

interface CountryDetailsProps {
  selectedCountry: ICountry;
  bordersCountry: ICountry[];
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<ICountry | undefined>
  >;
}

export default function CountryDetails({
  selectedCountry,
  bordersCountry,
  setSelectedCountry,
}: CountryDetailsProps) {
  function getCapital() {
    return selectedCountry.capital[0];
  }
  function getLanguages() {
    // const languages = Object.values(selectedCountry.languages);
    // return languages.join(' / ');
    return Object.values(selectedCountry.languages).join(' - ');
  }
  function getCurrencies() {
    return Object.values(selectedCountry.currencies).map(
      (currency) => `${currency.name} (${currency.symbol})`
    );
  }
  function getContinents() {
    return Object.values(selectedCountry.continents).join(' / ');
  }
  return (
    <>
      <Link to="/" className="country-details-back">
        Back to home
      </Link>
      <section className="country-details">
        <img
          src={selectedCountry.flags.png}
          alt=""
          className="country-details-img"
        />
        <h1>{selectedCountry.name.common}</h1>
        <h2>{selectedCountry.name.official}</h2>
        <section className="country-details-poparea">
          <p className="country-details-poparea-infos">
            Population
            <hr />
            <span>
              {Intl.NumberFormat('en-EN').format(selectedCountry.population)}
            </span>
          </p>
          <p className="country-details-poparea-infos">
            Area (km²)
            <hr />
            <span>
              {Intl.NumberFormat('en-EN').format(selectedCountry.area)}
            </span>
          </p>
        </section>
        <section className="country-details-infos">
          <p className="country-details-infos-item">
            Capital
            <span>{getCapital()}</span>
          </p>
          <p className="country-details-infos-item">
            Subregion
            <span>{selectedCountry.subregion}</span>
          </p>
          <p className="country-details-infos-item">
            Language
            <span>{getLanguages()}</span>
          </p>
          <p className="country-details-infos-item">
            Currencies
            <span>{getCurrencies()}</span>
          </p>
          <p className="country-details-infos-item">
            Continent
            <span>{getContinents()}</span>
          </p>
        </section>
        <section className="country-details-borders">
          <h3 className="country-details-borders-title">
            Neighbouring Countries
          </h3>
          {bordersCountry.map((border) => (
            <aside
              key={border.name.common}
              className="country-details-borders-info"
            >
              <Link
                to={`/country/${border.name.common}`}
                style={{ display: 'contents' }}
                onClick={() => setSelectedCountry(border)}
              >
                <img
                  src={border.flags.png}
                  alt={border.flags.alt}
                  className="country-details-borders-info-img"
                />
                <p>{border.name.common}</p>
              </Link>
            </aside>
          ))}
        </section>
      </section>
    </>
  );
}
