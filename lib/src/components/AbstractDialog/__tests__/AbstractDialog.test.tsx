/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { render, fireEvent, waitFor, createEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import AbstractDialog, { Props } from '../AbstractDialog';
import NxButton from '../../NxButton/NxButton';
import NxTooltip from '../../NxTooltip/NxTooltip';
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

  it('forwards the dialog element ref', function() {
    const ref = React.createRef<HTMLDialogElement>();
    render(<AbstractDialog ref={ref} onCancel={() => {}} />);
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(ref.current).toBe(dialog);
  });

  it('applies the className to the dialog element', function() {
    expect(getDialog({ className: 'foo' })).toHaveClass('foo');
  });

  it('includes any passed in attributes to the dialog', function() {
    const dialog = getDialog({ id: 'dialog-id', lang: 'en_US' });
    expect(dialog).toHaveAttribute('id', 'dialog-id');
    expect(dialog).toHaveAttribute('lang', 'en_US');
  });

  it('sets the dialog role on the dialog by default', function() {
    expect(getDialog()).toHaveAttribute('role', 'dialog');
  });

  it('applies passed in role attribute into the dialog', function() {
    expect(getDialog({ role: 'asdf' })).toHaveAttribute('role', 'asdf');
  });

  describe('Dialog event listener support', () => {
    const createKeyDownEvent = (target: HTMLElement, key = 'Escape', properties: Record<string, unknown> = {}) =>
      Object.assign(createEvent.keyDown(target, { key }), { ...properties });

    it('executes event.preventDefault when useNativeCancelOnEscape is false', function () {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ useNativeCancelOnEscape: false, onCancel: () => {}})!;
      const defaultIsPrevented = fireEvent(dialog, createKeyDownEvent(dialog));
      expect(defaultIsPrevented).toBeFalsy();
    });

    it('executes onCancel method with a cancel event when pressing ESC key', function () {
      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ useNativeCancelOnEscape: true, onCancel: mockOnCancel })!;

      expect(mockOnCancel).not.toHaveBeenCalled();

      fireEvent(dialog, createKeyDownEvent(dialog));

      expect(mockOnCancel).toHaveBeenCalled();
      expect(mockOnCancel.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method ONLY when pressing ESC key', function () {
      const mockOnCancel = jest.fn();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ useNativeCancelOnEscape: true, onCancel: mockOnCancel })!;

      fireEvent(dialog, createKeyDownEvent(dialog, 'Tab'));
      fireEvent(dialog, createKeyDownEvent(dialog, 'Enter'));
      fireEvent(dialog, createKeyDownEvent(dialog, 'q'));
      fireEvent(dialog, createKeyDownEvent(dialog, 'Q'));

      expect(mockOnCancel).not.toHaveBeenCalled();
    });

    it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', function() {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialog = getDialog({ onCancel: jest.fn() })!;

      const otherEvent = createKeyDownEvent(dialog, 'q', {
        stopPropagation: jest.fn(),
        stopImmediatePropagation: jest.fn()
      });

      const escapeEvent = createKeyDownEvent(dialog, 'Escape', {
        stopPropagation: jest.fn(),
        stopImmediatePropagation: jest.fn()
      });

      fireEvent(dialog, otherEvent);
      fireEvent(dialog, escapeEvent);

      expect(otherEvent.stopPropagation).not.toHaveBeenCalled();
      expect(otherEvent.stopImmediatePropagation).not.toHaveBeenCalled();

      expect(escapeEvent.stopPropagation).toHaveBeenCalled();
      expect(escapeEvent.stopImmediatePropagation).toHaveBeenCalled();
    });
  });

  it('renders descendant tooltips attached to the backdrop rather than the document body', async function() {
    userEvent.setup();

    render(
      <AbstractDialog onCancel={() => {}} isModal={true}>
        <div>
          <NxTooltip title="foo">
            <NxButton data-testid="tooltip-button">Foo</NxButton>
          </NxTooltip>
        </div>
      </AbstractDialog>
    );

    const tooltipButton = screen.getByRole('button', { name: 'Foo', hidden: true });

    await act(async () => {
      await userEvent.hover(tooltipButton);

      const tooltip = await screen.findByRole('tooltip', { hidden: true });

      expect(tooltip).toBeInTheDocument();

      await userEvent.unhover(tooltipButton);
    });

    await waitFor(() => {
      expect(screen.queryByRole('tooltip', { hidden: true })).not.toBeInTheDocument();
    });
  });

  it('moves focus back to the previously focused element when closed', async function() {
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

    await act(async () => {
      await userEvent.click(toggleButton);

      expect(screen.getByRole('dialog', { hidden: true })).toBeInTheDocument();

      const closeButton = screen.getByRole('button', { name: 'Close', hidden: true });

      await userEvent.click(closeButton);
    });

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
      expect(document.activeElement).toBe(toggleButton);
    });
  });
});
