/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import NxModal, { Props } from '../NxModal';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';
import { render, within } from '@testing-library/react';

describe('NxModal', function() {
  const minimalProps: Props = {
    children: 'A message to show in a modal',
    onClose: jest.fn()
  };

  type PropsWithRef = Props & RefAttributes<HTMLDialogElement>;
  const quickRender = rtlRender<PropsWithRef>(NxModal, minimalProps),
      renderEl = rtlRenderElement<PropsWithRef>(NxModal, minimalProps);

  it('renders a top-level element with role="dialog"', function () {
    const view = quickRender();

    expect(view.getByRole('dialog')).toBeInTheDocument();
    expect(view.getByRole('dialog')).toBe(view.container.firstElementChild);
  });

  it('renders children nodes within the modal', function() {
    const view = quickRender({ children: <div className="bar" data-testid="test-div" /> }),
        modal = view.getByRole('dialog');

    expect(within(modal).getByTestId('test-div')).toBeInTheDocument();
  });

  it('merges any passed in className to the modal', function() {
    const el = renderEl({ className: 'test' })!,
        defaultEl = renderEl()!,
        defaultElChild = defaultEl.firstElementChild!;

    expect(el.firstElementChild).toHaveClass('test');

    for (const cls of Array.from(defaultElChild.classList)) {
      expect(el.firstElementChild).toHaveClass(cls);
    }
  });

  it('fowards a ref to the dialog', function() {
    const ref = React.createRef<HTMLDialogElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('includes any passed in attributes to the modal div', function() {
    const el = renderEl({ id: 'modal-id', lang: 'en_US' })?.firstElementChild;

    expect(el).toHaveAttribute('id', 'modal-id');
    expect(el).toHaveAttribute('lang', 'en_US');
  });

  it('sets the specified role on the backdrop', function() {
    expect(renderEl({ role: 'asdf' })).toHaveAttribute('role', 'asdf');
  });

  describe('NxModal event listener support', () => {
    let containerMainModal: HTMLDivElement | null;

    beforeEach(function () {
      // Rendering containerMainModal for the component in test.
      containerMainModal = document.createElement('div');

      document.body.appendChild(containerMainModal);
    });

    afterEach(function () {
      if (containerMainModal) {
        document.body.removeChild(containerMainModal);
        containerMainModal = null;
      }
    });

    // const createEvent = (key = 'Escape') => ({
    //   key,
    //   stopPropagation: jest.fn(),
    //   nativeEvent: {
    //     stopImmediatePropagation: jest.fn()
    //   }
    // });

    it('executes onClose method with a cancel event when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          component = quickRender({ onClose: mockCallBack }),
          user = userEvent.setup();

      expect(component.getByRole('dialog')).toBeInTheDocument();
      expect(mockCallBack).not.toHaveBeenCalled();
      await user.keyboard('[Escape]');
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method with a cancel event when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          component = quickRender({ onCancel: mockCallBack }),
          user = userEvent.setup();

      expect(component.getByRole('dialog')).toBeInTheDocument();
      expect(mockCallBack).not.toHaveBeenCalled();
      await user.keyboard('[Escape]');
      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onClose method ONLY when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          component = quickRender({ onClose: mockCallBack }),
          user = userEvent.setup();

      expect(component.getByRole('dialog')).toBeInTheDocument();

      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      await user.keyboard('q');
      await user.keyboard('Q');

      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel method ONLY when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          component = quickRender({ onCancel: mockCallBack }),
          user = userEvent.setup();

      expect(component.getByRole('dialog')).toBeInTheDocument();

      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      await user.keyboard('q');
      await user.keyboard('Q');

      expect(mockCallBack).not.toHaveBeenCalled();
    });

    // it('calls stopPropagation and stopImmediatePropagation on Escape keydowns', function() {
    //   const component = renderEl({ onClose: jest.fn() })!,
    //       escapeEvent = createEvent.keyDown(component, {
    //         key: 'Escape',
    //         stopPropagation: jest.fn(),
    //         nativeEvent: {
    //           stopImmediatePropagation: jest.fn()
    //         }
    //       }),
    //       otherEvent = createEvent.keyDown(component, { key: 'Q' });

    //   fireEvent(component, escapeEvent);
    //   fireEvent(component, otherEvent);
    //   expect(escapeEvent.stopPropagation).toHaveBeenCalled();
    //   expect(escapeEvent.nativeEvent.stopImmediatePropagation).toHaveBeenCalled();

    //   expect(otherEvent.stopPropagation).toBe(false);
    //   expect(otherEvent.nativeEvent.stopImmediatePropagation).toBe(false);
    // });
  });

  // it('renders descendant tooltips attached to the backdrop rather than the document body', function() {
  //   const nxModal = mount(
  //     <NxModal onClose={() => {}}>
  //       <div id="test-div">
  //         <NxTooltip title="foo">
  //           <NxButton>Foo</NxButton>
  //         </NxTooltip>
  //       </div>
  //     </NxModal>
  //   );

  //   const tooltip = nxModal.find(Tooltip).at(0);

  //   expect(tooltip.prop('PopperProps')!.container).toBe(nxModal.getDOMNode());
  // });

  it('moves focus back to the previously focused element when closed', async function() {
    function Fixture({ modalOpen }: { modalOpen: boolean }) {
      return (
        <>
          <button data-testid="test-btn">Test</button>
          { modalOpen && <NxModal onCancel={jest.fn()}><button id="cancel-btn">Close</button></NxModal> }
        </>
      );
    }

    const container = document.createElement('div');
    document.body.append(container);

    const component = render(<Fixture modalOpen={false} />),
        externalBtn = component.getByTestId('test-btn');

    externalBtn.focus();
    expect(component.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.activeElement === externalBtn).toBe(true);

    component.rerender(<Fixture modalOpen={true} />);
    const dialog = component.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(document.activeElement === dialog).toBe(true);

    component.rerender(<Fixture modalOpen={false} />);
    expect(component.queryByRole('dialog')).not.toBeInTheDocument();

    // The focus is moved asynchronously
    await runTimers();

    expect(document.activeElement === externalBtn).toBe(true);
  });
  // });

  describe('NxModal.Header', function() {
    it('makes a <header> tag with the nx-modal-header class', function() {
      const view = render(
        <NxModal { ...minimalProps }><NxModal.Header>Test</NxModal.Header> </NxModal>
      );
      expect(view.getByRole('banner')).toBeInTheDocument();
      expect(view.getByRole('banner')).toHaveTextContent('Test');
    });
  });
});
