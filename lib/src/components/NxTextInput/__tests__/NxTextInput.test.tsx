/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxTextInput, { Props } from '../NxTextInput';

describe('NxTextInput', function() {
  const minimalProps = {
        value: '',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxTextInput, minimalProps);

  it('renders an .nx-text-input div', function() {
    expect(getShallowComponent()).toMatchSelector('div.nx-text-input');
  });

  it('contains an nx-text-input__box containing the input and validation icons', function() {
    expect(getShallowComponent()).toContainMatchingElement('.nx-text-input__box');
    expect(getShallowComponent()).toContainMatchingElement('.nx-text-input__box input.nx-text-input__input');
    expect(getShallowComponent()).toContainMatchingElement('.nx-text-input__box .nx-icon--valid');
    expect(getShallowComponent()).toContainMatchingElement('.nx-text-input__box .nx-icon--invalid');
  });

  it('contains the first validation message if isPristine is not true', function() {
    const validationErrorProps = { validatable: true, validationErrors: 'foo' },
        multiErrorValidationProps = { validatable: true, validationErrors: ['asdf', 'foo'] };

    expect(getShallowComponent()).toContainMatchingElement('.nx-text-input__invalid-message');
    expect(getShallowComponent().find('.nx-text-input__invalid-message')).toHaveText('');

    expect(getShallowComponent(validationErrorProps).find('.nx-text-input__invalid-message'))
        .toHaveText('foo');

    expect(getShallowComponent(multiErrorValidationProps).find('.nx-text-input__invalid-message'))
        .toHaveText('asdf');

    expect(getShallowComponent({ ...validationErrorProps, isPristine: true }).find('.nx-text-input__invalid-message'))
        .toHaveText('');
  });

  it('places the alert role on the invalid message and references it as aria-errormessage', function() {
    const component = getShallowComponent(),
        invalidMessage = component.find('.nx-text-input__invalid-message'),
        invalidMessageId = invalidMessage.prop('id');

    expect(invalidMessage).toHaveProp('role', 'alert');
    expect(invalidMessageId).toBeTruthy();
    expect(component.find('.nx-text-input__input')).toHaveProp('aria-errormessage', invalidMessageId);
  });

  it('sets aria-invalid to true iff it is validatable and has validation errors', function() {
    expect(getShallowComponent().find('input')).not.toHaveProp('aria-invalid', true);
    expect(getShallowComponent({ validatable: true }).find('input')).not.toHaveProp('aria-invalid', true);
    expect(getShallowComponent({ validatable: true, validationErrors: 'foo' }).find('input'))
        .toHaveProp('aria-invalid', true);
  });

  it('renders a text input by default', function() {
    expect(getShallowComponent().find('input')).toHaveProp('type', 'text');
  });

  it('renders a password input if type is "password"', function() {
    expect(getShallowComponent({ type: 'password' }).find('input')).toHaveProp('type', 'password');
  });

  it('renders a textarea if type is "textarea"', function() {
    expect(getShallowComponent({ type: 'textarea' })).not.toContainMatchingElement('input');
    expect(getShallowComponent({ type: 'textarea' })).toContainMatchingElement('textarea');
    expect(getShallowComponent({ type: 'textarea' }).find('textarea')).toHaveProp('type', undefined);
  });

  it('adds the nx-text-input--textarea class if type is "textarea"', function() {
    expect(getShallowComponent({ type: 'textarea' })).toHaveClassName('nx-text-input--textarea');
  });

  it('uses faCheck for the valid icon', function() {
    expect(getShallowComponent().find('.nx-icon--valid')).toHaveProp('icon', faCheck);
  });

  it('uses faExclamationCircle for the invalid icon', function() {
    expect(getShallowComponent().find('.nx-icon--invalid')).toHaveProp('icon', faExclamationCircle);
  });

  it('sets the value as specified', function() {
    expect(getShallowComponent({ value: 'foo' }).find('input')).toHaveProp('value', 'foo');
    expect(getShallowComponent({ type: 'textarea', value: 'foo' }).find('textarea')).toHaveProp('value', 'foo');
  });

  it('accepts custom classes', function() {
    expect(getShallowComponent({ className: 'foo bar' })).toHaveClassName('foo');
    expect(getShallowComponent({ className: 'foo bar' })).toHaveClassName('bar');
  });

  it('sets the pristine className iff isPristine is true', function() {
    expect(getShallowComponent()).not.toHaveClassName('pristine');
    expect(getShallowComponent({ isPristine: true })).toHaveClassName('pristine');
  });

  describe('when validatable is true', function() {
    const validatable = { validatable: true };

    it('sets the invalid className if there are validationErrors and isPristine is not true', function() {
      expect(getShallowComponent({ ...validatable, validationErrors: 'bad' })).toHaveClassName('invalid');
      expect(getShallowComponent({ ...validatable, validationErrors: ['baaad', 'asdf'] })).toHaveClassName('invalid');

      expect(getShallowComponent({ ...validatable, validationErrors: 'bad' })).not.toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, validationErrors: ['baaad', 'asdf'] }))
          .not.toHaveClassName('valid');
    });

    it('sets the valid className if there are not validationErrors', function() {
      expect(getShallowComponent({ ...validatable })).toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, validationErrors: null })).toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, validationErrors: [] })).toHaveClassName('valid');

      expect(getShallowComponent({ ...validatable })).not.toHaveClassName('invalid');
      expect(getShallowComponent({ ...validatable, validationErrors: null })).not.toHaveClassName('invalid');
      expect(getShallowComponent({ ...validatable, validationErrors: [] })).not.toHaveClassName('invalid');
    });

    it('does not set the valid or invalid classes if isPristine is true', function() {
      expect(getShallowComponent({ ...validatable, isPristine: true, validationErrors: ['baaad', 'asdf'] }))
          .not.toHaveClassName('invalid');

      expect(getShallowComponent({ ...validatable, isPristine: true })).not.toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, isPristine: true, validationErrors: null }))
          .not.toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, isPristine: true, validationErrors: [] }))
          .not.toHaveClassName('valid');
    });
  });

  describe('when validatable is not true', function() {
    const validatable = { validatable: false };

    it('never sets the invalid className', function() {
      expect(getShallowComponent()).not.toHaveClassName('invalid');
      expect(getShallowComponent({ validationErrors: 'baad' })).not.toHaveClassName('invalid');
      expect(getShallowComponent({ validationErrors: ['baaad'] })).not.toHaveClassName('invalid');

      expect(getShallowComponent({ ...validatable, validationErrors: 'baad' })).not.toHaveClassName('invalid');
      expect(getShallowComponent({ ...validatable, validationErrors: ['baaad'] })).not.toHaveClassName('invalid');
    });

    it('never sets the valid className', function() {
      expect(getShallowComponent()).not.toHaveClassName('valid');
      expect(getShallowComponent({ validationErrors: null })).not.toHaveClassName('valid');
      expect(getShallowComponent({ validationErrors: [] })).not.toHaveClassName('valid');

      expect(getShallowComponent({ ...validatable, validationErrors: null })).not.toHaveClassName('valid');
      expect(getShallowComponent({ ...validatable, validationErrors: [] })).not.toHaveClassName('valid');
    });
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

  it('calls onChange with the new value of the input element and event that fired', function() {
    const onChange = jest.fn(),
        givenChangeEvent = { currentTarget: { value: 'foo' }},
        element = getShallowComponent({ onChange }).find('input');

    expect(onChange).not.toHaveBeenCalled();

    element.simulate('change', givenChangeEvent);

    expect(onChange).toHaveBeenCalledWith('foo', givenChangeEvent);
  });

  it('calls onKeyPress with the key value', function() {
    const onKeyPress = jest.fn(),
        element = getShallowComponent({ onKeyPress }).find('input');

    expect(onKeyPress).not.toHaveBeenCalled();

    element.simulate('keyPress', { key: 'a' });

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });
});
