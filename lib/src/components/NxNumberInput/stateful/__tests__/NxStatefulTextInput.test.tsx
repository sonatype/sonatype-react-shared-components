/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import NxNumberInput from '../../NxNumberInput';
import NxStatefulNumberInput, { Props } from '../NxStatefulNumberInput';

describe('NxStatefulNumberInput', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulNumberInput, {});

  it('renders a NxNumberInput with the specified type and className', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toMatchSelector(NxNumberInput);
    expect(component).toHaveProp('type', 'number');
    expect(component).toHaveProp('className', 'foo');
  });

  it('renders with an empty value by default, and pristine set to true', function() {
    const component = getShallowComponent();

    expect(component).toHaveProp('value', '');
    expect(component).toHaveProp('isPristine', true);
  });

  it('starts with the value specified by defaultValue, and pristine set to true', function() {
    const component = getShallowComponent({ defaultValue: '42' });

    expect(component).toHaveProp('value', '42');
    expect(component).toHaveProp('isPristine', true);
  });

  it('sets isPristine to false when the onChange handler fires', function() {
    const component = getShallowComponent({ defaultValue: '42' });

    component.prop('onChange')('99');

    component.update();

    expect(component).toHaveProp('isPristine', false);
  });

  it('updates the values when the onChange handler fires', function() {
    const component = getShallowComponent({ defaultValue: '42' });

    component.prop('onChange')('99');

    component.update();

    expect(component).toHaveProp('value', '99');
  });

  it('passes onChange events to its own onChange prop', function() {
    const onChange = jest.fn(),
        component = getShallowComponent({ defaultValue: '42', onChange });

    expect(onChange).not.toHaveBeenCalled();

    component.prop('onChange')('99');

    expect(onChange).toHaveBeenCalledWith('99');
  });

  it('passes onKeyPress events to its own onKeyPress prop', function() {
    const onKeyPress = jest.fn(),
        component = getShallowComponent({ defaultValue: '42', onKeyPress });

    expect(onKeyPress).not.toHaveBeenCalled();

    component.prop('onKeyPress')('q');

    expect(onKeyPress).toHaveBeenCalledWith('q');
  });

  it('runs user value changes through the validator and passes the resulting validationErrors to NxNumberInput',
      function() {
        const initialValidationErrors = 'must not be empty',
            validationErrors = ['foo is bad', 'expected bar'],
            validator = jest.fn()
                .mockReturnValueOnce(initialValidationErrors)
                .mockReturnValueOnce(validationErrors),
            component = getShallowComponent({ validator });

        expect(validator).toHaveBeenCalledWith('');
        expect(component).toHaveProp('validationErrors', initialValidationErrors);

        component.prop('onChange')('99');
        component.update();

        expect(validator).toHaveBeenCalledWith('99');
        expect(component).toHaveProp('validationErrors', validationErrors);
      }
  );

  it('passes no validationErrors if no validator is specified', function() {
    const component = getShallowComponent();

    expect(component).toHaveProp('validationErrors', null);

    component.prop('onChange')('99');
    component.update();

    expect(component).toHaveProp('validationErrors', null);
  });

  it('passes through html props to the element', function() {
    expect(getShallowComponent({ disabled: false })).toHaveProp('disabled', false);
    expect(getShallowComponent({ disabled: true })).toHaveProp('disabled', true);
    expect(getShallowComponent({ id: 'test-id'})).toHaveProp('id', 'test-id');
    expect(getShallowComponent({ placeholder: 'test placeholder'})).toHaveProp('placeholder', 'test placeholder');
    expect(getShallowComponent({ step: 4 })).toHaveProp('step', 4);
    expect(getShallowComponent({ min: 10 })).toHaveProp('min', 10);
    expect(getShallowComponent({ max: 100 })).toHaveProp('max', 100);
    expect(getShallowComponent({ name: 'a-name' })).toHaveProp('name', 'a-name');
  });
});
