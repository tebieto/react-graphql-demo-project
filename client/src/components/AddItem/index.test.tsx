import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddItem from '.';

it('renders correctly', () => {
  const tree = mount(<AddItem handleClose={() => null} open={true} />);
  expect(toJson(tree)).toMatchSnapshot();
});
