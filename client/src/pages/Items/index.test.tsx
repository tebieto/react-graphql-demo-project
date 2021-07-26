import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Items from '.';

it('renders correctly', () => {
  const tree = mount(<Items />);
  expect(toJson(tree)).toMatchSnapshot();
});
