import React, { Fragment, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import ResultItem from './ResultItem';

import './ResultList.scss';
import { useDispatch } from 'react-redux';
import { popupActions } from '../../store/popup';

function ResultList(props) {
  const [results, setResults] = useState([]);
  const [row, setRow] = useState();
  const [movie, setMovie] = useState(null);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [idCheck, setIdCheck] = useState(null);
  const dispatch = useDispatch();
  // Get data from SearchForm
  const onSaveSearch = data => {
    const dataFilter = data.filter(item => item.poster_path);
    setResults(dataFilter);
  };

  // Find movie Click + show/hide MovieDetail (by movie.id)
  const getMovieOnClick = movie => {
    dispatch(popupActions.OPEN_POPUP(movie));
  };

  // Create a new array, each array contains 5 items
  let content = [];
  let j = 0;
  for (let i = 0; i < results.length; i += 6) {
    content.push({
      row: `row-item-${j}`,
      items: results.slice(i, i + 5),
    });
    j++;
  }
  return (
    <>
      <SearchForm onSaveSearch={onSaveSearch} />
      <div className='resultList container mt-3'>
        {content.length ? (
          content.map((item, index) => {
            return (
              <Fragment key={index}>
                <ResultItem
                  row={item.row}
                  itemResult={item.items}
                  getMovieOnClick={getMovieOnClick}
                />
                <div id='movieDetail' className={`${item.row} container`}></div>
              </Fragment>
            );
          })
        ) : (
          <p>No film available</p>
        )}
      </div>
    </>
  );
}

export default ResultList;
