import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import tmdbApi from '../../api/tmdbApi';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dataActions } from '../../store/data';

function Browse() {
  const dispatch = useDispatch();
  const data = useLoaderData();

  useEffect(() => {
    dispatch(dataActions.SET_DATA(data));
  }, [data, dispatch]);
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <MovieList />
      <MovieDetail />
    </div>
  );
}

export default Browse;
export async function loader({ request, params }) {
  const response = await tmdbApi.getMovie('fetchNetflixOriginals');
  return response.results;
}
