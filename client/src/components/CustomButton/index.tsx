import React from 'react';
import { CustomButtonContainer } from './styles';

interface CustomButtonProps {
  children: string;
  onClick: { (): void };
}
const CustomButton = (props: CustomButtonProps): JSX.Element => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
