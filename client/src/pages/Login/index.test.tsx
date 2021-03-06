import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResetPassword from '.';

it('renders correctly', () => {
  const tree = mount(<ResetPassword />);
  expect(toJson(tree)).toMatchSnapshot();
  expect(tree.contains('Reset Password')).toEqual(true);
});
