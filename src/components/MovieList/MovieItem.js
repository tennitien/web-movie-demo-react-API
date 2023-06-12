import React, { useEffect, useState } from 'react';

import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

import './MovieItem.scss';

export default function MovieItem({ movieItem, selectMovie, selectElement }) {
  const [movieFetch, setMovieFetch] = useState([]);

  // call API
  const getMovie = async () => {
    try {
      const response = await tmdbApi.getMovie(movieItem.endpoint);
      setMovieFetch(response.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const handlePopup = movie => {
    console.log(movie);
  };
  return (
    <>
      <div id={movieItem.className} className='container mt-3 '>
        <h3 className='title mb-1'>{movieItem.title}</h3>
        <div
          className={`imgList ml-1 ${movieItem.imgType}`}
          onClick={() => selectElement(movieItem.className)}
          // onClick={handlePopup(movieItem)}
        >
          {movieFetch.map((e, i) => {
            return (
              <div className='imgItem' key={i} onClick={() => selectMovie(e)}>
                {/* display by type image  */}
                <img
                  src={apiConfig.originalImage(e[movieItem.imgType])}
                  alt={e.name || e.title || ''}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
