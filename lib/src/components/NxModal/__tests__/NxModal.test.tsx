/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {act} from 'react-dom/test-utils';

import NxModal, {Props} from '../NxModal';

describe('NxModal', function() {
  const dummyCloseHandler = jest.fn();
  const minimalProps: Props = {
    children: 'A message to show in a modal',
    onClose: dummyCloseHandler
  };

  it('renders divs with nx-modal and nx-modal-backdrop', function () {
    const nxModal = shallow(
      <NxModal { ...minimalProps } />
    );
    expect(nxModal.find('.nx-modal')).toExist();
    expect(nxModal.find('.nx-modal-backdrop')).toExist();
  });

  it('renders children nodes', function() {
    const nxModal = shallow(
      <NxModal { ...minimalProps }>
        <div className="bar"></div>
      </NxModal>
    );

    expect(nxModal).toContainMatchingElement('div.bar');
  });

  it('merges any passed in className to the nx-modal div', function() {
    const nxModal = shallow(
      <NxModal className="test" onClose={dummyCloseHandler}/>
    );
    const nxModalDiv = nxModal.find('.nx-modal');
    expect(nxModalDiv.hasClass('test')).toEqual(true);
  });

  it('includes any passed in attributes to the nx-modal div', function() {
    const nxModal = shallow(
      <NxModal id="modal-id" data-foo="bar" onClose={dummyCloseHandler}/>
    );
    expect(nxModal.find('.nx-modal').prop('id')).toEqual('modal-id');
    expect(nxModal.find('.nx-modal').prop('data-foo')).toEqual('bar');
  });

  describe('NxModal event listener support', () => {
    let containerMainModal: HTMLDivElement | null;
    let containerSecondaryModal: HTMLDivElement | null;

    beforeEach(function () {
      // Rendering containerMainModal for the component in test.
      containerMainModal = document.createElement('div');
      containerSecondaryModal = document.createElement('div');

      document.body.appendChild(containerMainModal);
      document.body.appendChild(containerSecondaryModal);
    });

    afterEach(function () {
      if (containerMainModal) {
        document.body.removeChild(containerMainModal);
        containerMainModal = null;
      }

      if (containerSecondaryModal) {
        document.body.removeChild(containerSecondaryModal);
        containerSecondaryModal = null;
      }
    });

    it('executes onClose method when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const nxModal = <NxModal id="first-modal-id" onClose={mockCallBack}/>;

      act(() => {
        mount(nxModal, {attachTo: containerMainModal});
      });

      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    it('executes onClose method ONLY when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const nxModal = <NxModal id="first-modal-id" onClose={mockCallBack}/>;

      act(() => {
        mount(nxModal, {attachTo: containerMainModal});
      });

      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Tab'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Enter'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'q'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Q'}));
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onClose method for each modal that has been opened, preserving order call', function () {
      const firstMockCallBack = jest.fn();
      const secondMockCallBack = jest.fn();
      const firstNxModal = <NxModal id="first-modal-id" onClose={firstMockCallBack}/>;
      const secondNxModal = <NxModal id="second-modal-id" onClose={secondMockCallBack}/>;

      let secondModalWrapper: ReactWrapper | null = null;
      let firstModalWrapper: ReactWrapper | null = null;
      act(() => {
        firstModalWrapper = mount(firstNxModal, {attachTo: containerMainModal});
        secondModalWrapper = mount(secondNxModal, {attachTo: containerSecondaryModal});
      });

      // "Close" the second modal
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(secondMockCallBack).toHaveBeenCalledTimes(1);
      expect(firstMockCallBack).not.toHaveBeenCalled();

      // Unmount and remount the modal to ensure listener order is preserved if new modals are opened
      act(() => {
        secondModalWrapper!.unmount();
        secondModalWrapper = mount(secondNxModal, {attachTo: containerSecondaryModal});
      });
      // "Close" the second modal again
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(secondMockCallBack).toHaveBeenCalledTimes(2);
      expect(firstMockCallBack).not.toHaveBeenCalled();

      // Unmount the second modal to remove it's listener from available listeners to execute
      act(() => {
        secondModalWrapper!.unmount();
      });
      // "Close" the first modal
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(secondMockCallBack).toHaveBeenCalledTimes(2);
      expect(firstMockCallBack).toHaveBeenCalledTimes(1);

      // Unmount the first modal to remove it's listener from available listeners to execute
      act(() => {
        firstModalWrapper!.unmount();
      });
      // Ensure there are no more calls to the registered close handlers with new keypresses
      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(secondMockCallBack).toHaveBeenCalledTimes(2);
      expect(firstMockCallBack).toHaveBeenCalledTimes(1);
    });

  });
});
