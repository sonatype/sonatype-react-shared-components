/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-enzyme';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

import NxButton from '../../../NxButton/NxButton';
import NxIconDropdown from '../../NxIconDropdown';
import NxStatefulIconDropdown, { Props } from '../NxStatefulIconDropdown';

describe('NxStatefulIconDropdown', () => {
  let container: HTMLDivElement | null;

  const minimalProps = {
        title: 'stateful dropdown',
        children: <a>Hello</a>
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulIconDropdown, minimalProps),
      getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxStatefulIconDropdown, minimalProps);

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

  it('renders an NxIconDropdown component', function() {
    const component = getShallowComponent();
    expect(component).toMatchSelector(NxIconDropdown);
    expect(component).toHaveProp('title', 'stateful dropdown');
  });

  it('renders an NxIconDropdown component passing on the given props', function() {
    const component = getShallowComponent({
      className: 'extra-class',
      disabled: true
    });
    const statelessDropdown = component.find(NxIconDropdown);

    expect(component).toMatchSelector(NxIconDropdown);
    expect(statelessDropdown).toHaveProp('title', 'stateful dropdown');
    expect(statelessDropdown).toHaveProp('disabled', true);
    expect(statelessDropdown).toHaveProp('children', (<a>Hello</a>));
  });

  it('opens the dropdown when the toggle is clicked', function() {
    const mounted = getMountedComponent(undefined, { attachTo: container });

    expect(mounted.find('.nx-dropdown-menu')).not.toExist();

    mounted.find(NxButton).simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).toExist();
    mounted.unmount();
  });

  it('closes the dropdown if the menu is open and the toggle is clicked', function() {
    const mounted = getMountedComponent(undefined, { attachTo: container });

    act(() => {
      mounted.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(
          new MouseEvent('click', { bubbles: true }));
    });
    mounted.update();
    expect(mounted.find('.nx-dropdown-menu')).toExist();

    act(() => {
      mounted.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(
          new MouseEvent('click', { bubbles: true }));
    });
    mounted.update();
    expect(mounted.find('.nx-dropdown-menu')).not.toExist();
    mounted.unmount();
  });

  it('closes the dropdown when the Escape key is pressed on this component', function() {
    const page = (
      <div>
        <NxStatefulIconDropdown title="stateful dropdown" />
      </div>
    );
    const element = mount(page, { attachTo: container });
    element.find(NxButton).simulate('click');
    expect(element.find('.nx-dropdown-menu')).toExist();

    element.find(NxIconDropdown).simulate('keyDown', {key: 'Escape'});
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
          <NxStatefulIconDropdown title="stateful dropdown" />
          <button id="test-btn">click</button>
        </div>,
        { attachTo: container }
      );
    });

    act(() => {
      // Jest/JSDom need actual events to be able to trigger effects properly
      // See https://stackoverflow.com/questions/27557624/simulating-click-on-document-reactjs-jsdom
      element.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
      element!.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
        <NxStatefulIconDropdown title="stateful dropdown">
          <a id="child" onClick={childClickSpy}>Hello</a>
        </NxStatefulIconDropdown>,
        { attachTo: container }
      );
    });

    act(() => {
      element.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
      element!.find('button.nx-icon-dropdown__toggle').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    element!.unmount();
  });
});
