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
    let container: HTMLElement | null = null;

    function getElementSelection(element: HTMLTextAreaElement | null) {
      return element && element.value.slice(element.selectionStart, element.selectionEnd);
    }

    beforeEach(function() {
      container = document.createElement('div');
      document.body.appendChild(container);

    });

    afterEach(function() {
      if (container) {
        document.body.removeChild(container);
      }
    });

    it('copies the text to the clipboard', function() {
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
        }),
        configurable: true
      });

      const component = getMounted({ onCopyUsingBtn }, { attachTo: container });

      component.find(NxButton).simulate('click');

      expect(onCopyUsingBtn).toHaveBeenCalled();
    });
  });
});
