import React, { useCallback, useEffect, useState } from 'react';

import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

import './MovieItem.scss';

export default function MovieItem({ movieItem, getMovieOnClick }) {
  const [movieFetch, setMovieFetch] = useState([]);
  // call API
  const getMovie = useCallback(async () => {
    try {
      const response = await tmdbApi.getMovie(movieItem.endpoint);
      setMovieFetch(response.results);
    } catch (error) {
      console.log(error.message);
    }
  }, [movieItem.endpoint]);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div id={movieItem.className} className='container mt-3 '>
        <h3 className='title mb-1'>{movieItem.title}</h3>
        <div className={`imgList ml-1 ${movieItem.imgType}`}>
          {movieFetch.map((e, i) => {
            return (
              <div
                className='imgItem'
                key={i}
                data={e.id}
                onClick={() => getMovieOnClick(e)}
              >
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
