/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';

import AbstractDropdown, {
  AbstractDropdownProps,
  AbstractDropdownRenderToggleElement
} from '../AbstractDropdown';

describe('AbstractDropdown', () => {
  let container: HTMLDivElement | null;

  const minimalProps = {
    isOpen: false,
    renderToggleElement: () => <button>Toggle</button>,
    onToggleCollapse: () => {}
  };

  const getShallowComponent = enzymeUtils.getShallowComponent<AbstractDropdownProps>(AbstractDropdown, minimalProps);

  beforeEach(function() {
    // Avoid rendering directly on the body.
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function() {
    if (container) {
      document.body.removeChild(container);
      container = null;
    }
  });

  const renderToggleElement: AbstractDropdownRenderToggleElement = (toggleRef, onToggleCollapse) => (
    <button type="button"
            id="toggle-element"
            ref={toggleRef}
            onClick={onToggleCollapse}>
      Toggle
    </button>
  );

  it('passes menuId to dropdown menu id', function() {
    const menuId = 'foo';
    const component = getShallowComponent({ renderToggleElement, isOpen: true, menuId });
    const menu = component.find(NxDropdownMenu);
    expect(menu).toHaveProp('id', menuId);
  });

  it('renders toggleElement and calls onToggleCollapse when toggleElement is clicked', function() {
    const onToggleCollapse = jest.fn();

    const component = getShallowComponent({ renderToggleElement, onToggleCollapse });
    const button = component.find('#toggle-element');

    expect(button).toExist();

    expect(onToggleCollapse).not.toHaveBeenCalled();

    button.simulate('click');

    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('renders children inside NxDropdownMenu when isOpen is true', function() {
    const childrenElement = <div id="dropdown-menu-children">Hello</div>;

    const component = getShallowComponent({
      renderToggleElement,
      children: childrenElement,
      isOpen: true
    });

    let child = component.find('#dropdown-menu-children');

    expect(child).toExist();
    expect(child).toMatchElement(childrenElement);

    component.setProps({ isOpen: false });

    child = component.find('#dropdown-menu-children');
    expect(child).not.toExist();
  });
});
