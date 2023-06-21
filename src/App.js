import { useState, useEffect } from 'react';
import movies from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import AddMovie from './components/AddMovie';
import Search from './components/Search';

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [searchQuery, setSearchQuery] = useState('');
  const [originalMovies, setOriginalMovies] = useState(movies);

  useEffect(() => {
    // Update the movies to display based on the search query
    const filteredMovies = originalMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setMoviesToDisplay(filteredMovies);
  }, [searchQuery, originalMovies]);

  function createMovie(newMovie) {
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  function deleteMovie (movieTitle) {
    const newList = moviesToDisplay.filter((movie) => movie.title !== movieTitle);
      setMoviesToDisplay(newList)
  }

    function ascendingMovies() {
    const ascending = [...moviesToDisplay].sort((a, b) => {
      return a.title.localeCompare(b.title);
    }
    )
    setMoviesToDisplay(ascending);
  }

  function descendingMovies() {
    const ascending = [...moviesToDisplay].sort((a, b) => {
      return b.title.localeCompare(a.title);
    }
    )
    setMoviesToDisplay(ascending);
  }

  function searchMovie(search) {
    setSearchQuery(search);
  }

  
  function resetSearch() {
    setSearchQuery('');
    setMoviesToDisplay(originalMovies);
  }

  

  return (
    <div className="App">

      <Header numberOfMovies = {moviesToDisplay.length}/>
      <button onClick={ascendingMovies}>Ascending</button>
      <button onClick={descendingMovies}>Descending</button>
      
      <AddMovie callCreateMovie={createMovie}/>
      <Search search={searchMovie} reset={resetSearch}/>

      <Main listOfMovies = {moviesToDisplay} delete={deleteMovie}/>

      <Footer />
    </div>
  );
}

export default App;
