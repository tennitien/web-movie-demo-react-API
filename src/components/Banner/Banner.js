import React from 'react';

import Button from '../UI/Button/Button';
import apiConfig from '../../api/apiConfig';

import { useSelector } from 'react-redux';
import { dataSelector } from '../../store/data';

import './Banner.scss';

export default function Banner() {
  const data = useSelector(dataSelector.data);
  const moviesBackdrop = data.filter(item => item.backdrop_path);
  const random = Math.floor(Math.random() * moviesBackdrop.length - 1);
  const movieRandom = moviesBackdrop[random];
  return (
    <>
      <div
        className='banner'
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            movieRandom?.backdrop_path
          )})`,
        }}
      >
        <div className='container'>
          <div className='banner-text'>
            <h2 className='name'>
              {movieRandom?.name || movieRandom?.title || ''}
            </h2>
            <Button className='btn-white mr-1'>Play</Button>
            <Button className='btn-white '>My List</Button>
            <p className='overview mt-1'>{movieRandom?.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
