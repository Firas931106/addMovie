import AddMovie from './components/AddMovie';
import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useState } from 'react';
import Rating from './components/Rating';


function App() {

  const [movies, setMovies] = useState([

    {
      id: 1,
      movieName: "The Book of Eli",
      description: "A post-apocalyptic action film set in a desolate world.",
      rating: 5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e3/Book_of_eli_poster.jpg",
    },
    {
      id: 2,
      movieName: "300",
      description: "An action-packed historical epic about the Battle of Thermopylae.",
      rating: 3,
      imgUrl: "https://musicart.xboxlive.com/7/4b7d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    },
    {
      id: 3,
      movieName: "L'Associé du Diable",
      description: "A thrilling supernatural movie with a pact made in the underworld.",
      rating: 4,
      imgUrl: "https://m.media-amazon.com/images/S/pv-target-images/0274d835f0fa455f06dbc29be0bb89ebdd3a15b0f58f6fa96d2df9307db678ea.jpg",
    },
    {
      id: 4,
      movieName: "The Matrix",
      description: "A mind-bending science fiction film exploring the virtual world of the Matrix.",
      rating: 5,
      imgUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    },
    {
      id: 5,
      movieName: "The Parfum",
      description: "A dramatic movie based on a novel, revealing the power of scents.",
      rating: 3,
      imgUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/36/23/59/18653460.jpg",
    },
  ])

  const [search, setSearch] = useState("")
  const [rate, setRate] = useState(1)
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie])
  }
  return (
    <div className="App">
      <div className="toolbar">
        <Search setSearch={setSearch} />
        <Rating setRate={setRate} />
        <AddMovie addMovie={addMovie} />
      </div>
      <MovieList movies={movies} setMovies={setMovies} search={search} rate={rate} />
    </div>
  );
}

export default App;