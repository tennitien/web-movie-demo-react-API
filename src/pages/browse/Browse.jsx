import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';

function Browse() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <MovieList />
    </div>
  );
}

export default Browse;
