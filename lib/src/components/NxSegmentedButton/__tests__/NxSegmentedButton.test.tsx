/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { act } from 'react-dom/test-utils';

import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxSegmentedButton, { Props } from '../NxSegmentedButton';
import NxButton from '../../NxButton/NxButton';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';

import AbstractDropdown from '../../NxDropdown/AbstractDropdown';

describe('NxSegmentedButton', function() {
  let container: HTMLDivElement | null;

  const minimalProps: Props = {
        variant: 'primary',
        children: <div/>,
        buttonContent: 'Click Me',
        isOpen: false,
        onToggleOpen: () => {},
        onClick: () => {}
      },
      getShallow = getShallowComponent(NxSegmentedButton, minimalProps),
      getMounted = getMountedComponent(NxSegmentedButton, minimalProps);

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

  it('renders a div with the nx-segmented-btn class', function() {
    const component = getMounted();
    const button = component.find('div.nx-segmented-btn');
    expect(button).toExist();
  });

  it('adds caller-specified classnames to the div', function() {
    expect(getShallow({ className: 'foo' })).toHaveClassName('foo');
    expect(getShallow({ className: 'foo' })).toHaveClassName('nx-segmented-btn');
  });

  it('adds the nx-segmented-btn--open class iff isOpen is true', function() {
    expect(getShallow()).not.toHaveClassName('nx-segmented-btn--open');
    expect(getShallow({ isOpen: true })).toHaveClassName('nx-segmented-btn--open');
  });

  it('adds extra specified HTML attrs to the div', function() {
    const component = getShallow({ id: 'foo', lang: 'en_US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('forwards a ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>(),

        // note: the fragment is necessary to get around an enzyme issue:
        // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
        div = mount(<><NxSegmentedButton ref={ref} { ...minimalProps }/></>).children();

    expect(ref.current).toBe(div.getDOMNode());
  });

  it('renders nx-segmented-btn__main-btn and nx-segmented-btn__dropdown-btn NxButtons as children', function() {
    expect(getMounted()).toContainMatchingElement('.nx-segmented-btn__main-btn');
    expect(getMounted()).toContainMatchingElement('.nx-segmented-btn__dropdown-btn');
    const mainButton = getMounted().find('ForwardRef(NxButton).nx-segmented-btn__main-btn');
    expect(mainButton).toMatchSelector(NxButton);
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn')).toMatchSelector(NxButton);
  });

  it('sets the variant on the child buttons', function() {
    const primaryComponent = getMounted(),
        secondaryComponent = getMounted({ variant: 'secondary' });

    expect(primaryComponent.find('ForwardRef(NxButton).nx-segmented-btn__main-btn')).toHaveProp('variant', 'primary');
    expect(primaryComponent.find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .toHaveProp('variant', 'primary');

    expect(secondaryComponent.find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .toHaveProp('variant', 'secondary');
    expect(secondaryComponent.find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .toHaveProp('variant', 'secondary');
  });

  it('sets the onClick handler on the nx-segmented-btn__main-btn', function() {
    const onClick = jest.fn(),
        component = getMounted({ onClick });

    expect(onClick).not.toHaveBeenCalled();

    component.find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn').simulate('click');
    expect(onClick).not.toHaveBeenCalled();

    component.find('ForwardRef(NxButton).nx-segmented-btn__main-btn').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('passes the type to the main btn', function() {
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__main-btn')).toHaveProp('type', undefined);
    expect(getMounted({ type: 'button' }).find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .toHaveProp('type', 'button');
    expect(getMounted({ type: 'submit' }).find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .toHaveProp('type', 'submit');
  });

  it('sets type="button" on the dropdown button', function() {
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn')).toHaveProp('type', 'button');
    expect(getMounted({ type: 'button' }).find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .toHaveProp('type', 'button');
    expect(getMounted({ type: 'submit' }).find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .toHaveProp('type', 'button');
  });

  it('calls onToggleOpen once when clicking to open the dropdown', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      component!.find('button.nx-segmented-btn__dropdown-btn')
          .getDOMNode().dispatchEvent(new MouseEvent('click', {
            bubbles: true
          }));
    });
    component!.update();
    expect(onToggleOpen).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleOpen once when clicking to close the dropdown', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen, isOpen: true }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      component!.find('button.nx-segmented-btn__dropdown-btn')
          .getDOMNode().dispatchEvent(new MouseEvent('click', {
            bubbles: true
          }));
    });
    component!.update();
    expect(onToggleOpen).toHaveBeenCalledTimes(1);
  });

  it('disables the buttons based on the disabled prop', function() {
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .not.toHaveProp('disabled', true);
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .not.toHaveProp('disabled', true);

    expect(getMounted({ disabled: null }).find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .not.toHaveProp('disabled', true);
    expect(getMounted({ disabled: null }).find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .not.toHaveProp('disabled', true);

    expect(getMounted({ disabled: false }).find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .not.toHaveProp('disabled', true);
    expect(getMounted({ disabled: false }).find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .not.toHaveProp('disabled', true);

    expect(getMounted({ disabled: true }).find('ForwardRef(NxButton).nx-segmented-btn__main-btn'))
        .toHaveProp('disabled', true);
    expect(getMounted({ disabled: true }).find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn'))
        .toHaveProp('disabled', true);
  });

  it('renders the buttonContent within the nx-segmented-btn__main-btn', function() {
    expect(getMounted().find('ForwardRef(NxButton).nx-segmented-btn__main-btn')).toHaveText('Click Me');
  });

  it('renders a down caret in the dropdown button when not open', function() {
    const icon = getMounted().find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn').find(NxFontAwesomeIcon);
    expect(icon).toHaveProp('icon', faCaretDown);
  });

  it('renders an up caret in the dropdown button when open', function() {
    const icon = getMounted({ isOpen: true })
        .find('ForwardRef(NxButton).nx-segmented-btn__dropdown-btn')
        .find(NxFontAwesomeIcon);
    expect(icon).toHaveProp('icon', faCaretUp);
  });

  it('renders an NxDropdownMenu iff isOpen is set', function() {
    expect(getMounted()).not.toContainMatchingElement(NxDropdownMenu);
    expect(getMounted({ isOpen: true })).toContainMatchingElement(NxDropdownMenu);
  });

  it('wraps each child in an NxOverflowTooltip and renders them within the nx-dropdown-menu', function() {
    const children = [<span key="1" className="foo" />, <span key="2" className="bar" />],
        closedComp = getMounted({ children }),
        openComp = getMounted({ children, isOpen: true });

    expect(closedComp).not.toContainMatchingElement('.foo');
    expect(closedComp).not.toContainMatchingElement('.bar');

    expect(openComp.find(NxDropdownMenu)).toContainReact(
      <NxOverflowTooltip>
        <span className="foo" />
      </NxOverflowTooltip>
    );

    expect(openComp.find(NxDropdownMenu)).toContainReact(
      <NxOverflowTooltip>
        <span className="bar" />
      </NxOverflowTooltip>
    );
  });

  it('calls onToggleOpen if a click happens anywhere when the dropdown is already open', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen, isOpen: true }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });

    component!.update();

    expect(onToggleOpen).toHaveBeenCalled();
  });

  it('does not call onToggleOpen if a click happens anywhere when the dropdown is closed', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('does not call onToggleOpen if a click happens anywhere when the dropdown is disabled', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen, isOpen: true, disabled: true }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('calls onToggleOpen if ESC is pressed within the component while the dropdown is open', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen, isOpen: true });

    component.simulate('keyDown', { key: 'Escape', preventDefault: jest.fn() });
    expect(onToggleOpen).toHaveBeenCalled();
  });

  it('calls preventDefault on Escape keydown', function() {
    const component = getMounted({ onToggleOpen: jest.fn(), isOpen: true }),
        escPreventDefault = jest.fn(),
        otherPreventDefault = jest.fn();

    component.simulate('keyDown', { key: 'Escape', preventDefault: escPreventDefault });
    component.simulate('keyDown', { key: 'Q', preventDefault: otherPreventDefault });

    expect(escPreventDefault).toHaveBeenCalled();
    expect(otherPreventDefault).not.toHaveBeenCalled();
  });

  it('does not call onToggleOpen if ESC is pressed within the component when the dropdown is closed', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen });

    expect(onToggleOpen).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('does not call onToggleOpen if ESC is pressed within the component when the component is disabled', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({ onToggleOpen, isOpen: true, disabled: true });

    expect(onToggleOpen).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onToggleOpen).not.toHaveBeenCalled();
  });

  it('does not call onToggleOpen if ESC is pressed within the component and onCloseKeyDown preventsDefault',
      function() {
        const onToggleOpen = jest.fn(),
            component = getMounted({
              onToggleOpen,
              isOpen: true,
              onCloseKeyDown: e => e.preventDefault()
            }, { attachTo: container });

        act(() => {
          component.find('button.nx-segmented-btn__dropdown-btn').getDOMNode()
              .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        });
        component.update();
        expect(onToggleOpen).not.toHaveBeenCalled();
      }
  );

  it('does not call onToggleOpen if a click happens when onCloseClick preventsDefault', function() {
    const onToggleOpen = jest.fn(),
        component = getMounted({
          children: <button className="nx-dropdown-button">Foo</button>,
          onToggleOpen,
          isOpen: true,
          onCloseClick: e => e.preventDefault()
        }, { attachTo: container });

    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      component.find('.nx-dropdown-button').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleOpen).not.toHaveBeenCalled();

    act(() => {
      component.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onToggleOpen).not.toHaveBeenCalled();
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
        component = getMounted({ isOpen: true, onCloseClick }, { attachTo: container });

    expect(evt).toBeUndefined();

    act(() => {
      component.find(AbstractDropdown).getDOMNode().dispatchEvent(new MouseEvent('click', {
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
    const component = getMounted({
          children: <button className="nx-dropdown-button">Foo</button>,
          isOpen: true
        }, { attachTo: container }),
        menuBtn = component.find('button.nx-dropdown-button').getDOMNode() as HTMLElement,
        toggleBtn = component.find('button.nx-segmented-btn__dropdown-btn').getDOMNode();

    menuBtn.focus();
    expect(document.activeElement).toBe(menuBtn);

    component.setProps({ isOpen: false });
    expect(document.activeElement).toBe(toggleBtn);
  });
});
