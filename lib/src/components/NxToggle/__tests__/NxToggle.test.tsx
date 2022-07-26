/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  it('renders a <label> with an <input>', function() {
    render(<NxToggle {...simpleProps}></NxToggle>);

    const checkbox = screen.getByRole<HTMLInputElement>('switch', { name: 'Enables whales' });

    expect(checkbox.tagName).toEqual('INPUT');

    const label = checkbox.labels?.[0];

    expect(label?.textContent).toEqual('Enables whales');
  });

  it('renders an input element with role switch with the correct attributes and classname', function() {
    render(<NxToggle {...simpleProps}></NxToggle>);

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('id', 'toggle-id');
    expect(checkbox).toHaveClass('nx-toggle__input');
  });

  it('adds classes specified with the className prop', function() {
    const { container } = render(<NxToggle {...simpleProps} className="foo"></NxToggle>);

    const label = container.querySelector('label');

    expect(label).toHaveClass('foo');
    expect(label).toHaveClass('nx-toggle');
  });

  it('calls its onChange prop when the input is clicked', async function() {
    const user = userEvent.setup();

    const onChange = jest.fn();

    render(<NxToggle {...simpleProps} onChange={onChange}></NxToggle>);

    const checkbox = screen.getByRole('switch');

    expect(onChange).not.toHaveBeenCalled();

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalled();
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

    render(<NxToggle {...props}></NxToggle>);

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('id', 'garfield');
    expect(checkbox).toHaveAttribute('name', 'garfield');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('input-classname');
    expect(checkbox).not.toHaveClass('label-classname');
    expect(checkbox).toBeChecked();
  });
});
