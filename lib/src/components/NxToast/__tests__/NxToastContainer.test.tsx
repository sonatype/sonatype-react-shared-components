/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NxToastContainer from '../NxToastContainer';
import { NxToastContainerProps } from '../types';
import NxToast from '../NxToast';

import NxAlert from '../../NxAlert/NxAlert';
import { faEye } from '@fortawesome/free-solid-svg-icons';

describe('NxToastContainer', function() {
  const simpleProps: NxToastContainerProps = {
    children: (
      <>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
      </>
    )
  };

  const quickRender = rtlRender(NxToastContainer, simpleProps);
  const renderEl = rtlRenderElement(NxToastContainer, simpleProps);

  it('renders any NxToasts passed into it', function() {
    renderEl();

    const alerts = screen.getAllByText('This is an Alert');

    expect(alerts.length).toBe(3);
  });

  it('sets focus to last toast when first toast is closed', async function() {
    const user = userEvent.setup();
    quickRender();

    const closeBtns = screen.getAllByRole('button', {name: 'Close'});

    await user.click(closeBtns[0]);

    expect(closeBtns[2]).toHaveFocus();
  });

  it('sets focus to the next last toast when the last toast is closed', async function() {
    const user = userEvent.setup();
    quickRender();

    const closeBtns = screen.getAllByRole('button', {name: 'Close'});

    await user.click(closeBtns[2]);

    expect(closeBtns[1]).toHaveFocus();
  });

  it('sets focus to previous focused element when the last remaining toast is closed',
      async function() {
        render(
            <>
              <button type="button">Focus Me</button>
              <NxToastContainer>
                <NxToast onClose={()=>{}}>
                  <NxAlert icon={faEye}>This is an Alert</NxAlert>
                </NxToast>
              </NxToastContainer>
            </>
        );

        const prevFocusBtn = screen.getByRole('button', {name: 'Focus Me'});
        const closeBtn = screen.getByRole('button', {name: 'Close'});

        prevFocusBtn.focus();

        closeBtn.focus();
        await userEvent.click(closeBtn);

        expect(prevFocusBtn).toHaveFocus();
      });

  it('sets focus to previous focused element (while toasts are rendered) when the last remaining toast is closed',
      async function() {
        render(
            <>
              <button type="button">Focus Me</button>
              <NxToastContainer>
                <NxToast onClose={()=>{}}>
                  <NxAlert icon={faEye}>This is an Alert</NxAlert>
                </NxToast>
                <NxToast onClose={()=>{}}>
                  <NxAlert icon={faEye}>This is an Alert</NxAlert>
                </NxToast>
              </NxToastContainer>
            </>
        );

        const prevFocusBtn = screen.getByRole('button', {name: 'Focus Me'});
        const closeBtns = screen.getAllByRole('button', {name: 'Close'});

        await userEvent.click(closeBtns[1]);

        prevFocusBtn.focus();

        closeBtns[0].focus();
        await userEvent.click(closeBtns[0]);

        expect(prevFocusBtn).toHaveFocus();
      });
});
