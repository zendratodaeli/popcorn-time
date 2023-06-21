function Movie(props) {

  return (
    <div>
      <div>
        <p>{props.movies.title}</p>
        <p>{props.movies.rating}</p>
        <p>{props.movies.year}</p>
        <p>{props.movies.genres[0]}, {props.movies.genres[1]} </p>
        {props.movies.imgURL 
          ? <div><img src={props.movies.imgURL} alt="img"/></div> 
          : <div>Sorry, no image my friend. We are working on it!</div> 
        }
        <button onClick={() => {props.delete(props.movies.title)}}>Delete</button>
      </div>
    </div>
  )
}

export default Movie;