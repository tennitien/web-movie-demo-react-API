import React from 'react';
import apiConfig from '../../api/apiConfig';
export default function ResultItem({ row, itemResult, selectMovie }) {
  return (
    <>
      <div id={row} className='row'>
        {itemResult.map(item => (
          <div
            id={item.id}
            className='resultItem'
            key={item.id}
            onClick={() => selectMovie(item)}
          >
            <img
              src={apiConfig.w500Image(item.poster_path)}
              alt={item.name || item.title || ''}
            />
          </div>
        ))}
      </div>
    </>
  );
}
