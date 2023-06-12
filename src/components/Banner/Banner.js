import React, { useState, useEffect } from 'react';

import Button from '../UI/Button/Button';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './Banner.scss';

export default function Banner() {
  const [movie, setMovie] = useState([]);
  // call API
  const getMovie = async () => {
    try {
      const response = await tmdbApi.getMovie('fetchNetflixOriginals');
      const dataFilter = response.results.filter(item => item.backdrop_path);
      // fetched randomly from 'fetchNetflixOriginals' movies.
      const dataRandom =
        dataFilter[Math.floor(Math.random() * dataFilter.length - 1)];
      setMovie(dataRandom);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div
        className='banner'
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            movie.backdrop_path || movie.poster_path
          )})`,
        }}
      >
        <div className='container'>
          <div className='banner-text'>
            <h2 className='name'>{movie.name || movie.title || ''}</h2>
            <Button className='btn-white mr-1'>Play</Button>
            <Button className='btn-white '>My List</Button>
            <p className='overview mt-1'>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
