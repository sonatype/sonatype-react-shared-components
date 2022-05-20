/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  it('renders a <label> containing a toggle <input> and toggle control', function() {
    render(<NxToggle {...simpleProps}></NxToggle>);

    const checkbox = screen.getByRole('switch');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('id', 'toggle-id');
    expect(checkbox).toHaveClass('nx-toggle__input');

  });
});
