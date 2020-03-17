/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxTextInput, { Props } from '../NxTextInput';
import NxTooltip from '../../NxTooltip/NxTooltip';

describe('NxTextInput', function() {
  const minimalProps = {
        value: '',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxTextInput, minimalProps);

  it('renders a text input by default', function() {
    expect(getShallowComponent()).toMatchSelector('input');
    expect(getShallowComponent()).toHaveProp('type', 'text');
    expect(getShallowComponent().find(NxTooltip)).not.toExist();
  });

  it('renders a text input wrapped in a NxTooltip if there are validation errors', function() {
    expect(getShallowComponent({ validationErrors: 'foo' })).toMatchSelector(NxTooltip);
    expect(getShallowComponent().find('input')).toExist();
    expect(getShallowComponent().find('input')).toHaveProp('type', 'text');
  });

  it('renders a password input if type is "password"', function() {
    expect(getShallowComponent({ type: 'password' })).toMatchSelector('input');
    expect(getShallowComponent({ type: 'password' })).toHaveProp('type', 'password');
    expect(getShallowComponent().find(NxTooltip)).not.toExist();
  });

  it('renders a textarea if type is "textarea"', function() {
    expect(getShallowComponent({ type: 'textarea' })).toMatchSelector('textarea');
    expect(getShallowComponent({ type: 'textarea' })).toHaveProp('type', undefined);
    expect(getShallowComponent().find(NxTooltip)).not.toExist();
  });

  it('sets the value as specified', function() {
    expect(getShallowComponent({ value: 'foo' }).find('input')).toHaveProp('value', 'foo');
  });

  it('passes through specified classNames to the input', function() {
    expect(getShallowComponent({ className: 'foo bar' }).find('input')).toHaveClassName('foo');
    expect(getShallowComponent({ className: 'foo bar' }).find('input')).toHaveClassName('bar');
  });

  it('sets the nx-text-input className', function() {
    expect(getShallowComponent().find('input')).toHaveClassName('nx-text-input');
    expect(getShallowComponent({ className: 'foo bar' }).find('input')).toHaveClassName('nx-text-input');
    expect(getShallowComponent({ type: 'textarea' }).find('textarea')).toHaveClassName('nx-text-input');
  });

  it('sets the nx-text-input--pristine className iff isPristine is true', function() {
    expect(getShallowComponent().find('input')).not.toHaveClassName('nx-text-input--pristine');
    expect(getShallowComponent({ isPristine: true }).find('input')).toHaveClassName('nx-text-input--pristine');
  });

  it('sets the nx-tooltip--validation-error class on the tooltip', function() {
    expect(getShallowComponent({ validationErrors: 'foo' })).toHaveClassName('nx-tooltip--validation-error');
  });

  it('sets the tooltips `open` prop to true and sets the title to the first validation error if it exists', function() {
    expect(getShallowComponent({ validationErrors: 'foo' })).toHaveProp('open', true);
    expect(getShallowComponent({ validationErrors: 'foo' })).toHaveProp('title', 'foo');

    expect(getShallowComponent({ validationErrors: ['foo', 'bar'] })).toHaveProp('open', true);
    expect(getShallowComponent({ validationErrors: ['foo', 'bar'] })).toHaveProp('title', 'foo');
  });

  it('sets the nx-text-input--invalid className if there are validationErrors', function() {
    expect(getShallowComponent().find('input')).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: null }).find('input')).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: [] }).find('input')).not.toHaveClassName('nx-text-input--invalid');
    expect(getShallowComponent({ validationErrors: ['baaad'] }).find('input'))
        .toHaveClassName('nx-text-input--invalid');
  });

  it('sets the nx-text-input--valid className if there are not validationErrors', function() {
    expect(getShallowComponent().find('input')).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: null }).find('input')).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: [] }).find('input')).toHaveClassName('nx-text-input--valid');
    expect(getShallowComponent({ validationErrors: ['baaad'] }).find('input'))
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
