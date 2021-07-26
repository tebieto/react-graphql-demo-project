import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '.';

it('renders correctly', () => {
  const tree = mount(<Login />);
  expect(toJson(tree)).toMatchSnapshot();
  expect(tree.contains('Login to Github')).toEqual(true);
});
