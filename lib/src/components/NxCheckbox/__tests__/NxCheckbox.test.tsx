/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import NxCheckbox, { Props } from '../NxCheckbox';

describe('NxCheckbox', function() {
  const simpleProps: Props = {
    checkboxId: 'checkbox-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: undefined
  };

  function getShallowComponent(additionalProps?: Partial<Props>) {
    return shallow(<NxCheckbox { ...simpleProps } { ...additionalProps } />);
  }

  it('renders a <label> containing a checkbox <input> and visible box', function() {
    const shallowRender = getShallowComponent();

    expect(shallowRender).toMatchSelector('label.nx-checkbox');

    expect(shallowRender.find('input')).toHaveProp('type', 'checkbox');
    expect(shallowRender.find('input')).toHaveProp('id', 'checkbox-id');
    expect(shallowRender.find('input')).toHaveClassName('nx-checkbox__input');

    expect(shallowRender.find('.nx-checkbox__box')).toExist();

    // space is nbsp for empty box
    expect(shallowRender).toHaveText(' ');
  });

  it('adds classes specified with the className prop', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-checkbox');
  });

  it('renders a faCheck FontAwesomeIcon inside the box when checked', function() {
    expect(getShallowComponent()).not.toContainReact(<FontAwesomeIcon icon={faCheck} />);

    // icon and no nbsp when checked
    expect(getShallowComponent({ isChecked: true }).find('.nx-checkbox__box'))
        .toMatchElement(<span className="nx-checkbox__box"><FontAwesomeIcon icon={faCheck} /></span>);
  });

  it('renders no label text if none is provided', function() {
    // space is nbsp for empty box
    expect(shallow(<NxCheckbox checkboxId="checkbox-id" isChecked={false} onChange={() => {}} />)).toHaveText(' ');
  });

  it('adds the nx-radio-checkbox--disabled class if disabled is set', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-radio-checkbox--disabled');
    expect(getShallowComponent({ disabled: true })).toHaveClassName('nx-radio-checkbox--disabled');
  });

  it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
    expect(getShallowComponent()).toHaveClassName('tm-unchecked');
    expect(getShallowComponent()).not.toHaveClassName('tm-checked');

    expect(getShallowComponent({ isChecked: true })).not.toHaveClassName('tm-unchecked');
    expect(getShallowComponent({ isChecked: true })).toHaveClassName('tm-checked');
  });

  it('renders children nodes within an nx-checkbox__content <span>', function() {
    const render = shallow(
      <NxCheckbox { ...simpleProps }>
        <div className="bar"></div>
      </NxCheckbox>
    );

    expect(render).toContainMatchingElement('label .nx-checkbox__content .bar');
  });

  it('does not render the .nx-checkbox__content element if there are no children', function() {
    expect(getShallowComponent()).not.toContainMatchingElement('.nx-checkbox__content');
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
