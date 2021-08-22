import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import Modal from '../index';

describe('Modal component', () => {
  const modalRoot = window.document.createElement('div');
  const body = window.document.querySelector('body');
  modalRoot.setAttribute('id', 'modal');

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ReactDOM.createPortal = jest.fn((element: any) => element);
  });

  beforeEach(() => {
    body?.appendChild(modalRoot);
  });

  afterEach(() => {
    body?.removeChild(modalRoot);
  });

  test('should render Modal component by default', () => {
    const component = create(
      <Modal isOpen={true} onClose={() => undefined}>
        Modal content
      </Modal>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Modal component with value of isOpen is false  ', () => {
    const component = create(
      <Modal isOpen={false} onClose={() => undefined}>
        Modal content
      </Modal>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onClose method', () => {
    const handleOnClose = jest.fn();
    const component = create(
      <Modal isOpen={true} onClose={handleOnClose}>
        Modal content
      </Modal>
    );

    component.root.props.onClose();

    expect(handleOnClose).toHaveBeenCalled();
  });
});
