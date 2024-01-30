import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results
};


export const searchMovie = async (query) => {

        const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie`);
       console.log(search)
  
};
