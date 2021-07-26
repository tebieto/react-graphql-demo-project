import { Dialog } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const AddItemContainer = styled(Dialog)`
  .close {
    cursor: pointer;
    margin-right: 30px;
    color: ${colors.primaryButtonColor};
  }
`;
