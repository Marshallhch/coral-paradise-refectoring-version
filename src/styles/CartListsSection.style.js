import { styled } from 'styled-components';

export const CartListsSection = styled.section`
  width: 100%;
  height: auto;

  .cart-lists {
    width: 100%;
    height: auto;
    display: flex;
    row-gap: 0.5rem;
    flex-wrap: wrap;

    .cart-lists__item {
      width: 25%;
      padding: 0.5rem;

      .cart-item-gap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 0 10px #ccc;
        padding: 0.5rem;

        .cart-image-wrapper {
          width: 100%;
          height: 250px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          overflow: hidden;
          position: relative;

          img {
            height: 100%;
            object-fit: cover;
            width: auto;
            max-width: 100%;
          }
        }
      }
    }
  }
`;
