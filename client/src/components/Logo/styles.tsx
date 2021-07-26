import styled from 'styled-components';

export const LogoContainer = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo {
      height: 50px;

      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }
`;
