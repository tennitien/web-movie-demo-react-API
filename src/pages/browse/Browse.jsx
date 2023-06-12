import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

function Browse() {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      {/* <Banner /> */}
      {/* <MovieList /> */}
      <MovieDetail />
    </div>
  );
}

export default Browse;
