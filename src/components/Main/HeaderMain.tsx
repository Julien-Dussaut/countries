import searchPng from '../../assets/img/Search.svg';

interface HeaderMainProps {
  totalCountries: number;
}
export default function HeaderMain({ totalCountries }: HeaderMainProps) {
  return (
    <section className="main-header">
      <h2 className="main-header-counter-results">
        Found {totalCountries} countries
      </h2>
      <form className="main-header-form">
        <img
          className="main-header-form-searchpng"
          src={searchPng}
          alt="Magnificent glass"
        />
        <input
          className="main-header-form-searchfield"
          type="text"
          placeholder="Search by Name, Region, Subregion"
        />
      </form>
    </section>
  );
}
