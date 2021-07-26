import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from '.';

it('renders correctly', () => {
  const tree = shallow(<Logo />);
  expect(toJson(tree)).toMatchSnapshot();
});
