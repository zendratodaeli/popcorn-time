import "./Main.css";
import Movie from './Movie';

function Main(props) {
  return(
    <div className="Main">      
      {props.listOfMovies.map((element, index) => {
        return (
          <div key={index} className="card">
            <Movie movies={element} key={element.id} delete={props.delete}/>
            {/* <button onClick={ () => {deleteMovie(element.id)} }>Delete</button> */}
          </div>
          );
        })
      }
    </div>
  )
}

export default Main;