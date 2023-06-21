import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [genres, setGenres] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh
    
    const newMovie = {
      title: title,
      year: year,
      genres: [genres],
      rating: rating
    }

    props.callCreateMovie(newMovie);
    
    // Clear form
    setTitle("");
    setRating("");
    setYear("");
    setGenres("");
  }


  return (
    <section className="AddMovie">
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            required={true}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          Rating
          <input
            type="number"
            min={0}
            max={10}
            name="rating"
            required={true}
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>

        <label>
          Year
          <input
            type="number"
            name="rating"
            required={true}
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>

        <label>
          Genres
          <input
            type="text"
            name="genres"
            required={true}
            value={genres}
            onChange={(e) => {
              setGenres(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </form>
    </section>
  );
}

export default AddMovie;
