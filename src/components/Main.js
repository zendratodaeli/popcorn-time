import { useState } from 'react';
import "./Main.css";
import movies from "../data/movies.json"

function Main() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [totalMovies, setTotalMovies] = useState(movies.length);

  function deleteMovie (movieId) {
    const newList = moviesToDisplay.filter((movie) => movie.id !== movieId);
    setMoviesToDisplay(newList);
    setTotalMovies(totalMovies - 1);
  }

  

  return(
    <div className="Main">
      <h1>Total Movies: {totalMovies} </h1>
      
      {moviesToDisplay.map(element => {
        console.log(element.length)
        return (
          <div key={element.id} className="card">
            <p>{element.title}</p>
            <p>{element.rating}</p>
            <p>{element.year}</p>
            <p>{element.genres[0]} {element.genres[1]}</p>
            <div><img src={element.imgURL} alt='img'></img></div>
            <button onClick={ () => {deleteMovie(element.id)} }>Delete</button>
          </div>
        );

        })
      }
    </div>
  )
}

export default Main;