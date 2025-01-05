export default interface ICountry {
  area: number;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
}
