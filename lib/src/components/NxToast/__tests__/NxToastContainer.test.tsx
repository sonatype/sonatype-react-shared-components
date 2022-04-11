/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxToast from '../NxToast';

import NxToastContainer from '../NxToastContainer';
import { NxToastContainerProps } from '../types';

describe('NxToastContainer', function() {
  const simpleProps: NxToastContainerProps = {
        toasts: [],
        isCentered: false
      },
      getShallow = getShallowComponent<NxToastContainerProps>(NxToastContainer, simpleProps);

  it('renders a <div> with a .nx-toast__container class', function() {
    const nxToastContainer = getShallow();
    expect(nxToastContainer.find('div.nx-toast__container')).toExist();
    expect(nxToastContainer).toContainExactlyOneMatchingElement('div.nx-toast__container');
  });

  it('renders a <div> with a .nx-toast__container.centered class if isCentered prop is provided', function() {
    const nxToastContainer = getShallow({ ...simpleProps, isCentered: true});
    expect(nxToastContainer.find('div.nx-toast__container.centered')).toExist();
    expect(nxToastContainer).toContainExactlyOneMatchingElement('div.nx-toast__container.centered');
  });

  it('doesn\'t render a toast if toasts array is empty', function() {
    const nxToastContainer = getShallow();
    expect(nxToastContainer).not.toContain(NxToast);
  });

  it('renders a toast if toasts array is not empty', function() {
    const nxToastContainer = getShallow({
      toasts: [{toastId: 1, type: 'error', message: 'test'}]
    });
    expect(nxToastContainer).toExist();
    expect(nxToastContainer.find(NxToast)).toExist();
    expect(nxToastContainer).toContainExactlyOneMatchingElement(NxToast);
  });

  it('renders multiple toasts if toasts array has multiple elements', function() {
    const nxToastContainer = getShallow({
      toasts: [
        {toastId: 1, type: 'error', message: 'error test'},
        {toastId: 2, type: 'success', message: 'success test'}
      ]
    });
    expect(nxToastContainer).toExist();
    expect(nxToastContainer).toContainMatchingElements(2, NxToast);
  });

  it('renders toasts ordered based on toastId in descending order', function() {
    const nxToastContainer = getShallow({
      toasts: [
        {toastId: 1, type: 'error', message: 'error test'},
        {toastId: 2, type: 'success', message: 'success test'},
        {toastId: 3, type: 'warning', message: 'warning test'},
        {toastId: 4, type: 'info', message: 'info test'}
      ]
    });
    expect(nxToastContainer).toExist();
    expect(nxToastContainer).toContainMatchingElements(4, NxToast);
    expect(nxToastContainer.find('.nx-toast__container').childAt(0)).toHaveProp('toastId', 4);
    expect(nxToastContainer.find('.nx-toast__container').childAt(1)).toHaveProp('toastId', 3);
    expect(nxToastContainer.find('.nx-toast__container').childAt(2)).toHaveProp('toastId', 2);
    expect(nxToastContainer.find('.nx-toast__container').childAt(3)).toHaveProp('toastId', 1);
  });

});
