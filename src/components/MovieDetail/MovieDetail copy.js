// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<api_key>
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

import './MovieDetail.scss';

export default function MovieDetail({ movie, classOpen }) {
  const [trailerKey, setTrailerKey] = useState(null);

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

  return (
    <>
      <header>
        <nav id='navbar' className='navbar'>
          <div className='nav-link container flex-center'>
            {/* <Link to='/' className='header-navbar'>
            Movie App
          </Link>

          <Link to='/search'>
            <FaSearch className='icon' />
          </Link> */}
            lore
          </div>
        </nav>
      </header>
    </>
  );
}
