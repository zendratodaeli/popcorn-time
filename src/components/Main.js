import { useState } from 'react';
import "./Main.css";
import movies from "../data/movies.json"

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

  return(
    <div className="Main">
      <h1> {message} </h1>
      
      {moviesToDisplay.map(element => {
        console.log(element.length)
        return (
          <div key={element.id} className="card">
            <p>{element.title}</p>
            <p>{element.rating}</p>

            {element.rating > 8 && <p>Recommended</p>}
            
            <p>{element.year}</p>

            {element.year > 2000 ? <p>New Movie</p> : <p>Old Movie</p>}

            <p>{element.genres[0]} {element.genres[1]}</p>
            {/* <div><img src={element.imgURL} alt='img'></img></div> */}
            {element.imgURL 
              ? <div><img src={element.imgURL} alt='img'></img></div> 
              : <div>Sorry, no image my friend. We are working on it!</div> 
            }
            
            <button onClick={ () => {deleteMovie(element.id)} }>Delete</button>
          </div>
        );

        })
      }
    </div>
  )
}

export default Main;