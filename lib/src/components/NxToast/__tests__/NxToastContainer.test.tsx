/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { useState } from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { screen, render, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {reject, propEq } from 'ramda';

import useToggle from '../../../util/useToggle';

import NxToastContainer from '../NxToastContainer';
import { NxToastContainerProps } from '../types';
import NxToast from '../NxToast';
import { NxErrorAlert } from '../../NxAlert/NxAlert';

describe('NxToastContainer', function() {
  const simpleProps: NxToastContainerProps = {
    children: []
  };

  const quickRender = rtlRender<NxToastContainerProps>(NxToastContainer, simpleProps),
      renderEl = rtlRenderElement(NxToastContainer, simpleProps);

  it('renders a <div> with a class of nx-toast__wrapper', function() {
    const component = quickRender();
    const toastWrapper = component.container.children[0];

    expect(toastWrapper.nodeName).toEqual('DIV');
    expect(toastWrapper).toHaveClass('nx-toast__wrapper');
  });

  it('contains a<div> with a class of nx-toast__container', function() {
    const component = renderEl();
    const toastContainer = component?.querySelector('.nx-toast__container');

    expect(toastContainer).toBeInTheDocument();
    expect(component).toContainElement(toastContainer as HTMLElement);
  });

  it('tests NxToast mounting inside NxToastContainer, and unmounting when close button is clicked',
      async function() {

        const user = userEvent.setup();

        const MountingBehavior = () => {
          const [showToast, toggleToast] = useToggle(false);
          return (
            <>
              <button type="button" onClick={()=>toggleToast()}>Show Toast</button>
              <NxToastContainer>
                {showToast &&
                <NxToast onClose={()=>toggleToast()}>
                  <NxErrorAlert>message</NxErrorAlert>
                </NxToast>
                }
              </NxToastContainer>
            </>
          );
        };
        const { container } = render(<MountingBehavior/>);

        expect(screen.queryByRole('alert')).not.toBeInTheDocument();

        const button = screen.getByRole('button', {name: 'Show Toast'});
        await user.click(button);

        expect(screen.getByRole('alert')).toBeVisible();

        const toast = container.querySelector('.nx-toast');
        const closeBtn = screen.getByRole('button', {name: 'Close'});
        await user.click(closeBtn);
        fireEvent.animationEnd(toast as Element);

        expect(toast).not.toBeInTheDocument();
      });

  it('tests focusing when NxToasts mount and unmount', async function() {
    const user = userEvent.setup();

    interface ToastModel {
      id: number;
    }

    const FocusBehavior = () => {
      const [toastIdInc, setToastIdInc] = useState<number>(0);
      const [toasts, setToasts] = useState<ToastModel[]>([]);

      const addToast = () => {
        const toastId = toastIdInc + 1;
        setToastIdInc(toastId);
        setToasts([
          { id: toastId },
          ...toasts
        ]);
      };
      const removeToast = (id: number) => setToasts(reject(propEq('id', id), toasts));
      return (
        <>
          <button type="button" onClick={()=>addToast()}>Show Toast</button>
          <NxToastContainer>
            {
              toasts.map(({id}) => {
                return (
                  <NxToast key={id}
                           onClose={()=> removeToast(id)}>
                    <NxErrorAlert>Error Message</NxErrorAlert>
                  </NxToast>
                );
              })
            }
          </NxToastContainer>
        </>
      );
    };
    const {container} = render(<FocusBehavior />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    const button = screen.getByRole('button', {name: 'Show Toast'});
    await user.click(button);
    await user.click(button);
    await user.click(button);

    // use let because both arrays will be re-defined multiple times as btns are added / removed
    let closeBtns = await screen.findAllByRole('button', {name: 'Close'});
    let toasts = container.querySelectorAll('.nx-toast');

    expect(toasts).toHaveLength(3);
    // topmost close button has focus before any toasts are closed
    expect(closeBtns[0]).toHaveFocus();

    await user.keyboard('{Enter}');
    fireEvent.animationEnd(toasts[0] as Element);
    closeBtns = await screen.findAllByRole('button', {name: 'Close'});
    toasts = container.querySelectorAll('.nx-toast');

    expect(toasts).toHaveLength(2);
    // bottommost close button has focus after first toast is closed
    expect(closeBtns[closeBtns.length - 1]).toHaveFocus();

    await user.keyboard('{Enter}');
    fireEvent.animationEnd(toasts[1] as Element);

    // last toast remaining now has focus
    expect(closeBtns[0]).toHaveFocus();

    await user.keyboard('{Enter}');
    fireEvent.animationEnd(toasts[0] as Element);

    // check that the "Show Toast" button is now in focus
    expect(button).toHaveFocus();

  });
});
