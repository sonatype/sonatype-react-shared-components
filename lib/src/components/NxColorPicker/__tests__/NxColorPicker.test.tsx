/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';

import NxColorPicker from '../NxColorPicker';
import NxTooltip from '../../NxTooltip/NxTooltip';

describe('NxColorPicker', function() {
  const getShallow = getShallowComponent(NxColorPicker, {}),
      getMounted = getMountedComponent(NxColorPicker, {});

  it('renders a fieldset with the nx-color-picker class', function() {
    expect(getShallow()).toMatchSelector('fieldset.nx-color-picker');
  });

  it('adds any custom classes to the fieldset', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-color-picker');
  });

  it('adds specified extra attributes to the fieldset', function() {
    const component = getShallow({ id: 'foo', lang: 'en_US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('renders a label.nx-color-picker__color wrapped around a input.nx-color-picker__input radio for each color',
      function() {
        const component = getMounted(),
            labels = component.find('label.nx-color-picker__color');

        expect(labels).toHaveLength(9);

        labels.forEach(function(label) {
          expect(label).toContainMatchingElement('input.nx-color-picker__input');
          expect(label.find('input')).toHaveProp('type', 'radio');
        });
      }
  );

  it('sets a --color modifier class with the color name on each label', function() {
    const component = getMounted(),
        labels = component.find('label.nx-color-picker__color');

    expect(labels.filter('.nx-color-picker__color--light-blue')).toExist();
    expect(labels.filter('.nx-color-picker__color--purple')).toExist();
    expect(labels.filter('.nx-color-picker__color--pink')).toExist();
    expect(labels.filter('.nx-color-picker__color--blue')).toExist();
    expect(labels.filter('.nx-color-picker__color--red')).toExist();
    expect(labels.filter('.nx-color-picker__color--green')).toExist();
    expect(labels.filter('.nx-color-picker__color--orange')).toExist();
    expect(labels.filter('.nx-color-picker__color--yellow')).toExist();
    expect(labels.filter('.nx-color-picker__color--lime')).toExist();
  });

  it('wraps each label in a tooltip with a display friendly color name', function() {
    const component = getMounted(),
        tooltips = component.find(NxTooltip);

    expect(tooltips).toHaveLength(9);

    expect(tooltips.filterWhere(tooltip => tooltip.prop('title') === 'Light Blue'))
        .toContainMatchingElement('label.nx-color-picker__color--light-blue');

    expect(tooltips.filterWhere(tooltip => tooltip.prop('title') === 'Green'))
        .toContainMatchingElement('label.nx-color-picker__color--green');
  });

  it('sets a random common name attr on each radio', function() {
    const component1 = getMounted(),
        component2 = getMounted(),
        inputs1 = component1.find('input'),
        inputs2 = component2.find('input'),
        name1 = inputs1.at(0).prop('name'),
        name2 = inputs2.at(0).prop('name');

    expect(name1).toBeTruthy();
    expect(name2).toBeTruthy();
    expect(name1).not.toBe(name2);

    inputs1.forEach(function(input) {
      expect(input).toHaveProp('name', name1);
    });

    inputs2.forEach(function(input) {
      expect(input).toHaveProp('name', name2);
    });
  });

  it('sets the corresponding color value on each input', function() {
    const component = getMounted(),
        labels = component.find('.nx-color-picker__color');

    expect(labels.filterWhere(label => label.hasClass('nx-color-picker__color--light-blue')).find('input'))
        .toHaveProp('value', 'light-blue');

    expect(labels.filterWhere(label => label.hasClass('nx-color-picker__color--green')).find('input'))
        .toHaveProp('value', 'green');
  });

  it('sets the checked attr to true only on the input matching the value', function() {
    const noneSelectedComponent = getMounted(),
        greenSelectedComponent = getMounted({ value: 'green' });

    expect(noneSelectedComponent.find('input').filterWhere(input => !!input.prop('checked'))).not.toExist();

    expect(greenSelectedComponent.find('input').filterWhere(input => !!input.prop('checked')))
        .toHaveProp('value', 'green');
  });

  it('sets the selected class on the label of the selected color', function() {
    expect(getMounted({ value: 'green' }).find('.nx-color-picker__color.selected'))
        .toHaveClassName('nx-color-picker__color--green');
  });

  it('fires its onChange handler with the color of the clicked input', function() {
    const onChange = jest.fn(),
        component = getMounted({ onChange });

    expect(onChange).not.toHaveBeenCalled();

    component.find('input').filterWhere(input => input.prop('value') === 'green').simulate('change');

    expect(onChange).toHaveBeenCalledWith('green');
  });

  it('does nothing when an input is clicked with no onChange prop', function() {
    const component = getMounted();

    component.find('input').filterWhere(input => input.prop('value') === 'green').simulate('change');

    // shouldn't throw an exception
  });
});
