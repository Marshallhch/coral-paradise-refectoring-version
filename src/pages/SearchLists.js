import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchLists } from '../redux/searchSlice';
import { add, remove } from '../redux/cartSlice';

import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

import { SearchListsSection } from '../styles/SearchListsSection.styled';

// import Button from '../components/Button';
import Container from '../styles/Container.styled';

import Header from '../components/Header';

const SearchLists = () => {
  const dispatch = useDispatch();
  const { data: searchLists, status } = useSelector(
    (state) => state.searchLists
  );

  const { results } = searchLists;
  const [visibleResults, setVisibleResults] = useState(8);
  const [isHearted, setIsHearted] = useState({});

  // console.log(results);

  useEffect(() => {
    dispatch(getSearchLists());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 8);
  };

  const toggleHeart = (location) => {
    setIsHearted({
      ...isHearted,
      [location.name]: !isHearted[location.name],
    });

    if (!isHearted[location.name]) {
      addToCart(location);
    } else {
      removeFromCart(location.name);
    }
  };

  const addToCart = (location) => {
    dispatch(add(location));
  };

  const removeFromCart = (name) => {
    // dispatch action to remove product from cart
    dispatch(remove({ name }));
  };

  if (status === 'loading' || results === undefined) {
    return (
      <div>
        <Header />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <SearchListsSection className="section">
        <Container>
          <div className="search-lists">
            {results.slice(0, visibleResults).map((result) => (
              <div className="search-lists__item" key={result.id}>
                <div className="item-gap">
                  <div className="image-wrapper">
                    <img src={result.images[0]} alt="" />
                    {/* heart icon */}
                    <div
                      className="heart-icon"
                      onClick={() => toggleHeart(result)}>
                      {/* {console.log(rating, name, images[0], address)} */}
                      {isHearted[result.name] ? (
                        <RiHeartFill />
                      ) : (
                        <RiHeartLine />
                      )}
                    </div>
                  </div>

                  <div className="search-lists__item__info">
                    <h3>
                      {result.name.length > 10
                        ? result.name.slice(0, 10) + '...'
                        : result.name}
                    </h3>
                    <p>침대 {result.beds}개</p>
                    <p>
                      <span>
                        {result.price.currency}
                        {result.price.priceItems[0].amount} / 박
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleResults < results.length && (
            <div className="load-more">
              <button type="button" onClick={handleLoadMore}>
                더보기
              </button>
            </div>
          )}
        </Container>
      </SearchListsSection>
    </div>
  );
};

export default SearchLists;
