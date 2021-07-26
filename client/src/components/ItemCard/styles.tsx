import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const ItemCardContainer = styled(Card)`
  margin-bottom: 20px;
  h3 {
    margin: 0;
  }
  padding: 20px;

  .info {
    display: flex;
    margin-top: 5px;
    justify-content: space-between;
  }
`;
