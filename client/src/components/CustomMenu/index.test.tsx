import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomMenu from '.';

it('renders correctly', () => {
  const tree = shallow(<CustomMenu />);
  expect(toJson(tree)).toMatchSnapshot();
});
