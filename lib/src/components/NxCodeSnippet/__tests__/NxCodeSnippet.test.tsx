/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import { default as NxCodeSnippet, Props } from '../NxCodeSnippet';
import NxButton from '../../NxButton/NxButton';
import NxFormGroup from '../../NxFormGroup/NxFormGroup';
import NxTextInput from '../../NxTextInput/NxTextInput';

describe('NxCodeSnippet', function() {
  const minimalProps: Props = {
        label: 'Foo',
        content: 'Lorem Ipsum'
      },
      getShallow = getShallowComponent(NxCodeSnippet, minimalProps),
      getMounted = getMountedComponent(NxCodeSnippet, minimalProps);

  it('renders a div with the nx-code-snippet class', function() {
    expect(getShallow()).toMatchSelector('div.nx-code-snippet');
  });

  it('adds specified classes to the div', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-code-snippet');
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

  describe('when the button is clicked', function() {
    let container: HTMLElement | null = null,
        resolveClipboardPromise: Function | null,
        rejectClipboardPromise: Function | null;


    beforeEach(function() {
      container = document.createElement('div');
      document.body.appendChild(container);

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
      if (container) {
        document.body.removeChild(container);
      }
    });

    function getElementSelection(element: HTMLTextAreaElement) {
      return element.value.slice(element.selectionStart, element.selectionEnd);
    }

    it('copies the text to the clipboard', function() {
      jest.spyOn(window.navigator.clipboard, 'writeText');

      const component = getMounted({}, { attachTo: container });

      expect(window.navigator.clipboard.writeText).not.toHaveBeenCalled();

      component.find(NxButton).simulate('click');

      expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('Lorem Ipsum');
    });

    it('calls onCopyUsingBtn after writing the text to the clipboard', function(done) {
      const onCopyUsingBtn = jest.fn(),
          component = getMounted({ onCopyUsingBtn }, { attachTo: container });

      component.find(NxButton).simulate('click');

      expect(onCopyUsingBtn).not.toHaveBeenCalled();

      resolveClipboardPromise!();

      // the promise then() is called asynchronously so we must do our expectation of its result asynchronously
      // as well
      setTimeout(function() {
        expect(onCopyUsingBtn).toHaveBeenCalled();
        done();
      }, 0);
    });

    it('sets the text selection to the textarea\'s contents after writing the text to the clipboard', function(done) {
      const component = getMounted({}, { attachTo: container }),
          textarea = component.find('textarea').getDOMNode() as HTMLTextAreaElement;

      expect(getElementSelection(textarea)).toBe('');

      component.find(NxButton).simulate('click');

      expect(getElementSelection(textarea)).toBe('');

      resolveClipboardPromise!();

      setTimeout(function() {
        expect(getElementSelection(textarea)).toBe('Lorem Ipsum');
        done();
      }, 0);
    });

    it('does not call onCopyUsingBtn or set the text selection if the copy fails', function(done) {
      const onCopyUsingBtn = jest.fn(),
          component = getMounted({ onCopyUsingBtn }, { attachTo: container }),
          textarea = component.find('textarea').getDOMNode() as HTMLTextAreaElement;

      component.find(NxButton).simulate('click');

      rejectClipboardPromise!();

      setTimeout(function() {
        expect(getElementSelection(textarea)).toBe('');

        expect(onCopyUsingBtn).not.toHaveBeenCalled();
        done();
      }, 0);
    });
  });
});
