import React, { Fragment } from 'react';
import MovieItem from './MovieItem';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../store/popup';

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
  const getMovieOnClick = movie => {
    dispatch(popupActions.OPEN_POPUP(movie));
  };
  return (
    <>
      <div className='movieList'>
        {movieList.map((movie, i) => (
          <Fragment key={i}>
            <MovieItem movieItem={movie} getMovieOnClick={getMovieOnClick} />
          </Fragment>
        ))}
      </div>
    </>
  );
}
