import styled from 'styled-components';

export const ItemsContaier = styled.div`
  .main {
    margin: 50px auto;
    width: 90vw;
    max-width: 500px;
    align-self: center;
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        height: 40px !important;
      }
    }
    .items {
      margin-top: 20px;
    }
  }
`;
