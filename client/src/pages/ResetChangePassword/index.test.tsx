import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResetChangePassword from '.';

it('renders correctly', () => {
  const tree = mount(<ResetChangePassword />);
  expect(toJson(tree)).toMatchSnapshot();
  expect(tree.contains('Change Password')).toEqual(true);
});
