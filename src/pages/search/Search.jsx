import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ResultList from '../../components/ResultList/ResultList';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
const Search = () => {
  return (
    <div className='search' id='search'>
      <Navbar />
      <ResultList />
      <MovieDetail />
    </div>
  );
};

export default Search;
