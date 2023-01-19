/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { screen, render } from '@testing-library/react';
import { rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import AbstractDropdown, {
  AbstractDropdownProps,
  AbstractDropdownRenderToggleElement
} from '../AbstractDropdown';

describe('AbstractDropdown', () => {
  const minimalProps = {
    isOpen: false,
    renderToggleElement: () => <button>Toggle</button>,
    onToggleCollapse: () => {}
  };

  const renderEl = rtlRenderElement<AbstractDropdownProps>(AbstractDropdown, minimalProps);

  const renderToggleElement: AbstractDropdownRenderToggleElement = (toggleRef, onToggleCollapse) => (
    <button type="button"
            data-testid="toggle-element"
            ref={toggleRef}
            onClick={onToggleCollapse}>
      Toggle
    </button>
  );

  it('renders toggleElement and calls onToggleCollapse when toggleElement is clicked', async function() {
    const user = userEvent.setup();

    const onToggleCollapse = jest.fn();

    renderEl({ renderToggleElement, onToggleCollapse });

    const button = screen.getByTestId('toggle-element');

    expect(button).toBeInTheDocument();

    expect(onToggleCollapse).not.toHaveBeenCalled();

    await user.click(button);

    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('renders children inside NxDropdownMenu when isOpen is true', function() {
    const childrenElement = <div data-testid="dropdown-menu-children">Hello</div>;

    const dropdownProps = {
      renderToggleElement,
      children: childrenElement,
      isOpen: true
    };

    const { rerender } = render(<AbstractDropdown {...dropdownProps} />, {});

    const child = screen.getByTestId('dropdown-menu-children');

    expect(child).toBeInTheDocument();

    rerender(<AbstractDropdown {...dropdownProps} isOpen={false} />);

    expect(child).not.toBeInTheDocument();
  });
});
