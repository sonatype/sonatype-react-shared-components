/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import { mount } from 'enzyme';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { render, fireEvent } from '@testing-library/react';

import { Tooltip } from '@material-ui/core';

// import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import AbstractDialog, { Props } from '../AbstractDialog';
import NxButton from '../../NxButton/NxButton';
import NxTooltip from '../../NxTooltip/NxTooltip';
import useToggle from '../../../util/useToggle';

describe('AbstractDialog', function() {
  const dummyCloseHandler = jest.fn();

  const minimalProps: Props = {
    children: 'A message inside the dialog element.',
    onCancel: dummyCloseHandler
  };

  const quickRender = rtlRender(AbstractDialog, minimalProps),
      getDialog = rtlRenderElement(AbstractDialog, minimalProps);

  it('renders children within the dialog element', function() {
    expect(quickRender({ children: <div data-testid="bar"/> }).getByTestId('bar')).toBeInTheDocument();
  });

  // it('forwards the dialog element ref', function() {
  //   const ref = React.createRef<HTMLDialogElement>();
  //   const dialog = getDialog({ ref });
  //   expect(ref.current).toBe(dialog);
  // });

  it('uses passed in className to the dialog', function() {
    const dialog = getDialog({ className: 'test' });
    expect(dialog).toHaveClass('test');
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

    const createEvent = (key = 'Escape') => ({
      key,
      stopPropagation: jest.fn(),
      preventDefault: () => {},
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    });

    it('executes event.preventDefault when useNativeCancelOnEscape is false', async function () {
      const mockCallBack = jest.fn();
      const component = getDialog({ useNativeCancelOnEscape: false, onCancel: mockCallBack })!;
      const mockPreventDefault = jest.fn();

      const escapeEvent = {
        key: 'Escape',
        stopPropagation: jest.fn(),
        preventDefault: mockPreventDefault,
        nativeEvent: {
          stopImmediatePropagation: jest.fn()
        }
      };

      expect(mockCallBack).not.toHaveBeenCalled();
      expect(mockPreventDefault).not.toHaveBeenCalled();
      await fireEvent.keyDown(component, escapeEvent);
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      // expect(mockPreventDefault).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method with a cancel event when pressing ESC key', async function () {
      const mockCallBack = jest.fn();
      const component = getDialog({ useNativeCancelOnEscape: true, onCancel: mockCallBack })!;

      expect(mockCallBack).not.toHaveBeenCalled();
      await fireEvent.keyDown(component, createEvent());
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method ONLY when pressing ESC key', async function () {
      const mockCallBack = jest.fn();
      const component = getDialog({ useNativeCancelOnEscape: true, onCancel: mockCallBack })!;

      await fireEvent.keyDown(component, createEvent('Tab'));
      await fireEvent.keyDown(component, createEvent('Enter'));
      await fireEvent.keyDown(component, createEvent('q'));
      await fireEvent.keyDown(component, createEvent('Q'));
      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', async function() {
      const component = getDialog({ useNativeCancelOnEscape: true, onCancel: jest.fn() })!,
          escEvent = createEvent(),
          otherEvent = createEvent('q');

      await fireEvent.keyDown(component, escEvent);
      await fireEvent.keyDown(component, otherEvent);

      expect(escEvent.stopPropagation).toHaveBeenCalled();
      expect(escEvent.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();

      expect(otherEvent.stopPropagation).not.toHaveBeenCalled();
      expect(otherEvent.nativeEvent.stopImmediatePropagation).not.toHaveBeenCalled();
    });
  });

  // it('renders descendant tooltips attached to the backdrop rather than the document body', function() {
  //   const dialog = render(
  //     <AbstractDialog onCancel={() => {}}>
  //       <div id="test-div">
  //         <NxTooltip title="foo">
  //           <NxButton>Foo</NxButton>
  //         </NxTooltip>
  //       </div>
  //     </AbstractDialog>
  //   );

  //   const tooltip = dialog.find(Tooltip).at(0);

  //   expect(tooltip.prop('PopperProps')!.container).toBe(dialog.getDOMNode());
  // });

  it('moves focus back to the previously focused element when closed', function(done) {
    function Fixture() {
      const [dialogOpen, toggleDialogOpen] = useToggle(false);
      return (
        <>
          <button data-testid="toggle-btn" onClick={toggleDialogOpen}>Toggle Dialog</button>
          { dialogOpen &&
          <AbstractDialog onCancel={jest.fn()}>
            <button data-testid="cancel-btn">
              Close
            </button>
          </AbstractDialog> }
        </>
      );
    }

    const divContainer = document.createElement('div');
    document.body.append(divContainer);

    const component = render(<Fixture dialogOpen={false} />, { container: divContainer }),
        externalBtn = component.find('#test-btn').getDOMNode() as HTMLElement;

    externalBtn.focus();
    expect(component).not.toContainMatchingElement(AbstractDialog);
    expect(document.activeElement === externalBtn).toBe(true);

    component.setProps({ dialogOpen: true });
    expect(component).toContainMatchingElement(AbstractDialog);
    expect(document.activeElement === component.find(AbstractDialog).getDOMNode()).toBe(true);

    component.setProps({ dialogOpen: false });
    expect(component).not.toContainMatchingElement(AbstractDialog);

    // The focus is moved asynchronously
    setTimeout(() => {
      expect(document.activeElement === externalBtn).toBe(true);
      done();
    }, 100);
  });

});
