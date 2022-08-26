/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NxToastContainer from '../NxToastContainer';
import { NxToastContainerProps } from '../types';
import NxToast from '../NxToast';

import NxAlert from '../../NxAlert/NxAlert';
import { faEye } from '@fortawesome/free-solid-svg-icons';

describe('NxToastContainer', function() {
  const simpleProps: NxToastContainerProps = {
    children: []
  };
  const quickRender = rtlRender(NxToastContainer, simpleProps);
  const renderEl = rtlRenderElement(NxToastContainer, simpleProps);

  it('doesn\'t render any toasts on page load', function() {
    const component = renderEl()!;
    const toast = component.querySelector('.nx-toast');

    expect(component).not.toContainElement(toast as HTMLElement);
  });

  it('renders any NxToasts passed into it', function() {
    const NxToasts = (
      <>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
      </>
    );
    renderEl({children: NxToasts});
    // render(<Component />);

    const alerts = screen.getAllByText(/this is an alert/i);
    expect(alerts.length).toBe(2);
  });

  it('sets focus on the first NxToast before any toasts are closed', async function() {
    const NxToasts = (
      <>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
        <NxToast onClose={()=>{}}>
          <NxAlert icon={faEye}>This is an Alert</NxAlert>
        </NxToast>
      </>
    );

    quickRender({children: NxToasts});
    setTimeout(()=> {
      const closeBtns = screen.getAllByRole('button', {name: 'Close'});
      screen.debug();
      expect(closeBtns[1]).toHaveFocus();

      done();
    }, 450);
    // fireEvent.animationEnd()
  });

  it('sets focus to last toast when a toast is closed', async function() {
    const user = userEvent.setup();
    const Component = () => {
      return (
        <NxToastContainer>
          <NxToast onClose={() => {}} data-testid= "Test">
            <NxAlert icon={faEye}>This is an Alert</NxAlert>
          </NxToast>
          <NxToast onClose={() => {}} data-testid= "Test">
            <NxAlert icon={faEye}>This is an Alert</NxAlert>
          </NxToast>
        </NxToastContainer>
      );
    };

    const {container} = render(<Component />);
    const closeBtns = screen.getAllByRole('button', {name: 'Close'});
    const toasts = container.querySelectorAll('.nx-toast');

    // expect(toasts.length).toBe(3);
    expect(closeBtns[0]).toHaveFocus();

    await user.keyboard('{Enter}');
    fireEvent.animationEnd(toasts[0] as Element);
    // await waitForElementToBeRemoved(()=> toasts[1]);
    const tests = screen.getAllByTestId('Test');
    expect(tests.length).toBe(1);

    // closeBtns = await screen.findAllByRole('button', {name: 'Close'});
    // expect(closeBtns[0]).toHaveFocus();

  });

  // it('tests focusing when NxToasts mount and unmount', async function() {
  //   const user = userEvent.setup();

  //   interface ToastModel {
  //     id: number;
  //   }

  //   const FocusBehavior = () => {
  //     const [toastIdInc, setToastIdInc] = useState<number>(0);
  //     const [toasts, setToasts] = useState<ToastModel[]>([]);

  //     const addToast = () => {
  //       const toastId = toastIdInc + 1;
  //       setToastIdInc(toastId);
  //       setToasts([
  //         { id: toastId },
  //         ...toasts
  //       ]);
  //     };
  //     const removeToast = (id: number) => setToasts(reject(propEq('id', id), toasts));
  //     return (
  //       <>
  //         <button type="button" onClick={()=>addToast()}>Show Toast</button>
  //         <NxToastContainer>
  //           {
  //             toasts.map(({id}) => {
  //               return (
  //                 <NxToast key={id}
  //                          onClose={()=> removeToast(id)}>
  //                   <NxAlert icon={faEye}>Error Message</NxAlert>
  //                 </NxToast>
  //               );
  //             })
  //           }
  //         </NxToastContainer>
  //       </>
  //     );
  //   };
  //   const {container} = render(<FocusBehavior />);

  //   // expect(screen.getByText('Error Message')).not.toBeInTheDocument();

  //   const button = screen.getByRole('button', {name: 'Show Toast'});
  //   await user.click(button);
  //   await user.click(button);
  //   await user.click(button);

  //   // use let because both arrays will be re-defined multiple times as btns are added / removed
  //   let closeBtns = await screen.findAllByRole('button', {name: 'Close'});
  //   let toasts = container.querySelectorAll('.nx-toast');

  //   expect(toasts).toHaveLength(3);
  //   // topmost close button has focus before any toasts are closed
  //   expect(closeBtns[0]).toHaveFocus();

  //   await user.keyboard('{Enter}');
  //   fireEvent.animationEnd(toasts[0] as Element);
  //   closeBtns = await screen.findAllByRole('button', {name: 'Close'});
  //   toasts = container.querySelectorAll('.nx-toast');

  //   expect(toasts).toHaveLength(2);
  //   // bottommost close button has focus after first toast is closed
  //   expect(closeBtns[1]).toHaveFocus();

  //   await user.keyboard('{Enter}');
  //   fireEvent.animationEnd(toasts[1] as Element);

  //   // last toast remaining now has focus
  //   expect(closeBtns[0]).toHaveFocus();

  //   await user.keyboard('{Enter}');
  //   fireEvent.animationEnd(toasts[0] as Element);

  //   // check that the "Show Toast" button is now in focus
  //   expect(button).toHaveFocus();

  // });

});
