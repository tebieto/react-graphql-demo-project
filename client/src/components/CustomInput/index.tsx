import React from 'react';
import { CustomKeyValueObject } from '../../interface';
import { CustomInputContainer } from './styles';

interface CustomInputProps {
  setFields: { (params: CustomKeyValueObject): void };
  fields: CustomKeyValueObject;
  placeholder?: string;
  type?: string;
  name: string;
  value: string | number;
  size?: 'small' | 'medium' | undefined;
  onKeyDown?: { (e: React.KeyboardEvent<HTMLDivElement>): void };
}

const CustomInput = ({
  setFields,
  fields,
  ...otherProps
}: CustomInputProps): JSX.Element => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFields({ ...fields, [name]: value });
    },
    [fields],
  );
  return (
    <CustomInputContainer
      variant="outlined"
      fullWidth
      {...otherProps}
      onChange={handleChange}
    />
  );
};

export default React.memo(CustomInput);
