/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { fireEvent, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import NxToast from '../NxToast';
import { NxToastProps } from '../types';
import { NxErrorAlert } from '../../NxAlert/NxAlert';

describe('NxToast', function() {
  const simpleProps: NxToastProps = {
    onClose: () => {},
    children: <NxErrorAlert>Toast Message</NxErrorAlert>
  };

  const quickRender = rtlRender(NxToast, simpleProps),
      renderEl = rtlRenderElement(NxToast, simpleProps);

  it('renders a div with a class .nx-toast', function() {
    const component = quickRender();
    const toast = component.container.children[0];

    expect(toast.nodeName).toEqual('DIV');
    expect(toast).toHaveClass('nx-toast');
  });

  it('contains an alert with the child NxAlert\'s message', function() {
    quickRender();

    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Toast Message');
  });

  it('adds a class specified with the className prop', function() {
    const component = renderEl({ className: 'foo' });

    expect(component).toHaveClass('foo');
    expect(component).toHaveClass('nx-toast');
  });

  it('calls the onClose function when the close button is clicked', async function() {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const toast = renderEl({ onClose });
    const closeBtn = screen.getByRole('button', {name: 'Close'});

    expect(onClose).not.toHaveBeenCalled();
    await user.click(closeBtn);
    fireEvent.animationEnd(toast as Element);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose function when close button is in focus and Enter key is pressed', async function() {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const toast = renderEl({ onClose });
    const closeBtn = screen.getByRole('button', {name: 'Close'});

    expect(onClose).not.toHaveBeenCalled();
    await closeBtn.focus();
    await user.keyboard('{Enter}');
    fireEvent.animationEnd(toast as Element);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

});
