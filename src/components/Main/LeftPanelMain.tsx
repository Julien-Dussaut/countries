interface LeftPanelMainProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  selectedRegion: string[];
  setSelectedRegion: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function LeftPanelMain({
  setFilter,
  filter,
  selectedRegion,
  setSelectedRegion,
}: LeftPanelMainProps) {
  const regions = [
    'Americas',
    'Antartic',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ];
  const handleRegions = (event: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const regionClicked = (event.target as HTMLButtonElement).textContent!;
    setSelectedRegion((prevRegions) => {
      const index = prevRegions.indexOf(regionClicked);
      if (index !== -1) {
        return [
          ...prevRegions.slice(0, index),
          ...prevRegions.slice(index + 1),
        ];
      }
      return [...prevRegions, regionClicked];
    });
  };
  return (
    <section className="main-left">
      <form
        className="main-left-form"
        onSubmit={(event) => event.preventDefault}
      >
        <fieldset className="main-left-form-sort">
          <label className="main-left-form-sort-label">
            Sort by
            <select
              className="main-left-form-sort-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="population">Population</option>
              <option value="name">Name</option>
              <option value="area">Area</option>
              <option value="region">Region</option>
            </select>
          </label>
        </fieldset>
        <fieldset className="main-left-form-region">
          <p className="main-left-form-region-label">Region</p>
          <aside className="main-left-form-region-buttons">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                className={
                  selectedRegion.includes(region)
                    ? 'main-left-form-region-button-active'
                    : 'main-left-form-region-button'
                }
                onClick={handleRegions}
              >
                {region}
              </button>
            ))}
          </aside>
        </fieldset>
      </form>
    </section>
  );
}
