import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import tmdbApi from '../../api/tmdbApi';

import { FaSearch } from 'react-icons/fa';
import './SearchForm.scss';

const SearchForm = props => {
  const [enterInput, setEnterInput] = useState('');

  // get input
  const inputChangeHandler = e => setEnterInput(e.target.value);

  // button Reset
  const resetHandler = () => setEnterInput('');

  // call API
  const fetchMovies = async e => {
    e.preventDefault();
    const response = await tmdbApi.getSearch(enterInput);
    const data = response.results;
    props.onSaveSearch(data);
  };

  return (
    <div className='searchForm container'>
      <form className='form' onSubmit={fetchMovies}>
        <input
          className='form-input'
          type='text'
          required
          onChange={inputChangeHandler}
          value={enterInput}
          placeholder='Enter search'
        />
        <Button className='icon' type='submit'>
          <FaSearch aria-hidden='true' />
        </Button>
        <div className='form-action'>
          <Button
            className='btn-transparent'
            type='submit'
            onClick={resetHandler}
          >
            RESET
          </Button>
          <Button className='btn-green' type='submit'>
            SEARCH
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
