import './Main.scss';
import HeaderMain from './HeaderMain';
import LeftPanelMain from './LeftPanelMain';
import ContentPanelMain from './ContentPanelMain';
import ICountry from '../../@types/ICountry.d';
import IMembers from '../../@types/IMembers.d';

interface MainProps {
  totalCountries: number;
  countries: ICountry[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  selectedRegion: string[];
  setSelectedRegion: React.Dispatch<React.SetStateAction<string[]>>;
  setDisplayTotal: React.Dispatch<React.SetStateAction<number>>;
  displayTotal: number;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<ICountry | undefined>
  >;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  members: IMembers;
  setMembers: React.Dispatch<React.SetStateAction<IMembers>>;
}
export default function Main({
  totalCountries,
  countries,
  setFilter,
  filter,
  selectedRegion,
  setSelectedRegion,
  setDisplayTotal,
  displayTotal,
  setSelectedCountry,
  searchValue,
  setSearchValue,
  members,
  setMembers,
}: MainProps) {
  const updateDisplay = () => {
    setDisplayTotal(displayTotal + 10);
  };
  return (
    <main className="main">
      <HeaderMain
        totalCountries={totalCountries}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <section className="main-filter-and-data">
        <LeftPanelMain
          setFilter={setFilter}
          filter={filter}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          members={members}
          setMembers={setMembers}
        />
        <ContentPanelMain
          countries={countries}
          setSelectedCountry={setSelectedCountry}
        />
        <button className="button-more" type="button" onClick={updateDisplay}>
          Load more
        </button>
      </section>
    </main>
  );
}
