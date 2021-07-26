import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Title from '.';

it('renders correctly', () => {
  const tree = shallow(<Title title="" />);
  expect(toJson(tree)).toMatchSnapshot();
});
