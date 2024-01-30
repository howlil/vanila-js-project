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
          <div className="movie-wrap">
            <div className="movie-title"> FILM</div>
            <img src="#" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
