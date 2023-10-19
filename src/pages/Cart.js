import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';

import { CartListsSection } from '../styles/CartListsSection.style';
import Container from '../styles/Container.styled';

const Cart = () => {
  const cartLists = useSelector((state) => state.cart);
  return (
    <div>
      <Header />
      <CartListsSection className="section">
        <Container>
          <div className="cart-lists">
            {cartLists.map((result) => (
              <div className="cart-lists__item" key={result.id}>
                <div className="cart-item-gap">
                  <div className="cart-image-wrapper">
                    <img src={result.images[0]} alt="" />
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
        </Container>
      </CartListsSection>
    </div>
  );
};

export default Cart;
