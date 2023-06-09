import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b42f07a55fmshf8260db1df7510bp13772ejsn70d27f3cddb5",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

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
