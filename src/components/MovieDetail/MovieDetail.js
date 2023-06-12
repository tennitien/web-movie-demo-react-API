import React, { useState } from 'react';
import './MovieDetail.scss';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useSelector } from 'react-redux';
import { popupSelector } from '../../store/popup';

const MovieDetail = () => {
  const [trailerKey, setTrailerKey] = useState(null);
  const isOpen = useSelector(popupSelector.isOpen);
  const movie = useSelector(popupSelector.movie);
  // Check movie
  if (!movie) return null;

  // call API
  async function fetchVideo(id) {
    try {
      const response = await tmdbApi.getVideo(id);
      if (response.results.length) {
        const trailer = response.results.find(item => item.type === 'Trailer');
        const teaser = response.results.find(item => item.type === 'Teaser');
        setTrailerKey(trailer ? trailer.key : teaser.key);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  fetchVideo(movie.id);

  // check video to render trailer or backdrop
  let video;
  if (trailerKey) {
    video = (
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}`}
        width='100%'
        height='100%'
        title={`nmj`}
        className='detail-video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    );
  } else {
    video = (
      <img
        src={`${apiConfig.originalImage(
          movie.backdrop_path || movie.poster_path
        )}`}
        alt={movie.name || movie.title || ''}
      />
    );
  }

  return <div id='detail'></div>;
};

export default MovieDetail;
