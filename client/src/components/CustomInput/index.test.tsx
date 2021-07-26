import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomInput from '.';

it('renders correctly', () => {
  const onChange = () => null;
  const tree = shallow(<CustomInput value="Test" onChange={onChange} />);
  expect(toJson(tree)).toMatchSnapshot();
});
