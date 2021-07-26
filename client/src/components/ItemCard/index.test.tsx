import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemCard from '.';

it('renders correctly', () => {
  const tree = mount(<ItemCard />);
  expect(toJson(tree)).toMatchSnapshot();
});
