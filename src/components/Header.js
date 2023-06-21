import "./Header.css";

function Header(props) {

  let message = "";
  if(props.numberOfMovies <= 0) {
    message = <h2>Sorry, no image</h2>
  } else {
    message = <h2>"Total Movies" : {props.numberOfMovies}</h2>
  }

  return(
    <div className="Header">
      <h1>Popcorn Time</h1>
      {message}
    </div>
  )
}

export default Header;