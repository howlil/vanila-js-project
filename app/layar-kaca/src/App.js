import './App.css';
import { useEffect } from 'react';
import {getMovieList,searchMovie} from './Api'

function App() {
  useEffect(()=>{
    getMovieList().then(data=>{
      console.log(data)
    })
  },[])

  const search = (q)=>{
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>LAYAR KACA 21</h1>
          <input 
          type="search"
          placeholder="Cari film" 
          className="movie-search"
          onChange={(e)=>search(e.target.value)}
          />
          <div className='movie-container'>
            <div className='movie-wrap'>
            <div className='movie-title'> FILM</div>
            <img src='#' alt=''/>            
            </div>
         
          </div>          
      </header>
    </div>
  );
}

export default App;
