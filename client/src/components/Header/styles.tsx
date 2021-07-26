import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderContainer = styled(AppBar)`
  display: flex !important;
  padding: 15px 200px;
  @media screen and (max-width: 800px) {
    padding: 15px 10px;
    justify-content: space-between;
  }
  z-index: 1 !important;
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
