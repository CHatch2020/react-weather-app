import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { OPEN_WEATHER_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  async function loadOptions (search, loadOptions) {

    const response = await fetch (OPEN_WEATHER_URL)
    const data = await response.json()
    const cities = data.cities
    const options = cities.map((city) => ({ label: city.name, value: city.id }))
    
    return { options }
    }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debouceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
