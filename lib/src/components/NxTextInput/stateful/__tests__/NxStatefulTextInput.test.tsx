/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import { createRef } from 'react';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import { PrivateNxTextInput } from '../../NxTextInput';
import NxStatefulTextInput, { PrivateNxStatefulTextInput, Props } from '../NxStatefulTextInput';

describe('PrivateNxStatefulTextInput', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(PrivateNxStatefulTextInput, {});

  it('renders a PrivateNxTextInput with the specified type and className', function() {
    const component = getShallowComponent({ type: 'textarea', className: 'foo' });

    expect(component).toMatchSelector(PrivateNxTextInput);
    expect(component).toHaveProp('type', 'textarea');
    expect(component).toHaveProp('className', 'foo');
  });

  it('renders with an empty value by default, and pristine set to true', function() {
    const component = getShallowComponent();

    expect(component).toHaveProp('value', '');
    expect(component).toHaveProp('isPristine', true);
  });

  it('starts with the value specified by defaultValue, and pristine set to true', function() {
    const component = getShallowComponent({ defaultValue: 'foo' });

    expect(component).toHaveProp('value', 'foo');
    expect(component).toHaveProp('isPristine', true);
  });

  it('sets isPristine to false when the onChange handler fires', function() {
    const component = getShallowComponent({ defaultValue: 'foo' });

    component.prop('onChange')('bar');

    component.update();

    expect(component).toHaveProp('isPristine', false);
  });

  it('updates the values when the onChange handler fires', function() {
    const component = getShallowComponent({ defaultValue: 'foo' });

    component.prop('onChange')('bar');

    component.update();

    expect(component).toHaveProp('value', 'bar');
  });

  it('passes onChange events to its own onChange prop', function() {
    const onChange = jest.fn(),
        component = getShallowComponent({ defaultValue: 'foo', onChange });

    expect(onChange).not.toHaveBeenCalled();

    component.prop('onChange')('bar');

    expect(onChange).toHaveBeenCalledWith('bar');
  });

  it('passes onKeyPress events to its own onKeyPress prop', function() {
    const onKeyPress = jest.fn(),
        component = getShallowComponent({ defaultValue: 'foo', onKeyPress });

    expect(onKeyPress).not.toHaveBeenCalled();

    component.prop('onKeyPress')('q');

    expect(onKeyPress).toHaveBeenCalledWith('q');
  });

  it('runs user value changes through the validator and passes the resulting validationErrors to NxTextInput',
      function() {
        const initialValidationErrors = 'must not be empty',
            validationErrors = ['foo is bad', 'expected bar'],
            validator = jest.fn()
                .mockReturnValueOnce(initialValidationErrors)
                .mockReturnValueOnce(validationErrors),
            component = getShallowComponent({ validator });

        expect(validator).toHaveBeenCalledWith('');
        expect(component).toHaveProp('validationErrors', initialValidationErrors);

        component.prop('onChange')('bar');
        component.update();

        expect(validator).toHaveBeenCalledWith('bar');
        expect(component).toHaveProp('validationErrors', validationErrors);
      }
  );

  it('passes no validationErrors if no validator is specified', function() {
    const component = getShallowComponent();

    expect(component).toHaveProp('validationErrors', null);

    component.prop('onChange')('bar');
    component.update();

    expect(component).toHaveProp('validationErrors', null);
  });

  it('passes through html props to the element', function() {
    expect(getShallowComponent({ disabled: false })).toHaveProp('disabled', false);
    expect(getShallowComponent({ disabled: true })).toHaveProp('disabled', true);
    expect(getShallowComponent({ type: 'textarea', disabled: true })).toHaveProp('disabled', true);
    expect(getShallowComponent({ id: 'test-id'})).toHaveProp('id', 'test-id');
    expect(getShallowComponent({ placeholder: 'test placeholder'})).toHaveProp('placeholder', 'test placeholder');
    expect(getShallowComponent({ minLength: 4 })).toHaveProp('minLength', 4);
    expect(getShallowComponent({ name: 'a-name' })).toHaveProp('name', 'a-name');
  });
});

describe('NxStatefulTextInput', function() {
  it('renders a PrivateNxStatefulTextInput with all of the same props and ref', function() {
    const onKeyPress = jest.fn(),
        onChange = jest.fn(),
        validator = jest.fn(),
        ref = createRef<HTMLDivElement>(),
        component = mount(
          <NxStatefulTextInput ref={ref}
                               type="textarea"
                               defaultValue="asdf"
                               id="bar"
                               className="baz"
                               validator={validator}
                               onKeyPress={onKeyPress}
                               onChange={onChange} />
        ).children();

    expect(ref.current).toBe(component.getDOMNode());
    expect(component).toMatchSelector(PrivateNxStatefulTextInput);
    expect(component).toHaveProp('type', 'textarea');
    expect(component).toHaveProp('defaultValue', 'asdf');
    expect(component).toHaveProp('id', 'bar');
    expect(component).toHaveProp('className', 'baz');
    expect(component).toHaveProp('validator', validator);
    expect(component).toHaveProp('onKeyPress', onKeyPress);
    expect(component).toHaveProp('onChange', onChange);
  });
});
