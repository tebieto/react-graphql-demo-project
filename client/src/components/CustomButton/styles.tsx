import { Button } from '@material-ui/core';
import styled from 'styled-components';

import colors from '../../utils/colors';

export const CustomButtonContainer = styled(Button)`
  background-color: ${colors.primaryButtonColor} !important;
  color: ${colors.primaryButtonTextColor} !important;
  height: 50px !important;
  padding: 10px 20px !important;
  font-weight: bold !important;
`;
