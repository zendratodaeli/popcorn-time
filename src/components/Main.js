import { useState } from 'react';
import "./Main.css";
import movies from "../data/movies.json"
import Movie from './Movie';

function Main() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  // const [totalMovies, setTotalMovies] = useState(movies.length);

  function deleteMovie (movieId) {
    const newList = moviesToDisplay.filter((movie) => movie.id !== movieId);
      setMoviesToDisplay(newList)
  }

  let message = "";
  if(moviesToDisplay.length <= 0) {
    message = <h1>Sorry, no image</h1>
  } else {
    message = <h1>"Total Movies : {moviesToDisplay.length}</h1>
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

  return(
    <div className="Main">
      <h1> {message} </h1>

      <button onClick={ascendingMovies}>Ascending</button>
      <button onClick={descendingMovies}>Descending</button>
      
      {moviesToDisplay.map(element => {
        return (
          <div key={element.id} className="card">
            <Movie movies={element} key={element.id} delete={deleteMovie}/>
            {/* <button onClick={ () => {deleteMovie(element.id)} }>Delete</button> */}
          </div>
          );
        })
      }
    </div>
  )
}

export default Main;