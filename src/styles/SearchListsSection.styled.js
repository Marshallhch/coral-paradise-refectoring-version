import { styled } from 'styled-components';

export const SearchListsSection = styled.section`
  width: 100%;
  height: auto;

  .search-lists {
    width: 100%;
    height: auto;
    display: flex;
    row-gap: 0.5rem;
    flex-wrap: wrap;

    .search-lists__item {
      width: 25%;
      padding: 0.5rem;

      .item-gap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 0 10px #ccc;
        padding: 0.5rem;

        .image-wrapper {
          width: 100%;
          height: 250px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          overflow: hidden;
          position: relative;

          .heart-icon {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.point};
          }

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

  .load-more {
    width: 100%;
    height: auto;
    padding: 1.25rem;
    text-align: center;

    button {
      background: ${({ theme }) => theme.colors.point};
      color: #fff;
      display: inline-block;
      padding: 1rem 5rem;
      border-radius: 0.25rem;
    }
  }
`;
