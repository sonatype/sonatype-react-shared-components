/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import { faCaretDown, faTrash } from '@fortawesome/free-solid-svg-icons';

import NxDropdown, { Props } from '../NxDropdown';
import NxButton from '../../NxButton/NxButton';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';
import AbstractDropdown from '../AbstractDropdown';
import { NxDropdownDivider } from '../../../';
import { mount } from 'enzyme';

describe('NxDropdown', () => {
  let container: HTMLDivElement | null;

  const minimalProps = {
        label: 'dropdown',
        isOpen: false,
        onToggleCollapse: () => {}
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxDropdown, minimalProps),
      getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxDropdown, minimalProps);

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
    const component = getMountedComponent();
    const dropdown = component.find(AbstractDropdown);
    const button = dropdown.find(NxButton);
    const icon = button.find(NxFontAwesomeIcon);

    expect(dropdown).toHaveClassName('.nx-dropdown');
    expect(button).toHaveClassName('.nx-dropdown__toggle');
    expect(button).toHaveProp('variant', 'tertiary');
    expect(button).toHaveProp('type', 'button');
    expect(button.childAt(0)).toContainReact(<span className="nx-dropdown__toggle-label">dropdown</span>);
    expect(icon).toHaveProp('icon', faCaretDown);
  });

  it('sets toggle button aria-controls and menu id with unique id if menuId is not specified', function () {
    const component = getMountedComponent({ isOpen: true });
    const dropdown = component.find(AbstractDropdown);
    const button = dropdown.find(NxButton);

    const menuId = component.find(NxDropdownMenu).prop('id');
    expect(button).toHaveProp('aria-controls', menuId);
  });

  it('sets toggle button aria-controls and menu id with specified menuId', function() {
    const menuId = 'foo';
    const component = getMountedComponent({ isOpen: true, menuId });
    const dropdown = component.find(AbstractDropdown);
    const button = dropdown.find(NxButton);
    const menu = component.find(NxDropdownMenu);

    expect(button).toHaveProp('aria-controls', menuId);
    expect(menu).toHaveProp('id', menuId);
  });

  it('renders the button according to the supplied variant', function() {
    let component = getMountedComponent();
    expect(component.find(NxButton)).toHaveProp('variant', 'tertiary');

    component = getMountedComponent({ variant: 'primary' });
    expect(component.find(NxButton)).toHaveProp('variant', 'primary');

    component = getMountedComponent({ variant: 'secondary' });
    expect(component.find(NxButton)).toHaveProp('variant', 'secondary');

    component = getMountedComponent({ variant: 'error' });
    expect(component.find(NxButton)).toHaveProp('variant', 'error');
  });

  it('correctly renders the menu based on isOpen prop', function() {
    let component = getMountedComponent({ isOpen: true });
    expect(component.find(NxDropdownMenu)).toExist();

    component = getMountedComponent({ isOpen: false });
    expect(component.find(NxDropdownMenu)).not.toExist();
  });

  it('correctly assigns supplied classes', function() {
    const component = getShallowComponent({ className: 'class1 class2' });
    expect(component).toHaveClassName('nx-dropdown class1 class2');
  });

  it('disables the button (and the toggle fn) when the disabled prop is supplied', function() {
    const toggleFn = jest.fn(),
        component = getMountedComponent({ onToggleCollapse: toggleFn, disabled: true }),
        button = component.find(NxButton);

    expect(button).toHaveClassName('disabled');
    button.simulate('click');
    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('uses VDOM as label if supplied', function() {
    const label = <NxFontAwesomeIcon icon={faTrash} />,
        component = getMountedComponent({ label });
    const button = component.find(NxButton);

    expect(button.childAt(0)).toContainReact(label);
  });

  it('passes extra props', function() {
    const component = getShallowComponent({ id: 'some-id', title: 'title-prop' });
    expect(component).toHaveProp('id', 'some-id');
    expect(component).toHaveProp('title', 'title-prop');
  });

  it('renders the children within the NxDropdownMenu, wrapping nx-dropdown-links and nx-dropdown-buttons ' +
      'in NxOveflowTooltip', function() {
    const children = [
      <a id="link1" key="1">Link1</a>,
      <a id="link2" className="nx-dropdown-link" key="2">Link2</a>,
      <button id="link3" className="nx-dropdown-button" key="3">Link3</button>,
      <button id="link4" className="nx-dropdown-right-button" key="4">Link4</button>
    ];
    const component = getMountedComponent({ children, isOpen: true }),
        menu = component.find('div.nx-dropdown-menu');

    expect(menu.childAt(0)).toMatchElement(<a id="link1" key="1">Link1</a>);

    expect(menu.childAt(1)).toMatchSelector(NxOverflowTooltip);
    expect(menu.childAt(1).find('a')).toMatchElement(<a id="link2" key="2" className="nx-dropdown-link">Link2</a>);

    expect(menu.childAt(2)).toMatchSelector(NxOverflowTooltip);
    expect(menu.childAt(2).find('button')).toMatchElement(
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
      component!.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
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
      component!.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleCollapse if ESC is pressed within the component while the dropdown is open', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse, isOpen: true });

    component.simulate('keyDown', { key: 'Escape', preventDefault: jest.fn() });
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const component = getMountedComponent({ onToggleCollapse: jest.fn(), isOpen: true }),
        escPreventDefault = jest.fn(),
        otherPreventDefault = jest.fn();

    component.simulate('keyDown', { key: 'Escape', preventDefault: escPreventDefault });
    component.simulate('keyDown', { key: 'Q', preventDefault: otherPreventDefault });

    expect(escPreventDefault).toHaveBeenCalled();
    expect(otherPreventDefault).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the dropdown is closed', function() {
    const onToggleCollapse = jest.fn(),
        component = getMountedComponent({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('does not call onToggleCollapse if ESC is pressed within the component when the component is disabled',
      function() {
        const onToggleCollapse = jest.fn(),
            component = getMountedComponent({ onToggleCollapse, isOpen: true, disabled: true });

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
          component.find('button.nx-dropdown__toggle').getDOMNode()
              .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        });
        component.update();
        expect(onToggleCollapse).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleCollapse if a click happens when onCloseClick preventsDefault', function() {
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
      component.find('button.nx-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleCollapse).not.toHaveBeenCalled();
  });

  it('provides onCloseClick with an event object where the typical properties work correctly', function() {
    let evt: MouseEvent | undefined,

        // currentTarget is only set on the event object during the event handler, so to keep it around for assertions
        // we need to store it in a separate variable
        currentTarget: EventTarget | undefined;

    const onCloseClick = (event: MouseEvent) => {
          evt = event;
          currentTarget = evt.currentTarget || undefined;
        },
        component = getMountedComponent({ isOpen: true, onCloseClick }, { attachTo: container });

    expect(evt).toBeUndefined();

    act(() => {
      component.getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });

    expect(evt).toBeDefined();
    expect(evt).toBeInstanceOf(MouseEvent);
    expect(evt!.target).toBe(component.getDOMNode());
    expect(currentTarget).toBe(document);
    expect(evt!.clientX).toBeDefined();
    expect(evt!.button).toBeDefined();
  });

  it('moves focus to the dropdown toggle button if a menu item is focused when the dropdown is closed', function() {
    const component = getMountedComponent({
          children: <button className="nx-dropdown-button">Foo</button>,
          isOpen: true
        }, { attachTo: container }),
        menuBtn = component.find('button.nx-dropdown-button').getDOMNode() as HTMLElement,
        toggleBtn = component.find('button.nx-dropdown__toggle').getDOMNode();

    menuBtn.focus();
    expect(document.activeElement).toBe(menuBtn);

    component.setProps({ isOpen: false });
    expect(document.activeElement).toBe(toggleBtn);
  });

  describe('Divider', function() {
    it('is the same as NxDropdownDivider', function() {
      expect(NxDropdown.Divider).toBe(NxDropdownDivider);
    });

    it('renders an element', function() {
      expect(mount(<NxDropdown.Divider />)).not.toBeEmptyRender();
    });
  });
});
