/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement, runTimers, userEvent } from '../../../__testutils__/rtlUtils';

import { default as NxCopyToClipboard, Props } from '../NxCopyToClipboard';
import { NxCodeSnippet } from '../../../index';
import { UserEvent } from '@testing-library/user-event/dist/types/setup';

describe('NxCopyToClipboard', function() {
  const minimalProps: Props = {
        label: 'Foo',
        content: 'Lorem Ipsum'
      },
      quickRender = rtlRender(NxCopyToClipboard, minimalProps),
      renderEl = rtlRenderElement(NxCopyToClipboard, minimalProps);

  it('is aliased as NxCodeSnippet', function() {
    expect(NxCopyToClipboard).toBe(NxCodeSnippet);
  });

  it('adds specified classes and attrs to the top-level element', function() {
    const el = renderEl({ className: 'foo', id: 'bar', lang: 'en' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');
    expect(el).toHaveAttribute('id', 'bar');
    expect(el).toHaveAttribute('lang', 'en');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('renders a "Copy to Clipboard" button', function() {
    expect(quickRender().getByRole('button', { name: 'Copy to Clipboard' })).toBeInTheDocument();
  });

  it('renders a textbox', function() {
    expect(quickRender().getByRole('textbox')).toBeInTheDocument();
  });

  it('labels and names the textbox from its label prop', function() {
    const view = quickRender();

    expect(view.getByRole('textbox')).toHaveAccessibleName('Foo');
    expect(view.container).toHaveTextContent('Foo');
  });

  it('sets the accessible description of the textbox from the sublabel prop and includes it in the render',
      function() {
        const noSublabelView = quickRender(),
            sublabelView = quickRender({ sublabel: 'BARRRR' });

        expect(noSublabelView.getByRole('textbox')).not.toHaveAccessibleDescription();
        expect(sublabelView.getByRole('textbox')).toHaveAccessibleDescription('BARRRR');
        expect(sublabelView.container).toHaveTextContent('BARRRR');
      }
  );

  it('sets the textbox value to the content', function() {
    expect(quickRender().getByRole('textbox')).toHaveValue('Lorem Ipsum');
  });

  it('sets readonly on the textbox', function() {
    expect(quickRender().getByRole('textbox')).toHaveAttribute('readonly');
  });

  it('adds inputProps to the textbox', function() {
    const textbox = quickRender({ inputProps: { rows: 1, id: 'foo' } }).getByRole('textbox');

    expect(textbox).toHaveAttribute('id', 'foo');
    expect(textbox).toHaveAttribute('rows', '1');
  });

  describe('when the button is clicked', function() {
    function getElementSelection(element: HTMLTextAreaElement | null) {
      return element && element.value.slice(element.selectionStart, element.selectionEnd);
    }

    describe('when navigator.clipboard is available', function() {
      let resolveClipboardPromise: Function | null,
          rejectClipboardPromise: Function | null,
          user: UserEvent;

      beforeEach(function() {
        // NOTE: userEvent does its own mocking of the clipboard object, which our mocking has to be done after
        user = userEvent.setup();

        jest.spyOn(navigator.clipboard, 'writeText').mockImplementation(() =>
          new Promise((resolve, reject) => {
            resolveClipboardPromise = resolve;
            rejectClipboardPromise = reject;
          })
        );
      });

      it('copies the text using navigator.writeText', async function() {
        const view = quickRender();

        expect(window.navigator.clipboard.writeText).not.toHaveBeenCalled();

        await user.click(view.getByRole('button'));

        expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('Lorem Ipsum');
      });

      it('calls onCopyUsingBtn after writing the text to the clipboard', async function() {
        const onCopyUsingBtn = jest.fn(),
            view = quickRender({ onCopyUsingBtn });

        await user.click(view.getByRole('button'));

        expect(onCopyUsingBtn).not.toHaveBeenCalled();

        resolveClipboardPromise!();

        // the promise then() is called asynchronously so we must do our expectation of its result asynchronously
        // as well
        await runTimers();
        expect(onCopyUsingBtn).toHaveBeenCalled();
      });

      it('sets the text selection to the textbox\'s contents after writing the text to the clipboard',
          async function() {
            const view = quickRender(),
                textbox = view.getByRole('textbox') as HTMLTextAreaElement;

            expect(getElementSelection(textbox)).toBe('');

            await user.click(view.getByRole('button'));

            expect(getElementSelection(textbox)).toBe('');

            resolveClipboardPromise!();
            await runTimers();

            expect(getElementSelection(textbox)).toBe('Lorem Ipsum');
          }
      );

      it('does not call onCopyUsingBtn or set the text selection if the copy fails', async function() {
        const onCopyUsingBtn = jest.fn(),
            view = quickRender({ onCopyUsingBtn }),
            textbox = view.getByRole('textbox') as HTMLTextAreaElement;

        await user.click(view.getByRole('button'));

        rejectClipboardPromise!('This is expected to be logged');
        await runTimers();

        expect(getElementSelection(textbox)).toBe('');
        expect(onCopyUsingBtn).not.toHaveBeenCalled();
      });
    });

    describe('when navigator.clipboard is not available', function() {
      afterEach(function() {
        if ((document as any).execCommand) {
          delete (document as any).execCommand;
        }
      });

      it('copies the text using document.execCommand', async function() {

        const user = userEvent.setup();

        delete (window.navigator as any).clipboard;
        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(function() {
            expect(getElementSelection(view.getByRole('textbox') as HTMLTextAreaElement)).toBe('Lorem Ipsum');
          }),
          configurable: true
        });

        const view = quickRender();

        expect(document.execCommand).not.toHaveBeenCalled();

        await user.click(view.getByRole('button'));

        expect(document.execCommand).toHaveBeenCalledWith('copy');
      });

      it('calls onCopyUsingBtn after writing the text to the clipboard', async function() {
        const user = userEvent.setup(),
            onCopyUsingBtn = jest.fn();

        delete (window.navigator as any).clipboard;
        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(function() {
            // shouldn't be called until after this
            expect(onCopyUsingBtn).not.toHaveBeenCalled();
            return true;
          }),
          configurable: true
        });

        const view = quickRender({ onCopyUsingBtn });

        await user.click(view.getByRole('button'));

        expect(onCopyUsingBtn).toHaveBeenCalled();
      });

      it('does not call onCopyUsingBtn if the copy fails', async function() {
        const user = userEvent.setup(),
            onCopyUsingBtn = jest.fn();

        delete (window.navigator as any).clipboard;
        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(() => false),
          configurable: true
        });

        const view = quickRender({ onCopyUsingBtn });

        await user.click(view.getByRole('button'));

        expect(onCopyUsingBtn).not.toHaveBeenCalled();
      });
    });
  });
});
