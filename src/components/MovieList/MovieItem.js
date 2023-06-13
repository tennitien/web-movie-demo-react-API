import React, { useEffect, useState } from 'react';

import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

import './MovieItem.scss';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../store/popup';

export default function MovieItem({ movieItem, getIdOnClick }) {
  const [movieFetch, setMovieFetch] = useState([]);
  const dispatch = useDispatch();
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

  const handlePopup = e => {
    e.preventDefault();
    console.log('item');
    // dispatch(popupActions.OPEN_POPUP());
  };
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
                onClick={() => getIdOnClick(e.id)}
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
