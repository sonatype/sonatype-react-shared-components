/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  function getShallowComponent(additionalProps?: Partial<Props>) {
    return shallow(<NxToggle { ...simpleProps } { ...additionalProps } />);
  }

  it('renders a <label> containing a toggle <input> and toggle control', function() {
    const shallowRender = getShallowComponent();

    expect(shallowRender).toMatchSelector('label.nx-toggle');

    expect(shallowRender.find('input')).toHaveProp('type', 'checkbox');
    expect(shallowRender.find('input')).toHaveProp('id', 'toggle-id');
    expect(shallowRender.find('input')).toHaveClassName('nx-toggle__input');

    expect(shallowRender.find('.nx-toggle__control')).toExist();
  });

  it('adds classes specified with the className prop', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-toggle');
  });

  it('adds the nx-toggle--disabled class if disabled is set', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-toggle--disabled');
    expect(getShallowComponent({ disabled: true })).toHaveClassName('nx-toggle--disabled');
  });

  it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
    expect(getShallowComponent()).toHaveClassName('tm-unchecked');
    expect(getShallowComponent()).not.toHaveClassName('tm-checked');

    expect(getShallowComponent({ isChecked: true })).not.toHaveClassName('tm-unchecked');
    expect(getShallowComponent({ isChecked: true })).toHaveClassName('tm-checked');
  });

  it('renders children nodes within an nx-toggle__content <span>', function() {
    const render = shallow(
      <NxToggle { ...simpleProps }>
        <div className="bar"></div>
      </NxToggle>
    );

    expect(render).toContainMatchingElement('label .nx-toggle__content .bar');
  });

  it('disables the input iff disabled is set', function() {
    expect(getShallowComponent().find('input')).toHaveProp('disabled', false);
    expect(getShallowComponent({ disabled: false }).find('input')).toHaveProp('disabled', false);
    expect(getShallowComponent({ disabled: true }).find('input')).toHaveProp('disabled', true);
  });

  it('sets the input to checked per the value of isChecked', function() {
    expect(getShallowComponent({ isChecked: false }).find('input')).toHaveProp('checked', false);
    expect(getShallowComponent({ isChecked: true }).find('input')).toHaveProp('checked', true);
  });

  it('calls its onChange prop when the input fires a change event', function() {
    const onChange = jest.fn(),
        component = getShallowComponent({ onChange });

    expect(onChange).not.toHaveBeenCalled();
    component.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });

  it('sets the input as readonly if there is no onChange handler', function() {
    expect(getShallowComponent().find('input')).toHaveProp('readOnly', false);
    expect(getShallowComponent({ onChange: undefined }).find('input')).toHaveProp('readOnly', true);
    expect(getShallowComponent({ onChange: null }).find('input')).toHaveProp('readOnly', true);
  });

  it('passes unknown props to the label element', function() {
    const component = getShallowComponent({ id: 'foo', htmlFor: 'baz' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('htmlFor', 'baz');
  });
});
