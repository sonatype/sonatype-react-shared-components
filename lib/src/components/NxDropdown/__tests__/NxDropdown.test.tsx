/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { faCaretDown, faTrash } from '@fortawesome/free-solid-svg-icons';

import NxDropdown, { Props } from '../NxDropdown';
import NxButton from '../../NxButton/NxButton';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';

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
    const component = getShallowComponent(),
        button = component.find(NxButton);

    expect(component).toHaveClassName('.nx-dropdown');
    expect(button).toHaveClassName('.nx-dropdown__toggle');
    expect(button).toHaveProp('variant', 'tertiary');
    expect(button).toHaveProp('type', 'button');
    expect(button.childAt(0)).toContainReact(<span className="nx-dropdown__toggle-label">dropdown</span>);
    expect(button.childAt(1)).toHaveProp('icon', faCaretDown);
  });

  it('renders the button according to the supplied variant', function() {
    let component = getShallowComponent();
    expect(component.find(NxButton)).toHaveProp('variant', 'tertiary');

    component = getShallowComponent({ variant: 'primary' });
    expect(component.find(NxButton)).toHaveProp('variant', 'primary');

    component = getShallowComponent({ variant: 'secondary' });
    expect(component.find(NxButton)).toHaveProp('variant', 'secondary');

    component = getShallowComponent({ variant: 'error' });
    expect(component.find(NxButton)).toHaveProp('variant', 'error');
  });

  it('correctly renders the menu based on isOpen prop', function() {
    let component = getShallowComponent({ isOpen: true });
    expect(component.find('.nx-dropdown-menu')).toExist();

    component = getShallowComponent({ isOpen: false });
    expect(component.find('.nx-dropdown-menu')).not.toExist();
  });

  it('correctly assigns supplied classes', function() {
    const component = getShallowComponent({ className: 'class1 class2' });
    expect(component).toHaveClassName('nx-dropdown class1 class2');
  });

  it('disables the button (and the toggle fn) when the disabled prop is supplied', function() {
    const toggleFn = jest.fn(),
        component = getShallowComponent({ onToggleCollapse: toggleFn, disabled: true }),
        button = component.find(NxButton);

    expect(button).toHaveClassName('disabled');
    button.simulate('click');
    expect(toggleFn).not.toHaveBeenCalled();
  });

  it('uses VDOM as label if supplied', function() {
    const label = <NxFontAwesomeIcon icon={faTrash} />,
        component = getShallowComponent({ label }),
        button = component.find(NxButton);

    expect(button.childAt(0)).toContainReact(label);
  });

  it('passes extra props', function() {
    const component = getShallowComponent({ id: 'some-id', title: 'title-prop' });
    expect(component).toHaveProp('id', 'some-id');
    expect(component).toHaveProp('title', 'title-prop');
  });

  it('renders the children within the .nx-dropdown-menu, each wrapped in NxOverflowTooltip', function() {
    const children = [
      <a id="link1" key="1">Link1</a>,
      <a id="link2" key="2">Link2</a>
    ];
    const component = getShallowComponent({ children, isOpen: true }),
        menu = component.find('.nx-dropdown-menu');

    expect(menu).toMatchElement(
      <div className="nx-dropdown-menu">
        <NxOverflowTooltip><a id="link1" key="1">Link1</a></NxOverflowTooltip>
        <NxOverflowTooltip><a id="link2" key="2">Link2</a></NxOverflowTooltip>
      </div>
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
        component = getShallowComponent({ onToggleCollapse, isOpen: true });

    component.simulate('keyDown', { key: 'Escape' });
    expect(onToggleCollapse).toHaveBeenCalled();
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
});
