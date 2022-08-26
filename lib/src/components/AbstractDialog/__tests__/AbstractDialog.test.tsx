/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import AbstractDialog, { Props } from '../AbstractDialog';
import NxButton from '../../NxButton/NxButton';
// import NxTooltip from '../../NxTooltip/NxTooltip';
import useToggle from '../../../util/useToggle';

describe('AbstractDialog', function() {
  const minimalProps: Props = {
    children: 'A message inside the dialog element.',
    onCancel: jest.fn()
  };

  const quickRender = rtlRender(AbstractDialog, minimalProps);
  const getDialog = rtlRenderElement(AbstractDialog, minimalProps);

  it('renders children within the dialog element', function() {
    expect(quickRender({ children: <div data-testid="bar"/> }).getByTestId('bar')).toBeInTheDocument();
  });

  // it('forwards the dialog element ref', function() {
  //   const ref = React.createRef<HTMLDialogElement>();
  //   const dialog = getDialog({ ref });
  //   expect(ref.current).toBe(dialog);
  // });

  it('uses passed in className to the dialog', function() {
    expect(getDialog({ className: 'foo' })).toHaveClass('foo');
  });

  it('includes any passed in attributes to the dialog', function() {
    const dialog = getDialog({ id: 'dialog-id', lang: 'en_US' });
    expect(dialog).toHaveAttribute('id', 'dialog-id');
    expect(dialog).toHaveAttribute('lang', 'en_US');
  });

  it('sets the dialog role on the backdrop by default', function() {
    expect(getDialog()).toHaveAttribute('role', 'dialog');
  });

  it('sets the specified role on the backdrop', function() {
    expect(getDialog({ role: 'asdf' })).toHaveAttribute('role', 'asdf');
  });

  describe('Dialog event listener support', () => {
    let dialogContainer: HTMLDivElement | null;

    beforeEach(function () {
      // Rendering dialogContainer for the component in test.
      dialogContainer = document.createElement('div');
      document.body.appendChild(dialogContainer);
    });

    afterEach(function () {
      if (dialogContainer) {
        document.body.removeChild(dialogContainer);
        dialogContainer = null;
      }
    });

    // const createKeyDownEvent = (key = 'Escape', node) => ({
    //   key,
    //   stopPropagation: jest.fn(),
    //   nativeEvent: {
    //     stopImmediatePropagation: jest.fn()
    //   }
    // });

    it('executes event.preventDefault when useNativeCancelOnEscape is false', async function () {
      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ useNativeCancelOnEscape: false, onCancel: mockOnCancel })!;

      expect(mockOnCancel).not.toHaveBeenCalled();

      // const escapeEvent = createEvent.keyDown(dialog);
      // escapeEvent.key = 'Escape';

      const escapeEvent = {
        key: 'Escape'
      };

      const preventDefaultIsCalled = fireEvent.keyDown(dialog, escapeEvent);

      expect(mockOnCancel).toHaveBeenCalled();

      // https://stackoverflow.com/questions/60455119/react-jest-test-preventdefault-action
      // https://github.com/testing-library/react-testing-library/issues/572
      expect(preventDefaultIsCalled).toBeFalsy();

      expect(mockOnCancel.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method with a cancel event when pressing ESC key', async function () {
      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ useNativeCancelOnEscape: true, onCancel: mockOnCancel })!;

      expect(mockOnCancel).not.toHaveBeenCalled();

      const escapeEvent = {
        key: 'Escape'
      };

      await fireEvent.keyDown(dialog, escapeEvent);
      expect(mockOnCancel).toHaveBeenCalled();
      expect(mockOnCancel.mock.calls[0][0].type).toBe('cancel');
    });

    // it('executes onCancel method ONLY when pressing ESC key', async function () {
    //   const mockOnCancel = jest.fn();

    //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //   const dialog = getDialog({ useNativeCancelOnEscape: true, onCancel: mockOnCancel })!;

    //   await fireEvent.keyDown(dialog, createEvent('Tab'));
    //   await fireEvent.keyDown(dialog, createEvent('Enter'));
    //   await fireEvent.keyDown(dialog, createEvent('q'));
    //   await fireEvent.keyDown(dialog, createEvent('Q'));

    //   expect(mockOnCancel).not.toHaveBeenCalled();
    // });

    //   it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', async function() {
    //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //     const dialog = getDialog({ useNativeCancelOnEscape: true, onCancel: jest.fn() })!;
    //     const escEvent = createEvent();
    //     const otherEvent = createEvent('q');

    //     await fireEvent.keyDown(dialog, escEvent);
    //     await fireEvent.keyDown(dialog, otherEvent);

    //     expect(escEvent.stopPropagation).toHaveBeenCalled();
    //     expect(escEvent.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();

    //     expect(otherEvent.stopPropagation).not.toHaveBeenCalled();
    //     expect(otherEvent.nativeEvent.stopImmediatePropagation).not.toHaveBeenCalled();
    //   });
  });

  // it('renders descendant tooltips attached to the backdrop rather than the document body', await function() {
  //   userEvent.setup();

  //   render(
  //     <AbstractDialog onCancel={() => {}} isModal={true}>
  //       <div>
  //         <NxTooltip title="foo">
  //           <NxButton data-testid="tooltip-button">Foo</NxButton>
  //         </NxTooltip>
  //       </div>
  //     </AbstractDialog>
  //   );

  //   const dialog = screen.getByRole('dialog', { hidden: true });
  //   const tooltipButton = screen.getByRole('button', { name: 'Foo', hidden: true });

  //   await userEvent.hover(tooltipButton);
  //   expect(within(dialog).getByRole('tooltip', { hidden: true })).toBeInTheDocument();
  //   await userEvent.unhover(tooltipButton);
  //   expect(within(dialog).queryByRole('tooltip', { hidden: true })).not.toBeInTheDocument();
  // });

  it('moves focus back to the previously focused element when closed', async function(done) {
    function Fixture() {
      const [dialogOpen, toggleDialog] = useToggle(false);
      return (
        <div>
          <NxButton onClick={() => toggleDialog()}>Toggle Dialog</NxButton>
          {
            dialogOpen &&
            <AbstractDialog onCancel={jest.fn()}>
              <NxButton onClick={() => toggleDialog()}>
                Close
              </NxButton>
            </AbstractDialog>
          }
        </div>
      );
    }

    render(<Fixture />);

    const toggleButton = screen.getByRole('button', { name: 'Toggle Dialog' });

    toggleButton.focus();

    expect(toggleButton).toBeInTheDocument();
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
    expect(document.activeElement).toBe(toggleButton);

    await userEvent.click(toggleButton);

    expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();
    const closeButton = screen.getByRole('button', { name: 'Close', hidden: true });
    expect(document.activeElement).toBe(closeButton);

    await userEvent.click(closeButton);

    // The focus is moved asynchronously
    setTimeout(() => {
      expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
      expect(document.activeElement).toBe(toggleButton);
      done();
    }, 200);
  });

});
