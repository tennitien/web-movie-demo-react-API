import React, { Fragment, useState } from 'react';
import MovieItem from './MovieItem';
import MovieDetail from '../MovieDetail/MovieDetail';

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
  const [movie, setMovie] = useState(null);
  const [selected, setSelected] = useState(null);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [idCheck, setIdCheck] = useState(null);

  // Find movie Click + show/hide MovieDetail (by movie.id)
  const selectMovie = movie => {
    if (idCheck !== movie.id) {
      setIsShowDetail(true);
      setMovie(movie);
      setIdCheck(movie.id);
    }
    if (idCheck === movie.id) setIsShowDetail(pre => !pre);
  };

  // find List contain item onClick
  const selectElement = element => {
    let select = document.querySelector(`#movieDetail.${element}`);
    select = select.classList[0];

    setSelected(select);
  };

  return (
    <>
      <div className='movieList'>
        {movieList.map((movie, i) => {
          return (
            <Fragment key={i}>
              <MovieItem
                movieItem={movie}
                selectMovie={selectMovie}
                selectElement={selectElement}
              />
              <div
                id='movieDetail'
                className={`${movie.className} container `}
              ></div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
