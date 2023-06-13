import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './MovieDetail.scss';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useSelector } from 'react-redux';
import { popupSelector } from '../../store/popup';

const MovieDetail = () => {
  const isOpen = useSelector(popupSelector.isOpen);
  const id = useSelector(popupSelector.id);
  const [trailerKey, setTrailerKey] = useState(null);
  if (!isOpen) return null;
  // // Check movie
  // if (!movie) return null;

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
  fetchVideo(id);

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
          movie?.backdrop_path || movie?.poster_path
        )}`}
        alt={movie?.name || movie?.title || ''}
      />
    );
  }

  return ReactDom.createPortal(
    <div id='detail'>
      <div className='detialMovie'>
        <h2 className='detail-text__title'>{movie?.name || movie?.title}</h2>
        <hr className='mb-1 mt-1'></hr>
        <p className='large'>
          <strong>
            Release Date:
            {movie?.release_date || movie?.first_air_date}
          </strong>
        </p>
        <p className='large'>
          <strong>Vote: {movie?.vote_average}/10</strong>
        </p>
        <p className='mt-2'>{movie?.overview}</p>

        <div className='detail-video'>{video}</div>
      </div>
    </div>,
    document.getElementById('popup')
  );
};

export default MovieDetail;
