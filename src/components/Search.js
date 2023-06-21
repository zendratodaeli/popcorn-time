import { useState } from "react";

function Search(props) {

  const[searchMovie, setSearchMovie] = useState('');


  function handleSearchInput(e) {
    setSearchMovie(e.target.value);
  }

  function handleSearch() {
    props.search(searchMovie);
  }
  return(
    <div>
      <input 
        placeholder="search movie"
        value={searchMovie}
        onChange={handleSearchInput}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;