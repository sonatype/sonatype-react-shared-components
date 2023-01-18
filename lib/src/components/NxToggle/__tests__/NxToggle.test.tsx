/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import * as rtlUtils from '../../../__testutils__/rtlUtils';

import { screen } from '@testing-library/react';
import { userEvent } from '../../../__testutils__/rtlUtils';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  const rtlRender = rtlUtils.rtlRender<Props>(NxToggle, simpleProps);

  it('renders a <label> with an <input>', function() {
    rtlRender();

    const checkbox = screen.getByRole<HTMLInputElement>('switch', { name: 'Enables whales' });

    expect(checkbox.tagName).toEqual('INPUT');

    const label = checkbox.labels?.[0];

    expect(label?.textContent).toEqual('Enables whales');
  });

  it('renders an input element with role switch with the correct attributes and classname', function() {
    rtlRender();

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('id', 'toggle-id');
    expect(checkbox).toHaveClass('nx-toggle__input');
  });

  it('adds classes specified with the className prop', function() {
    const { container } = rtlRender({ className: 'foo' });

    const root = container.children[0];

    expect(root).toHaveClass('foo');
    expect(root).toHaveClass('nx-toggle');
  });

  it('calls its onChange prop when the label is clicked', async function() {
    const user = userEvent.setup();

    const onChange = jest.fn();

    const { container } = rtlRender({ onChange });
    const label = container.querySelector('label') as HTMLLabelElement;

    expect(onChange).not.toHaveBeenCalled();
    await user.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls its onChange prop when the input is focused and space key is pressed', async function() {
    const user = userEvent.setup();

    const onChange = jest.fn();

    rtlRender({ onChange });

    const checkbox = screen.getByRole('switch');

    expect(onChange).not.toHaveBeenCalled();
    await checkbox.focus();
    await user.keyboard(' ');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const props: Props = {
      inputId: 'not-garfield',
      disabled: true,
      isChecked: true,
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'garfield',
        className: 'input-classname'
      }
    };

    rtlRender(props);

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('id', 'garfield');
    expect(checkbox).toHaveAttribute('name', 'garfield');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('input-classname');
    expect(checkbox).not.toHaveClass('label-classname');
    expect(checkbox).toBeChecked();
  });
});
