/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { render, within } from '@testing-library/react';

import * as AbstractDialogAll from '../../AbstractDialog/AbstractDialog';
import NxModal, { Props } from '../NxModal';
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';

describe('NxModal', function() {
  beforeAll(() => {
    // js-dom doesn't work with isVisible method in AbstractDialog
    // so we're going to mock it to always return true.
    jest.spyOn(AbstractDialogAll, 'isVisible').mockReturnValue(true);
  });

  const minimalProps: Props = {
    children: <button>Foo</button>,
    onClose: () => {}
  };

  type PropsWithRef = Props & RefAttributes<HTMLDialogElement>;
  const quickRender = rtlRender<PropsWithRef>(NxModal, minimalProps),
      renderEl = rtlRenderElement<PropsWithRef>(NxModal, minimalProps);

  it('renders a top-level element with role="dialog"', function () {
    const view = quickRender(),
        dialog = view.getByRole('dialog');

    expect(dialog).toBeInTheDocument();
    expect(dialog).toBe(view.container.firstElementChild);
  });

  it('renders children nodes within the modal', function() {
    const view = quickRender({ children: <div data-testid="test-div" /> }),
        dialog = view.getByRole('dialog');

    expect(within(dialog).getByTestId('test-div')).toBeInTheDocument();
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
    const el = renderEl({ id: 'modal-id', lang: 'en_US' })!.firstElementChild;

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

    it('executes onClose method with a cancel event when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          user = userEvent.setup();

      quickRender({ onClose: mockCallBack });
      expect(mockCallBack).not.toHaveBeenCalled();

      await user.keyboard('[Escape]');

      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onCancel method with a cancel event when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          user = userEvent.setup();

      quickRender({ onCancel: mockCallBack });
      expect(mockCallBack).not.toHaveBeenCalled();

      await user.keyboard('[Escape]');

      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack.mock.calls[0][0].type).toBe('cancel');
    });

    it('executes onClose method ONLY when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          user = userEvent.setup();

      quickRender({ onClose: mockCallBack });

      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      await user.keyboard('q');
      await user.keyboard('Q');

      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('executes onCancel method ONLY when pressing ESC key', async function () {
      const mockCallBack = jest.fn(),
          user = userEvent.setup();

      quickRender({ onCancel: mockCallBack });

      await user.keyboard('[Tab]');
      await user.keyboard('[Enter]');
      await user.keyboard('q');
      await user.keyboard('Q');

      expect(mockCallBack).not.toHaveBeenCalled();
    });

    it('does not bubble escape to outside listener', async function() {
      const wrapperKeyDownListener = jest.fn(),
          user = userEvent.setup();

      render(
        <div onKeyDown={wrapperKeyDownListener}>
          <NxModal onClose={jest.fn()}><button>Hello</button></NxModal>
        </div>
      );

      await user.keyboard('[Escape]');
      expect(wrapperKeyDownListener).not.toHaveBeenCalled();

      await user.keyboard('Q');
      expect(wrapperKeyDownListener).toHaveBeenCalled();
    });
  });

  describe('NxModal.Header', function() {
    it('renders an element with role="banner"', function() {
      const view = render(
        <NxModal { ...minimalProps }><NxModal.Header>Test</NxModal.Header></NxModal>
      );

      expect(view.getByRole('banner')).toBeInTheDocument();
      expect(view.getByRole('banner')).toHaveTextContent('Test');
    });
  });

  // Assuming all focusable elements are visible.
  describe('NxModal focus', function () {
    it('moves focus back to the previously focused element when closed', async function() {
      function Fixture({ modalOpen }: { modalOpen: boolean }) {
        return (
          <>
            <button data-testid="external-button">Test</button>
            {
              modalOpen && <NxModal onCancel={jest.fn()}><button data-testid="internal-button">Close</button></NxModal>
            }
          </>
        );
      }

      const view = render(<Fixture modalOpen={false} />),
          externalBtn = view.getByTestId('external-button');

      externalBtn.focus();
      expect(view.queryByRole('dialog')).not.toBeInTheDocument();
      expect(document.activeElement === externalBtn).toBe(true);

      view.rerender(<Fixture modalOpen={true} />);

      const internalBtn = view.getByTestId('internal-button');
      const dialog = view.getByRole('dialog');

      expect(dialog).toBeInTheDocument();
      expect(document.activeElement === internalBtn).toBe(true);

      view.rerender(<Fixture modalOpen={false} />);
      expect(view.queryByRole('dialog')).not.toBeInTheDocument();

      // The focus is moved asynchronously
      await runTimers();

      expect(document.activeElement === externalBtn).toBe(true);
    });

    it('should tab through only tabbable elements', async function() {
      const user = userEvent.setup();

      const { getAllByTestId } = render(
        <NxModal {...minimalProps}>
          <a data-testid="tabbable" href="#">foo</a>
          <a>bar</a>

          <input data-testid="tabbable" type="text" />
          <input type="text" disabled />

          <textarea data-testid="tabbable" />
          <textarea disabled />

          <select data-testid="tabbable">
            <option>foo</option>
          </select>
          <select disabled>
            <option>bar</option>
          </select>

          <div data-testid="tabbable" tabIndex={0}>Foo</div>
          <div tabIndex={-1}>bar</div>

          <button data-testid="tabbable">Last</button>
          <button disabled>Last</button>
        </NxModal>
      );

      const tabbables = getAllByTestId('tabbable');
      for (let i = 0; i < tabbables.length; i++) {
        expect(tabbables[i]).toHaveFocus();
        await user.tab();
      }
    });

    it('should cycle tabs forward', async function() {
      const user = userEvent.setup();

      const { getAllByRole } = render(
        <NxModal {...minimalProps}>
          <button>First</button>
          <button>Middle</button>
          <button>Last</button>
        </NxModal>
      );

      const buttons = getAllByRole('button');

      expect(buttons[0]).toHaveFocus();
      await user.tab();
      expect(buttons[1]).toHaveFocus();
      await user.tab();
      expect(buttons[2]).toHaveFocus();
      await user.tab();
      expect(buttons[0]).toHaveFocus();
    });

    it('should cycle tabs backward', async function() {
      const user = userEvent.setup();

      const { getAllByRole } = render(
        <NxModal {...minimalProps}>
          <button>First</button>
          <button>Middle</button>
          <button>Last</button>
        </NxModal>
      );

      const buttons = getAllByRole('button');

      expect(buttons[0]).toHaveFocus();
      await user.tab({ shift: true });
      expect(buttons[2]).toHaveFocus();
      await user.tab({ shift: true });
      expect(buttons[1]).toHaveFocus();
      await user.tab({ shift: true });
      expect(buttons[0]).toHaveFocus();
    });
  });
});
