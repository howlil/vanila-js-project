import axios from "axios";

export const getMovieList = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular`);
        return response.data; // mengembalikan data dari respons
    } catch (error) {
        console.error('Error fetching movie list:', error);
    }
};

export const searchMovie = async (query) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie`, {
            params: {
                query: query
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching movie:', error);
    }
};
