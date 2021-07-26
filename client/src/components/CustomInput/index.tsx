import React from 'react';
import { CustomInputContainer } from './styles';

interface CustomInputProps {
  onChange: { (e: React.ChangeEvent<HTMLInputElement>): void };
  placeholder?: string;
  type?: string;
  value?: string;
  size?: 'small' | 'medium' | undefined;
  onKeyDown?: { (e: React.KeyboardEvent<HTMLDivElement>): void };
}

const CustomInput = (props: CustomInputProps): JSX.Element => {
  return <CustomInputContainer variant="outlined" fullWidth {...props} />;
};

export default CustomInput;
