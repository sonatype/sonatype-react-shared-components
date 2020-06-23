/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

import NxFilterInput, { Props } from '../NxFilterInput';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxFilterInput', function() {
  const minimalProps = { value: '' },
      shallowComponent = enzymeUtils.getShallowComponent<Props>(NxFilterInput, minimalProps);

  it('renders component with minimal props', function() {
    const component = shallowComponent();
    expect(component).toHaveClassName('nx-filter-input');
  });

  describe('when value prop is truthy', function() {
    it('renders the clear icon in the add-on', function() {
      const icon = shallowComponent({ value: 'test value' }).find(NxFontAwesomeIcon);
      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faTimes);
    });

    it('calls onClear if the icon is clicked', function() {
      const onClear = jest.fn(),
          iconWrapper = shallowComponent({
            value: 'test value',
            onClear
          }).find('.nx-filter-input__add-on');

      expect(iconWrapper).toExist();
      iconWrapper.simulate('click');
      expect(onClear).toHaveBeenCalled();
    });
  });

  describe('when value prop is an empty string', function() {
    it('renders the filter icon in the add-on', function() {
      const icon = shallowComponent().find(NxFontAwesomeIcon);
      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faFilter);
    });

    it('does not call onClear if the icon is clicked', function() {
      const onClear = jest.fn(),
          iconWrapper = shallowComponent({
            value: '',
            onClear
          }).find('.nx-filter-input__add-on');

      expect(iconWrapper).toExist();
      iconWrapper.simulate('click');
      expect(onClear).not.toHaveBeenCalled();
    });
  });

  it('calls onChange whenever a change occurs in the input', function() {
    const onChange = jest.fn(),
        input = shallowComponent({ onChange }).find('input');

    input.simulate('change', { currentTarget: { value: 'hello'}});
    expect(onChange).toHaveBeenCalledWith('hello');
  });

  it('passes unknown props to the div element', function() {
    const props = { className: 'extra-class', id: 'some-id' },
        componentDiv = shallowComponent(props);

    expect(componentDiv).toHaveClassName('extra-class');
    expect(componentDiv).toHaveProp('id', 'some-id');
  });

  it('passes placeholder, inputId and value props to the input element', function() {
    const props = { placeholder: 'a placeholder', value: 'a value', inputId: 'input-id'},
        input = shallowComponent(props).find('input');

    expect(input).toExist();
    expect(input).toHaveProp('placeholder', props.placeholder);
    expect(input).toHaveProp('value', props.value);
    expect(input).toHaveProp('id', props.inputId);
  });

  it('adds the nx-filter-input--disabled class iff the disabled prop is true', function() {
    expect(shallowComponent()).not.toHaveClassName('nx-filter-input--disabled');
    expect(shallowComponent({ disabled: null })).not.toHaveClassName('nx-filter-input--disabled');
    expect(shallowComponent({ disabled: false })).not.toHaveClassName('nx-filter-input--disabled');
    expect(shallowComponent({ disabled: true })).toHaveClassName('nx-filter-input--disabled');
  });

  it('sets the disabled flag on the <input> iff the disabled prop is true', function() {
    expect(shallowComponent().find('input')).toHaveProp('disabled', undefined);
    expect(shallowComponent({ disabled: null }).find('input')).toHaveProp('disabled', undefined);
    expect(shallowComponent({ disabled: false }).find('input')).toHaveProp('disabled', undefined);
    expect(shallowComponent({ disabled: true }).find('input')).toHaveProp('disabled', true);
  });
});
