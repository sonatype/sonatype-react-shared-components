/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {mount, shallow} from 'enzyme';
import 'jest-enzyme';

import { getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxModal, { Props } from '../NxModal';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxButton from '../../NxButton/NxButton';
import { Tooltip } from '@material-ui/core';
import { runTimers } from '../../../__testutils__/rtlUtils';

describe('NxModal', function() {
  const dummyCloseHandler = jest.fn();
  const minimalProps: Props = {
    children: 'A message to show in a modal',
    onClose: dummyCloseHandler
  };

  const getMounted = getMountedComponent<Props>(NxModal, minimalProps),
      getModal = (props?: Partial<Props>) => getMounted(props).find('dialog');

  it('renders an nx-modal-backdrop <dialog> containing an nx-modal <div>', function () {
    const nxModal = getModal();

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

  it('fowards a ref to the dialog', function() {
    const ref = React.createRef<HTMLDialogElement>(),
        component = mount(<><NxModal { ...minimalProps } ref={ref} /></>);

    expect(component.getDOMNode()).toBe(ref.current);
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

    beforeEach(function () {
      // Rendering containerMainModal for the component in test.
      containerMainModal = document.createElement('div');

      document.body.appendChild(containerMainModal);
    });

    afterEach(function () {
      if (containerMainModal) {
        document.body.removeChild(containerMainModal);
        containerMainModal = null;
      }
    });

    const createEvent = (key = 'Escape') => ({
      key,
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    });

    it('executes onClose method with a cancel event when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getModal({ onClose: mockCallBack });

      expect(mockCallBack).not.toHaveBeenCalled();
      component.simulate('keyDown', createEvent());
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method with a cancel event when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getModal({ onCancel: mockCallBack });

      expect(mockCallBack).not.toHaveBeenCalled();
      component.simulate('keyDown', createEvent());
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onClose method ONLY when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getModal({ onClose: mockCallBack });

      component.simulate('keyDown', createEvent('Tab'));
      component.simulate('keyDown', createEvent('Enter'));
      component.simulate('keyDown', createEvent('q'));
      component.simulate('keyDown', createEvent('Q'));
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel method ONLY when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const component = getModal({ onCancel: mockCallBack });

      component.simulate('keyDown', createEvent('Tab'));
      component.simulate('keyDown', createEvent('Enter'));
      component.simulate('keyDown', createEvent('q'));
      component.simulate('keyDown', createEvent('Q'));
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', function() {
      const component = getModal({ onClose: jest.fn() }),
          escEvent = createEvent(),
          otherEvent = createEvent('q');

      component.simulate('keyDown', escEvent);
      component.simulate('keyDown', otherEvent);

      expect(escEvent.stopPropagation).toHaveBeenCalled();
      expect(escEvent.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();

      expect(otherEvent.stopPropagation).not.toHaveBeenCalled();
      expect(otherEvent.nativeEvent.stopImmediatePropagation).not.toHaveBeenCalled();
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

  it('moves focus back to the previously focused element when closed', async function() {
    function Fixture({ modalOpen }: { modalOpen: boolean }) {
      return (
        <>
          <button id="test-btn">Test</button>
          { modalOpen && <NxModal onCancel={jest.fn()}><button id="cancel-btn">Close</button></NxModal> }
        </>
      );
    }

    const container = document.createElement('div');
    document.body.append(container);

    const component = mount(<Fixture modalOpen={false} />, { attachTo: container }),
        externalBtn = component.find('#test-btn').getDOMNode() as HTMLElement;

    externalBtn.focus();
    expect(component).not.toContainMatchingElement(NxModal);
    expect(document.activeElement === externalBtn).toBe(true);

    component.setProps({ modalOpen: true });
    expect(component).toContainMatchingElement(NxModal);
    expect(document.activeElement === component.find(NxModal).getDOMNode()).toBe(true);

    component.setProps({ modalOpen: false });
    expect(component).not.toContainMatchingElement(NxModal);

    // The focus is moved asynchronously
    await runTimers();

    expect(document.activeElement === externalBtn).toBe(true);
  });
});

describe('NxModal.Header', function() {
  it('makes a <header> tag with the nx-modal-header class', function() {
    expect(shallow(<NxModal.Header/>)).toMatchSelector('header.nx-modal-header');
  });
});

describe('NxModal.Content', function() {
  it('makes a <div> tag with the nx-modal-content class', function() {
    expect(shallow(<NxModal.Content/>)).toMatchSelector('div.nx-modal-content');
  });
});
