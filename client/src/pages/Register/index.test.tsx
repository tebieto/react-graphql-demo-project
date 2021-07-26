import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Register from '.';

it('renders correctly', () => {
  const tree = mount(<Register />);
  expect(toJson(tree)).toMatchSnapshot();
  expect(tree.contains('Register')).toEqual(true);
});
