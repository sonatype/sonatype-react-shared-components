/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {act} from 'react-dom/test-utils';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxModal, {Props, NxModalContext} from '../NxModal';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxButton from '../../NxButton/NxButton';
import { Tooltip } from '@material-ui/core';

describe('NxModal', function() {
  const dummyCloseHandler = jest.fn();
  const minimalProps: Props = {
    children: 'A message to show in a modal',
    onClose: dummyCloseHandler
  };

  const getShallow = getShallowComponent(NxModal, minimalProps),
      getModal = (props?: Partial<Props>) => getShallow(props).children();

  it('renders a context provider around an nx-modal-backdrop <dialog> containing an nx-modal <div>', function () {
    const contextProvider = getShallow(),
        nxModal = contextProvider.children();

    expect(contextProvider).toMatchSelector(NxModalContext.Provider);
    expect(nxModal).toMatchSelector('dialog.nx-modal-backdrop');
    expect(nxModal.children()).toMatchSelector('div.nx-modal');
  });

  it('renders children nodes within the modal', function() {
    const nxModal = getModal({ children: <div className="bar"/> });

    expect(nxModal.find('.nx-modal')).toContainMatchingElement('div.bar');
  });

  it('merges any passed in className to the nx-modal div', function() {
    const nxModal = getModal({ className: 'test' });

    const nxModalDiv = nxModal.find('.nx-modal');
    expect(nxModalDiv).toHaveClassName('test');
  });

  it('includes any passed in attributes to the nx-modal div', function() {
    const nxModal = getModal({ id: 'modal-id', lang: 'en_US' });

    expect(nxModal.find('.nx-modal').prop('id')).toEqual('modal-id');
    expect(nxModal.find('.nx-modal').prop('lang')).toEqual('en_US');
  });

  it('sets the dialog role on the backdrop by default', function() {
    expect(getModal()).toHaveProp('role', 'dialog');
  });

  it('sets the specified role on the backdrop', function() {
    expect(getModal({ role: 'asdf' })).toHaveProp('role', 'asdf');
  });

  it('adds the nx-modal--wide class when the wide variant is specified', function() {
    const nxModal = getModal({ variant: 'wide' });

    expect(nxModal.find('.nx-modal')).toHaveClassName('nx-modal--wide');
  });

  it('adds the nx-modal--narrow class when the narrow variant is specified', function() {
    const nxModal = getModal({ variant: 'narrow' });

    expect(nxModal.find('.nx-modal')).toHaveClassName('nx-modal--narrow');
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

    it('executes onClose method when pressing ESC key on IE11', function () {
      const mockCallBack = jest.fn();
      const nxModal = <NxModal id="first-modal-id" onClose={mockCallBack}/>;

      act(() => {
        mount(nxModal, {attachTo: containerMainModal});
      });

      const ieEscapeKey = 'Esc';
      document.dispatchEvent(new KeyboardEvent('keydown', {key: ieEscapeKey}));
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

    it('executes only the most recent onClose callback if it has been updated', function() {
      const mockCallBack1 = jest.fn(),
          mockCallBack2 = jest.fn();

      let nxModal: ReactWrapper;

      act(() => {
        nxModal = mount(<NxModal id="first-modal-id" onClose={mockCallBack1}/>, {attachTo: containerMainModal});
      });

      act(() => {
        nxModal.setProps({ onClose: mockCallBack2 });
      });

      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(mockCallBack2).toHaveBeenCalledTimes(1);
      expect(mockCallBack1).not.toHaveBeenCalled();
    });
  });

  it('renders descendant tooltips attached to the backdrop rather than the document body', function() {
    const nxModal = mount(
      <NxModal onClose={() => {}}>
        <div id="test-div">
          <NxTooltip title="foo">
            <NxButton>Foo</NxButton>
          </NxTooltip>
        </div>
      </NxModal>
    );

    const tooltip = nxModal.find(Tooltip).at(0);

    expect(tooltip.prop('PopperProps')!.container).toBe(nxModal.getDOMNode());
  });
});
