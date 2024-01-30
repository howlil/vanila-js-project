import "./App.css";
import { useEffect,useState } from "react";
import { getMovieList, searchMovie } from "./Api";

function App() {

  const [popularMovie,setPM] = useState([])
  useEffect(() => {
    getMovieList().then((result)=>{
      setPM(result)
    })
  }, []);

  const PopulerMovieList = ()=>{
    return popularMovie.map((movie,i)=>{
      return(
        <div className="movie-wrap" key={i}>
          <div  className="movie-image">
            <img className="img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="movie" />
          </div>
          <div className="movie-body">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date"> {movie.release_date}</div>
            <div className="movie-rate"> {movie.vote_average}</div>
          </div>

      </div>
      )
    })
  }

  const search = (q) => {
    console.log(q);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>LAYAR KACA 21</h1>
        <input
          type="search"
          placeholder="Cari film"
          className="movie-search"
          onChange={(target) => search(target.value)}
        />
        <div className="movie-container">
         <PopulerMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
