/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import NxButton from '../../../NxButton/NxButton';
import NxDropdown from '../../NxDropdown';
import NxStatefulDropdown, { Props } from '../NxStatefulDropdown';

describe('NxStatefulDropdown', () => {
  let container: HTMLDivElement | null;

  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulDropdown, {
    label: 'dropdown',
    children: <a>Hello</a>
  });

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

  it('renders an NxDropdown component', function() {
    const component = getShallowComponent();
    expect(component).toMatchSelector(NxDropdown);
    expect(component).toHaveProp('label', 'dropdown');
  });

  it('renders an NxDropdown component passing on the given props', function() {
    const component = getShallowComponent({
      variant: 'tertiary',
      className: 'extra-class',
      disabled: true,
      toggleTooltip: 'a tooltip'
    });
    const statelessDropdown = component.find(NxDropdown);

    expect(component).toMatchSelector(NxDropdown);
    expect(statelessDropdown).toHaveProp('label', 'dropdown');
    expect(statelessDropdown).toHaveProp('variant', 'tertiary');
    expect(statelessDropdown).toHaveProp('disabled', true);
    expect(statelessDropdown).toHaveProp('toggleTooltip', 'a tooltip');
    expect(statelessDropdown).toHaveProp('children', (<a>Hello</a>));
  });

  it('opens the dropdown when the toggle is clicked', function() {
    const mounted = mount(
      <NxStatefulDropdown label="dropdown" />
    );
    expect(mounted.find('.nx-dropdown-menu')).not.toExist();

    mounted.find(NxButton).simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).toExist();
    mounted.unmount();
  });

  it('closes the dropdown if the menu is open and the toggle is clicked', function() {
    const mounted = mount(
      <NxStatefulDropdown label="dropdown" />
    );
    mounted.find(NxButton).simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).toExist();

    mounted.find(NxButton).simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).not.toExist();
    mounted.unmount();
  });

  it('closes the dropdown when the Escape key is pressed on this component', function() {
    const page = (
      <div>
        <NxStatefulDropdown label="label" />
      </div>
    );
    const element = mount(page, { attachTo: container });
    element.find(NxButton).simulate('click');
    expect(element.find('.nx-dropdown-menu')).toExist();

    element.find(NxDropdown).simulate('keyDown', {key: 'Escape'});
    expect(element.find('.nx-dropdown-menu')).not.toExist();

    element.unmount();
  });

  it('closes the dropdown when an outside click happens', function() {
    let element: ReactWrapper;

    // `act` ensures that updates related to “units” of interaction with a user interface have been processed
    // and applied to the DOM before you make any assertions.
    // See https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
    // and https://reactjs.org/docs/testing-recipes.html#act
    act(() => {
      element = mount(
        <div>
          <NxStatefulDropdown label="label" />
          <button id="test-btn">click</button>
        </div>,
        { attachTo: container }
      );

      // Jest/JSDom need actual events to be able to trigger effects properly
      // See https://stackoverflow.com/questions/27557624/simulating-click-on-document-reactjs-jsdom
      element.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    act(() => {
      element!.find('#test-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).not.toExist();

    act(() => {
      element!.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    element!.unmount();
  });

  it('closes the dropdown when a child is clicked - after calling the child\'s click handler', function() {
    let element: ReactWrapper;

    const childClickSpy = jest.fn();
    act(() => {
      element = mount(
        <NxStatefulDropdown label="label">
          <a id="child" onClick={childClickSpy}>Hello</a>
        </NxStatefulDropdown>,
        { attachTo: container }
      );

      element.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    act(() => {
      element!.find('#child').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();

    expect(childClickSpy).toHaveBeenCalled();
    expect(element!.find('.nx-dropdown-menu')).not.toExist();

    act(() => {
      element!.find(NxButton).getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    element!.unmount();
  });
});
