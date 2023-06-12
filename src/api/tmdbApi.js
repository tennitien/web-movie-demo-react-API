import axiosClient from './axiosClient';

const API_KEY = '0db4a903f2170b8417443ba3a753204e';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const tmdbApi = {
  getMovie: (endpoint, params) => {
    const url = requests[endpoint];
    return axiosClient.get(url, params);
  },
  getVideo: (id, params) => {
    const url = `/movie/${id}/videos?api_key=${API_KEY}`;
    return axiosClient.get(url, params);
  },
  getSearch: query => {
    const url = `/search/movie?query=${query}&language=en-US&page=1&api_key=${API_KEY}`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
