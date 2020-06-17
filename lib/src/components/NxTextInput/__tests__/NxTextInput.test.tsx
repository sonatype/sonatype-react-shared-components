/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxTextInput, { Props } from '../NxTextInput';

describe('NxTextInput', function() {
  const minimalProps = {
        value: '',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxTextInput, minimalProps);

  it('renders a textarea if type is "textarea"', function() {
    expect(getShallowComponent({ type: 'textarea' }).find('textarea')).toMatchSelector('textarea');
    expect(getShallowComponent({ type: 'textarea' }).find('textarea')).toHaveProp('type', undefined);
  });

  it('sets the value as specified', function() {
    expect(getShallowComponent({ value: 'foo' }).find('textarea')).toHaveProp('value', 'foo');
  });

  it('accepts custom classes', function() {
    expect(getShallowComponent({ className: 'foo bar' })).toHaveClassName('foo');
    expect(getShallowComponent({ className: 'foo bar' })).toHaveClassName('bar');
  });

  it('sets the nx-text-input className', function() {
    expect(getShallowComponent().find('input')).toHaveClassName('nx-text-input__input');
    expect(getShallowComponent({ className: 'foo bar' }).find('input')).toHaveClassName('nx-text-input__input');
    expect(getShallowComponent({ type: 'textarea' }).find('textarea')).toHaveClassName('nx-text-input__input');
  });

  it('sets the nx-text-input--pristine className iff isPristine is true', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-text-input--pristine');
    expect(getShallowComponent({ isPristine: true })).toHaveClassName('nx-text-input--pristine');
  });

  it('sets the nx-text-input--invalid className if there are validationErrors', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: null })).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: [] })).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: ['baaad'] })).toHaveClassName('nx-text-input--invalid');
  });

  it('sets the nx-text-input--valid className if there are not validationErrors', function() {
    expect(getShallowComponent()).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: null })).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: [] })).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: ['baaad'] }))
        .not.toHaveClassName('nx-text-input--valid');
  });

  it('passes through html props to the input element', function() {
    expect(getShallowComponent({ disabled: false }).find('input')).toHaveProp('disabled', false);
    expect(getShallowComponent({ disabled: true }).find('input')).toHaveProp('disabled', true);
    expect(getShallowComponent({ type: 'textarea', disabled: true }).find('textarea')).toHaveProp('disabled', true);
    expect(getShallowComponent({ id: 'test-id'}).find('input')).toHaveProp('id', 'test-id');
    expect(getShallowComponent({ placeholder: 'test placeholder'}).find('input'))
        .toHaveProp('placeholder', 'test placeholder');
    expect(getShallowComponent({ minLength: 4 }).find('input')).toHaveProp('minLength', 4);
    expect(getShallowComponent({ name: 'a-name' }).find('input')).toHaveProp('name', 'a-name');
  });

  it('calls onChange with the new value of the input element', function() {
    const onChange = jest.fn(),
        element = getShallowComponent({ onChange }).find('input');

    expect(onChange).not.toHaveBeenCalled();

    element.simulate('change', { currentTarget: { value: 'foo' } });

    expect(onChange).toHaveBeenCalledWith('foo');
  });

  it('calls onKeyPress with the key value', function() {
    const onKeyPress = jest.fn(),
        element = getShallowComponent({ onKeyPress }).find('input');

    expect(onKeyPress).not.toHaveBeenCalled();

    element.simulate('keyPress', { key: 'a' });

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });
});
