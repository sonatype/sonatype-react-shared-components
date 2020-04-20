/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {mount, shallow} from 'enzyme';
import {act} from 'react-dom/test-utils';

import NxModal, {Props} from '../NxModal';
import {CloseHandler} from '../types';

describe('NxModal', function() {
  const dummyCloseHandler: CloseHandler = () => {};
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
    let container: HTMLDivElement | null;

    it('executes onClose method when pressing ESC key', function () {
      const mockCallBack = jest.fn();
      const nxModal = (
        <div>
          <NxModal id="modal-id" onClose={mockCallBack}/>
        </div>
      );

      act(() => {
        mount(nxModal, {attachTo: container});
      });

      document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
      expect(mockCallBack).toHaveBeenCalled();
    });

    beforeEach(function () {
      // Rendering container for the component in test.
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(function () {
      if (container) {
        document.body.removeChild(container);
        container = null;
      }
    });
  });
});
