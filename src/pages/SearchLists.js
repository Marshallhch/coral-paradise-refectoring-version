import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchLists } from '../redux/searchSlice';

import Header from '../components/Header';

const SearchLists = () => {
  const dispatch = useDispatch();
  const { data: searchLists, status } = useSelector(
    (state) => state.searchLists
  );

  const { results } = searchLists;

  // console.log(searchLists);

  useEffect(() => {
    dispatch(getSearchLists());
  }, [dispatch]);

  if (status === 'loading' || results === undefined) {
    return (
      <div>
        <Header />
        <h1>SearchLists</h1>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>SearchLists</h1>
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchLists;
