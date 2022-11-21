/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxRadio, { Props } from '../NxRadio';

describe('NxRadio', function() {
  const minimalProps: Props = {
    name: 'color',
    value: 'red',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: undefined
  };

  const renderEl = rtlRenderElement(NxRadio, minimalProps);
  const quickRender = rtlRender(NxRadio, minimalProps);

  it('renders a <label> containing a radio <input> and .nx-radio__circle and .nx-radio__outer-circle  elements',
      function() {
        const el = renderEl()!;

        expect(el.tagName).toBe('LABEL');
        expect(el).toHaveClass('nx-radio');

        expect(el.querySelector('input')).toHaveAttribute('name', 'color');
        expect(el.querySelector('input')).toHaveAttribute('type', 'radio');
        expect(el.querySelector('input')).not.toHaveAttribute('disabled');
        expect(el.querySelector('input')).not.toHaveAttribute('checked');

        expect(el.querySelector('input')).toHaveClass('nx-radio__input');

        expect(el.querySelector('svg')).toHaveClass('nx-radio__circle');
        expect(el.querySelector('circle')).toHaveClass('nx-radio__outer-circle');
      }
  );

  it('adds classes specified with the className prop', function() {
    const component = renderEl({ className: 'foo' });

    expect(component).toHaveClass('foo');
    expect(component).toHaveClass('nx-radio');
  });

  it('renders .nx-radio__inner-circle if it is checked', function() {
    expect(renderEl()?.querySelector('circle')).not.toHaveClass('nx-radio__inner-circle');

    expect(renderEl({ isChecked: true })?.querySelector('circle')).toHaveClass('nx-radio__inner-circle');
    expect(renderEl({ isChecked: true, disabled: true })?.querySelector('circle'))
        .toHaveClass('nx-radio__inner-circle');
  });

  it('uses null as the value passed to onChange', async function() {
    const onChange = jest.fn();
    const user = userEvent.setup();
    renderEl({ name: 'somename', value: null, onChange });

    await user.click(screen.getByRole('radio'));

    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('passes unknown props to the label element', function() {
    const el = renderEl({ id: 'foo', htmlFor: 'baz' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('for', 'baz');
  });

  describe('when disabled prop is true', function () {
    it('adds the nx-radio-checkbox--disabled class', function() {
      expect(renderEl()).not.toHaveClass('nx-radio-checkbox--disabled');
      expect(renderEl({ disabled: true })).toHaveClass('nx-radio-checkbox--disabled');
    });

    it('disables the input', function() {
      expect(renderEl()?.querySelector('input')).not.toHaveAttribute('disabled');
      expect(renderEl({ disabled: false })?.querySelector('input')).not.toHaveAttribute('disabled');
      expect(renderEl({ disabled: true })?.querySelector('input')).toHaveAttribute('disabled');
    });
  });

  describe('isChecked prop', function () {
    it('sets the input to checked per the value of isChecked', function() {
      expect(renderEl({ isChecked: false })?.querySelector('input')).not.toHaveAttribute('checked');
      expect(renderEl({ isChecked: true })?.querySelector('input')).toHaveAttribute('checked');
    });

    it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
      expect(renderEl()).toHaveClass('tm-unchecked');
      expect(renderEl()).not.toHaveClass('tm-checked');

      expect(renderEl({ isChecked: true })).not.toHaveClass('tm-unchecked');
      expect(renderEl({ isChecked: true })).toHaveClass('tm-checked');
    });
  });

  describe('children prop', function () {
    it('renders children nodes within an nx-radio__content <span>', function() {
      const { container, rerender } = quickRender();

      rerender(
        <NxRadio { ...minimalProps }>
          <div className="bar"></div>
        </NxRadio>
      );

      expect(container.querySelector('span.nx-radio__content .bar')).toBe;
    });

    it('does not render the .nx-radio__content element if there are no children', function() {
      const el = renderEl()!;
      expect(el).not.toHaveClass('nx-radio__content');
    });
  });

  it('calls its onChange prop with value argument when the input fires a change event', async function() {
    const onChange = jest.fn();
    renderEl({ onChange });
    const user = userEvent.setup();

    expect(onChange).not.toHaveBeenCalled();
    await user.click(screen.getByRole('radio'));

    expect(onChange).toHaveBeenCalledWith('red');
  });

  it('sets the input as readonly if there is no onChange handler', function() {
    expect(renderEl()?.querySelector('input')).not.toHaveAttribute('readOnly');
    expect(renderEl({ onChange: undefined })?.querySelector('input')).toHaveAttribute('readOnly');
    expect(renderEl({ onChange: null })?.querySelector('input')).toHaveAttribute('readOnly');
  });

  it('adds id attribute to radio input when radioId prop is provided', function () {
    const component = renderEl({ radioId: 'color-red'});
    expect(component?.querySelector('input')).toHaveAttribute('id', 'color-red');
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const component = renderEl({
      radioId: 'not-garfield',
      disabled: true,
      isChecked: true,
      name: 'garfield',
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'not-garfield',
        disabled: false,
        className: 'input-classname',
        checked: false
      } as Props['inputAttributes']
    });

    expect(component?.querySelector('input')).toHaveAttribute('id', 'garfield');
    expect(component?.querySelector('input')).toHaveAttribute('name', 'garfield');
    expect(component?.querySelector('input')).toHaveAttribute('disabled');
    expect(component?.querySelector('input')).toHaveClass('input-classname');
    expect(component?.querySelector('input')).not.toHaveClass('label-classname');
    expect(component?.querySelector('input')).toHaveAttribute('checked');
  });
});
