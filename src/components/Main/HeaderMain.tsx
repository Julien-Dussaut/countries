import searchPng from '../../assets/img/Search.svg';

interface HeaderMainProps {
  totalCountries: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
export default function HeaderMain({
  totalCountries,
  searchValue,
  setSearchValue,
}: HeaderMainProps) {
  const handleSearch = (event: React.ChangeEvent) => {
    setSearchValue((event.target as HTMLInputElement).value);
    console.log(searchValue);
  };
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
          value={searchValue}
          onChange={handleSearch}
        />
      </form>
    </section>
  );
}
