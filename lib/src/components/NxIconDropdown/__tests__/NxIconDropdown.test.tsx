/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import NxIconDropdown, { Props } from '../NxIconDropdown';
import NxButton from '../../NxButton/NxButton';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxIconDropdown', () => {
  let container: HTMLDivElement | null;

  const minimalProps = {
        title: 'Test tooltip',
        isOpen: false,
        onToggleCollapse: () => {}
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxIconDropdown, minimalProps),
      getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxIconDropdown, minimalProps);

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

  it('renders a button with the appropriate classes and type=button', function() {
    const component = getShallowComponent(),
        button = component.find(NxButton),
        defaultIcon = component.find(NxFontAwesomeIcon);

    expect(component).toHaveClassName('.nx-icon-dropdown');
    expect(defaultIcon).toHaveProp('icon', faEllipsisV);
    expect(button).toHaveClassName('.nx-icon-dropdown__toggle');
    expect(button).toHaveProp('variant', 'icon-only');
    expect(button).toHaveProp('type', 'button');
  });

  it('correctly renders a custom icon based on icon prop', function() {
    const component = getShallowComponent({ icon: faCog });
    expect(component.find(NxFontAwesomeIcon)).toHaveProp('icon', faCog);
  });

  it('correctly renders the menu based on isOpen prop', function() {
    let component = getShallowComponent({ isOpen: true });
    expect(component.find(NxDropdownMenu)).toExist();

    component = getShallowComponent({ isOpen: false });
    expect(component.find(NxDropdownMenu)).not.toExist();
  });

  it('correctly assigns supplied classes', function() {
    const component = getShallowComponent({ className: 'class1 class2' });
    expect(component).toHaveClassName('nx-icon-dropdown class1 class2');
  });

  it('disables the button (and the toggle fn) when the disabled prop is supplied', function() {
    const toggleFn = jest.fn(),
        component = getShallowComponent({ onToggleCollapse: toggleFn, disabled: true }),
        button = component.find(NxButton);

    expect(button).toHaveClassName('disabled');
    button.simulate('click');
    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('passes extra props', function() {
    const component = getShallowComponent({ id: 'some-id' });
    expect(component).toHaveProp('id', 'some-id');
  });

  it('renders the children within the NxDropdownMenu, wrapping nx-dropdown-links and nx-dropdown-buttons ' +
      'in NxOveflowTooltip', function() {
    const children = [
      <a id="link1" key="1">Link1</a>,
      <a id="link2" className="nx-dropdown-link" key="2">Link2</a>,
      <button id="link3" className="nx-dropdown-button" key="3">Link3</button>,
      <button id="link4" className="nx-dropdown-right-button" key="4">Link4</button>
    ];
    const component = getShallowComponent({ children, isOpen: true }),
        menu = component.find(NxDropdownMenu);

    expect(menu.childAt(0)).toMatchElement(<a id="link1" key="1">Link1</a>);

    expect(menu.childAt(1)).toMatchSelector(NxOverflowTooltip);
    expect(menu.childAt(1).children()).toMatchElement(<a id="link2" key="2" className="nx-dropdown-link">Link2</a>);

    expect(menu.childAt(2)).toMatchSelector(NxOverflowTooltip);
    expect(menu.childAt(2).children()).toMatchElement(
      <button id="link3" key="3" className="nx-dropdown-button">Link3</button>
    );

    expect(menu.childAt(3)).toMatchElement(
      <button id="link4" key="4" className="nx-dropdown-right-button">Link4</button>
    );
  });

  it('calls onToggleCollapse if a click happens anywhere when the dropdown is already open', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse, isOpen: true }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if a click happens anywhere when the dropdown is closed', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if a click happens anywhere when the dropdown is disabled', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse, isOpen: true, disabled: true }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('calls onToggleCollapse once when clicking to open the dropdown', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      component!.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse once when clicking to close the dropdown', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse, isOpen: true }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      component!.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse if ESC is pressed within the component while the dropdown is open', function() {
    const onToggleCollapse = jest.fn(),
        component = getShallowComponent({ onToggleCollapse, isOpen: true });

    component.simulate('keyDown', { key: 'Escape', preventDefault: jest.fn() });
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const component = getShallowComponent({ onToggleCollapse: jest.fn(), isOpen: true }),
        escPreventDefault = jest.fn(),
        otherPreventDefault = jest.fn();

    component.simulate('keyDown', { key: 'Escape', preventDefault: escPreventDefault });
    component.simulate('keyDown', { key: 'Q', preventDefault: otherPreventDefault });

    expect(escPreventDefault).toHaveBeenCalled();
    expect(otherPreventDefault).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the dropdown is closed', function() {
    const onToggleCollapse = jest.fn(),
        component = getShallowComponent({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the component is disabled',
      function() {
        const onToggleCollapse = jest.fn(),
            component = getShallowComponent({ onToggleCollapse, isOpen: true, disabled: true });

        expect(onToggleCollapse).not.toHaveBeenCalled();

        component.simulate('keyDown', { key: 'Escape' });
        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if ESC is pressed within the component and onCloseKeyDown preventsDefault',
      function() {
        const onToggleCollapse = jest.fn(),
            component = getMountedComponent({
              onToggleCollapse,
              isOpen: true,
              onCloseKeyDown: e => e.preventDefault()
            }, { attachTo: container });

        act(() => {
          component.find('button.nx-icon-dropdown__toggle').getDOMNode()
              .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        });
        component.update();
        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if a click happens anywhere other than the dropdown button when onCloseClick ' +
      'preventsDefault', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({
          children: <button className="nx-dropdown-button">Foo</button>,
          onToggleCollapse,
          isOpen: true,
          onCloseClick: e => e.preventDefault()
        }, { attachTo: container });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      component.find('.nx-dropdown-button').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).not.toHaveBeenCalled();

    act(() => {
      component.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed', function() {
    const component = getMountedComponent({
          children: <button className="nx-dropdown-button">Foo</button>,
          isOpen: true
        }, { attachTo: container }),
        menuBtn = component.find('button.nx-dropdown-button').getDOMNode() as HTMLElement,
        toggleBtn = component.find('button.nx-icon-dropdown__toggle').getDOMNode();

    menuBtn.focus();
    expect(document.activeElement).toBe(menuBtn);

    component.setProps({ isOpen: false });
    expect(document.activeElement).toBe(toggleBtn);
  });
});
