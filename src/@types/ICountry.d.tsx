export default interface ICountry {
  area: number;
  borders: string[];
  capital: string[];
  cca3: string;
  continents: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: {
    [key: string]: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
}
