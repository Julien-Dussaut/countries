import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';
import ICountry from '../../@types/ICountry.d';
import Footer from './Footer/Footer';
import CountryDetails from '../Main/CountryDetails';
import IMembers from '../../@types/IMembers.d';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [members, setMembers] = useState<IMembers>({
    un: true,
    independent: true,
  });
  const [bordersCountry, setBordersCountry] = useState<ICountry[]>([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState<ICountry[]>([]);
  const [totalCountries, setTotalCountries] = useState<number>(0);
  const [displayTotal, setDisplayTotal] = useState<number>(10);
  const [filter, setFilter] = useState<string>('population');
  const [searchValue, setSearchValue] = useState<string>('');
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
        'https://restcountries.com/v3.1/all?fields=name,population,flags,area,region,capital,subregion,currencies,languages,continents,borders,cca3,independent,unMember'
        // 'https://restcountries.com/v3.1/all'
      );
      setCountries(result.data);
      console.log(result.data);
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
    // const sortedCountries = [...countries];

    const sortedCountries = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.region.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.subregion.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

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

    const countryByMember = countryByRegion.filter((country) => {
      return (
        country.unMember === members.un &&
        country.independent === members.independent
      );
    });

    setCountriesToDisplay(countryByMember.slice(0, displayTotal));
    setTotalCountries(countryByRegion.length);
  }, [countries, displayTotal, filter, selectedRegion, searchValue, members]);

  useEffect(() => {
    const borders = countries.filter((country) => {
      return selectedCountry?.borders.includes(country.cca3);
    });
    setBordersCountry(borders);
  }, [selectedCountry, countries]);

  // useEffect(() => {
  //   const searchedCountries = countries.filter((country) => {
  //     return (
  //       country.name.common.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       country.region.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       country.subregion.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //   });
  //   switch (filter) {
  //     case 'name':
  //       searchedCountries.sort((a: ICountry, b: ICountry) => {
  //         return a.name.common.localeCompare(b.name.common);
  //       });
  //       break;
  //     case 'population':
  //       searchedCountries.sort((a: ICountry, b: ICountry) => {
  //         return b.population - a.population;
  //       });
  //       break;
  //     case 'area':
  //       searchedCountries.sort((a: ICountry, b: ICountry) => {
  //         return b.area - a.area;
  //       });
  //       break;
  //     case 'region':
  //       searchedCountries.sort((a: ICountry, b: ICountry) => {
  //         return a.region.localeCompare(b.region);
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  //   setCountriesToDisplay(searchedCountries);
  // }, [searchValue, countries, filter]);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main
                  totalCountries={totalCountries}
                  countries={countriesToDisplay}
                  setFilter={setFilter}
                  filter={filter}
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  setDisplayTotal={setDisplayTotal}
                  displayTotal={displayTotal}
                  setSelectedCountry={setSelectedCountry}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  members={members}
                  setMembers={setMembers}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/country/:name"
            element={
              <>
                <Header />
                {selectedCountry && (
                  <CountryDetails
                    selectedCountry={selectedCountry}
                    bordersCountry={bordersCountry}
                    setSelectedCountry={setSelectedCountry}
                  />
                )}
                <Footer />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
