import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomButton from '.';

it('renders correctly', () => {
  const buttonText = 'Login';
  const onclick = () => null;
  const tree = shallow(
    <CustomButton onClick={onclick}>{buttonText}</CustomButton>,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
