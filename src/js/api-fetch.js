import axios from "axios";

export async function fetchToApiMovie(page, endPoint, movieName, year) {
    const baseURL = 'https://api.themoviedb.org/3';
    const endPointEl = endPoint;
    
    const params = {
        page: page,
        api_key: 'd3a8d2b8dd7d39a12f23ee17ed71c787',
    }
    if (movieName) {
        params.query = movieName;
        params.year = year;
  }
    const url = baseURL + endPointEl;
    const res = await axios.get(url, {params});
    return res.data;
}