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
        expect(renderEl()!.tagName).toBe('LABEL');

        expect(quickRender().getByRole('radio')).toHaveAttribute('name', 'color');
        expect(quickRender().getByRole('radio')).not.toBeDisabled();
        expect(quickRender().getByRole('radio')).not.toBeChecked();
      }
  );

  it('adds classes specified with the className prop', function() {
    const el = renderEl({ className: 'foo' })!,
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('uses null as the value passed to onChange if the supplied value is null', async function() {
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
    it('disables the input', function() {
      expect(quickRender().getByRole('radio')).not.toBeDisabled();
      expect(quickRender({ disabled: false })?.getByRole('radio')).not.toBeDisabled();
      expect(quickRender({ disabled: true })?.getByRole('radio')).toBeDisabled();
    });
  });

  describe('isChecked prop', function () {
    it('sets the input to checked per the value of isChecked', function() {
      expect(quickRender({ isChecked: false })?.getByRole('radio')).not.toBeChecked();
      expect(quickRender({ isChecked: true })?.getByRole('radio')).toBeChecked();
    });

    it('adds the tm-checked class if isChecked is true, and the tm-unchecked class if it is false', function() {
      expect(renderEl()).toHaveClass('tm-unchecked');
      expect(renderEl()).not.toHaveClass('tm-checked');

      expect(renderEl({ isChecked: true })).not.toHaveClass('tm-unchecked');
      expect(renderEl({ isChecked: true })).toHaveClass('tm-checked');
    });
  });

  describe('children prop', function () {
    it('renders children with .bar as a descendent', function() {
      const { container, rerender } = quickRender();

      rerender(
        <NxRadio { ...minimalProps }>
          <div className="bar"></div>
        </NxRadio>
      );

      expect(container.querySelector('.bar')).toBeInTheDocument();
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
    expect(quickRender().getByRole('radio')).not.toHaveAttribute('readonly');
    expect(quickRender({ onChange: undefined })?.getByRole('radio')).toHaveAttribute('readonly');
    expect(quickRender({ onChange: null })?.getByRole('radio')).toHaveAttribute('readonly');
  });

  it('adds id attribute to radio input when radioId prop is provided', function () {
    expect(quickRender({radioId: 'color-red'}).getByRole('radio')).toHaveAttribute('id', 'color-red');
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const component = quickRender({
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

    expect(component.getByRole('radio')).toHaveAttribute('id', 'garfield');
    expect(component.getByRole('radio')).toHaveAttribute('name', 'garfield');
    expect(component.getByRole('radio')).toBeDisabled();
    expect(component.getByRole('radio')).toBeChecked();
  });
});
