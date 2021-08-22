import React from 'react';
import { create } from 'react-test-renderer';

import ErrorBoundary from '../index';

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>;
};

describe('ErrorBoundary component', () => {
  test('should render ErrorBoundary component without error', () => {
    const component = create(
      <ErrorBoundary>
        <div>Test children</div>
      </ErrorBoundary>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render ErrorBoundary component with error', () => {
    // ToDo fix error message in terminal during testing
    const component = create(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
