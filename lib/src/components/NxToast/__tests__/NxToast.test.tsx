/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { fireEvent, screen } from '@testing-library/react';

import { userEvent } from '../../../__testutils__/rtlUtils';

import NxToast from '../NxToast';
import { NxToastProps } from '../types';

import NxAlert from '../../NxAlert/NxAlert';
import { faEye } from '@fortawesome/free-solid-svg-icons';

describe('NxToast', function() {
  const simpleProps: NxToastProps = {
    onClose: () => {},
    children: <NxAlert icon={faEye}>Toast Message</NxAlert>
  };

  const quickRender = rtlRender(NxToast, simpleProps),
      renderEl = rtlRenderElement(NxToast, simpleProps);

  it('contains an alert with the child NxAlert\'s message', function() {
    quickRender();

    const alert = screen.getByText('Toast Message');

    expect(alert).toBeInTheDocument();
  });

  it('sets specified ClassNames and attributes on the top-level element', function() {
    const component = renderEl()!;
    const customizedComponent = renderEl({ className: 'foo', id: 'bar', lang: 'en' })!;

    expect(customizedComponent).toHaveClass('foo');
    expect(customizedComponent).toHaveAttribute('id', 'bar');
    expect(customizedComponent).toHaveAttribute('lang', 'en');

    for (const cls of Array.from(component.classList)) {
      expect(customizedComponent).toHaveClass(cls);
    }
  });

  it('sets the focus to its close button when initially rendered', function() {
    const { container } = quickRender()!;

    const closeBtn = screen.getByRole('button', {name: 'Close'});
    const toast = container.querySelector('.nx-toast')!;

    fireEvent.animationEnd(toast);

    expect(closeBtn).toHaveFocus();
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
