import React, { Fragment, useState } from 'react';
import MovieItem from './MovieItem';
import MovieDetail from '../MovieDetail/MovieDetail';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions, popupSelector } from '../../store/popup';

const movieList = [
  {
    title: 'Original',
    className: 'original',
    endpoint: 'fetchNetflixOriginals',
    imgType: 'poster_path',
  },
  {
    title: 'Xu hướng',
    className: 'trending',
    endpoint: 'fetchTrending',
    imgType: 'backdrop_path',
  },
  {
    title: 'Xếp hạng cao',
    className: 'topRated',
    endpoint: 'fetchTopRated',
    imgType: 'backdrop_path',
  },
  {
    title: 'Hành động',
    className: 'action',
    endpoint: 'fetchActionMovies',
    imgType: 'backdrop_path',
  },
  {
    title: 'Hài',
    className: 'comedy',
    endpoint: 'fetchComedyMovies',
    imgType: 'backdrop_path',
  },
  {
    title: 'Kinh dị',
    className: 'horror',
    endpoint: 'fetchHorrorMovies',
    imgType: 'backdrop_path',
  },
  {
    title: 'Lãng mạn',
    className: 'romance',
    endpoint: 'fetchRomanceMovies',
    imgType: 'backdrop_path',
  },
  {
    title: 'Tài liệu',
    className: 'document',
    endpoint: 'fetchDocumentaries',
    imgType: 'backdrop_path',
  },
];

export default function MovieList() {
  const dispatch = useDispatch();
  const open = useSelector(popupSelector.isOpen);
  const getIdOnClick = id => {
    dispatch(popupActions.OPEN_POPUP(id));
  };
  return (
    <>
      <div className='movieList'>
        {movieList.map((movie, i) => (
          <Fragment key={i}>
            <MovieItem movieItem={movie} getIdOnClick={getIdOnClick} />
          </Fragment>
        ))}
      </div>
    </>
  );
}
