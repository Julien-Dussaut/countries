import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';
import ICountry from '../../@types/ICountry.d';
import Footer from './Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState<ICountry[]>([]);
  const [totalCountries, setTotalCountries] = useState<number>(0);
  const [displayTotal, setDisplayTotal] = useState<number>(10);
  const [filter, setFilter] = useState<string>('population');
  const [selectedRegion, setSelectedRegion] = useState<string[]>([
    'Americas',
    'Antartic',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ]);

  const getCountries = async () => {
    try {
      const result = await axios.get(
        'https://restcountries.com/v3.1/all?fields=name,population,flags,area,region'
      );
      setCountries(result.data);
      // console.log(result.data);
      setTotalCountries(result.data.length);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      await Promise.all([getCountries()]);
    };
    getData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const sortedCountries = [...countries];

    switch (filter) {
      case 'name':
        sortedCountries.sort((a: ICountry, b: ICountry) => {
          return a.name.common.localeCompare(b.name.common);
        });
        break;
      case 'population':
        sortedCountries.sort((a: ICountry, b: ICountry) => {
          return b.population - a.population;
        });
        break;
      case 'area':
        sortedCountries.sort((a: ICountry, b: ICountry) => {
          return b.area - a.area;
        });
        break;
      case 'region':
        sortedCountries.sort((a: ICountry, b: ICountry) => {
          return a.region.localeCompare(b.region);
        });
        break;
      default:
        break;
    }

    const countryByRegion = sortedCountries.filter((country) => {
      return selectedRegion.includes(country.region);
    });

    setCountriesToDisplay(countryByRegion.slice(0, displayTotal));
  }, [countries, displayTotal, filter, selectedRegion]);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <Header />
          <Main
            totalCountries={totalCountries}
            // countries={countries.slice(0, displayTotal)}
            countries={countriesToDisplay}
            setFilter={setFilter}
            filter={filter}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            setDisplayTotal={setDisplayTotal}
            displayTotal={displayTotal}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
