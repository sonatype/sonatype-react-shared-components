/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import { default as NxCopyToClipboard, Props } from '../NxCopyToClipboard';
import NxButton from '../../NxButton/NxButton';
import NxFormGroup from '../../NxFormGroup/NxFormGroup';
import NxTextInput from '../../NxTextInput/NxTextInput';
import { NxCodeSnippet } from '../../../index';
import { runTimers } from '../../../__testutils__/rtlUtils';

describe('NxCopyToClipboard', function() {
  const minimalProps: Props = {
        label: 'Foo',
        content: 'Lorem Ipsum'
      },
      getShallow = getShallowComponent(NxCopyToClipboard, minimalProps),
      getMounted = getMountedComponent(NxCopyToClipboard, minimalProps);

  it('is aliased as NxCodeSnippet', function() {
    expect(NxCopyToClipboard).toBe(NxCodeSnippet);
  });

  it('renders a div with the nx-copy-to-clipboard class', function() {
    expect(getShallow()).toMatchSelector('div.nx-copy-to-clipboard');
  });

  it('adds specified classes to the div', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-copy-to-clipboard');
  });

  it('adds specified extra attributes to the div', function() {
    const component = getShallow({ id: 'foo', lang: 'en_US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('renders a tertiary button child', function() {
    expect(getShallow().find(NxButton)).toHaveProp('variant', 'tertiary');
  });

  it('renders a NxFormGroup child with a textarea NxTextInput', function() {
    const component = getShallow(),
        formGroup = component.find(NxFormGroup),
        input = formGroup.find(NxTextInput);

    expect(formGroup).toExist();
    expect(input).toExist();
    expect(input).toHaveProp('type', 'textarea');
  });

  it('sets the label and sublabel on the form group from its props', function() {
    expect(getShallow().find(NxFormGroup)).toHaveProp('label', 'Foo');
    expect(getShallow().find(NxFormGroup)).toHaveProp('sublabel', undefined);

    expect(getShallow({ sublabel: 'Bar' }).find(NxFormGroup)).toHaveProp('label', 'Foo');
    expect(getShallow({ sublabel: 'Bar' }).find(NxFormGroup)).toHaveProp('sublabel', 'Bar');
  });

  it('sets the NxTextInput value to the content', function() {
    expect(getShallow().find(NxTextInput)).toHaveProp('value', 'Lorem Ipsum');
  });

  it('sets readOnly on the NxTextInput', function() {
    expect(getShallow().find(NxTextInput)).toHaveProp('readOnly', true);
  });

  it('adds inputProps to the NxTextInput', function() {
    const textarea = getShallow({ inputProps: { rows: 1, id: 'foo' } }).find(NxTextInput);

    expect(textarea).toHaveProp('id', 'foo');
    expect(textarea).toHaveProp('rows', 1);
  });

  describe('when the button is clicked', function() {
    let container: HTMLElement | null = null;

    beforeEach(function() {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(function() {
      if (container) {
        document.body.removeChild(container);
      }
    });

    function getElementSelection(element: HTMLTextAreaElement | null) {
      return element && element.value.slice(element.selectionStart, element.selectionEnd);
    }

    describe('when navigator.clipboard is available', function() {
      let resolveClipboardPromise: Function | null,
          rejectClipboardPromise: Function | null;

      beforeEach(function() {
        Object.defineProperty(window.navigator, 'clipboard', {
          value: {
            writeText: jest.fn(() => {
              return new Promise((resolve, reject) => {
                resolveClipboardPromise = resolve;
                rejectClipboardPromise = reject;
              });
            })
          },
          configurable: true
        });
      });

      afterEach(function() {
        delete (window.navigator as any).clipboard;
      });

      it('copies the text using navigator.writeText', function() {
        const component = getMounted({}, { attachTo: container });

        expect(window.navigator.clipboard.writeText).not.toHaveBeenCalled();

        component.find(NxButton).simulate('click');

        expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('Lorem Ipsum');
      });

      it('calls onCopyUsingBtn after writing the text to the clipboard', async function() {
        const onCopyUsingBtn = jest.fn(),
            component = getMounted({ onCopyUsingBtn }, { attachTo: container });

        component.find(NxButton).simulate('click');

        expect(onCopyUsingBtn).not.toHaveBeenCalled();

        resolveClipboardPromise!();

        // the promise then() is called asynchronously so we must do our expectation of its result asynchronously
        // as well
        await runTimers();
        expect(onCopyUsingBtn).toHaveBeenCalled();
      });

      it('sets the text selection to the textarea\'s contents after writing the text to the clipboard',
          async function() {
            const component = getMounted({}, { attachTo: container }),
                textarea = component.find('textarea').getDOMNode() as HTMLTextAreaElement;

            expect(getElementSelection(textarea)).toBe('');

            component.find(NxButton).simulate('click');

            expect(getElementSelection(textarea)).toBe('');

            resolveClipboardPromise!();

            await runTimers();
            expect(getElementSelection(textarea)).toBe('Lorem Ipsum');
          }
      );

      it('does not call onCopyUsingBtn or set the text selection if the copy fails', async function() {
        const onCopyUsingBtn = jest.fn(),
            component = getMounted({ onCopyUsingBtn }, { attachTo: container }),
            textarea = component.find('textarea').getDOMNode() as HTMLTextAreaElement;

        component.find(NxButton).simulate('click');

        rejectClipboardPromise!('This is expected to be logged');

        await runTimers();
        expect(getElementSelection(textarea)).toBe('');
        expect(onCopyUsingBtn).not.toHaveBeenCalled();
      });
    });

    describe('when navigator.clipboard is not available', function() {
      afterEach(function() {
        if ((document as any).execCommand) {
          delete (document as any).execCommand;
        }
      });

      it('copies the text using document.execCommand', function() {
        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(function() {
            expect(getElementSelection(document.querySelector('textarea'))).toBe('Lorem Ipsum');
          }),
          configurable: true
        });

        const component = getMounted({}, { attachTo: container });

        expect(document.execCommand).not.toHaveBeenCalled();

        component.find(NxButton).simulate('click');

        expect(document.execCommand).toHaveBeenCalledWith('copy');
      });

      it('calls onCopyUsingBtn after writing the text to the clipboard', function() {
        const onCopyUsingBtn = jest.fn();

        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(function() {
            // shouldn't be called until after this
            expect(onCopyUsingBtn).not.toHaveBeenCalled();
            return true;
          }),
          configurable: true
        });

        const component = getMounted({ onCopyUsingBtn }, { attachTo: container });

        component.find(NxButton).simulate('click');

        expect(onCopyUsingBtn).toHaveBeenCalled();
      });

      it('does not call onCopyUsingBtn if the copy fails', function() {
        const onCopyUsingBtn = jest.fn();

        Object.defineProperty(document, 'execCommand', {
          value: jest.fn().mockImplementation(() => false),
          configurable: true
        });

        const component = getMounted({ onCopyUsingBtn }, { attachTo: container });

        component.find(NxButton).simulate('click');

        expect(onCopyUsingBtn).not.toHaveBeenCalled();
      });
    });
  });
});
