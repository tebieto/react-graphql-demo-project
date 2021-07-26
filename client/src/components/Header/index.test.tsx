import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '.';

it('renders correctly', () => {
  const tree = shallow(<Header query="test" />);
  expect(toJson(tree)).toMatchSnapshot();
});
