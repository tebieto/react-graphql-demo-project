import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorBoundary from '.';

it('renders correctly', () => {
  const tree = shallow(
    <ErrorBoundary>
      <div>Test</div>
    </ErrorBoundary>,
  );
  expect(toJson(tree)).toMatchSnapshot();
});
