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

import NxSegmentedButton from '../../NxSegmentedButton';
import NxStatefulSegmentedButton, { Props } from '../NxStatefulSegmentedButton';

describe('NxStatefulSegmentedButton', () => {
  let container: HTMLDivElement | null;

  const minimalProps: Props = {
        variant: 'primary',
        children: <div className="child"/>,
        buttonContent: 'Click Me',
        onClick: () => {}
      },
      getShallowComponent = enzymeUtils.getShallowComponent(NxStatefulSegmentedButton, minimalProps),
      getMountedComponent = enzymeUtils.getMountedComponent(NxStatefulSegmentedButton, minimalProps);

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

  it('renders an NxSegmentedButton component', function() {
    const component = getShallowComponent();
    expect(component).toMatchSelector(NxSegmentedButton);
  });

  it('renders an NxSegmentedButton component passing on the given props', function() {
    const onClick = jest.fn(),
        component = getShallowComponent({
          ...minimalProps,
          onClick,
          disabled: true
        }),
        statelessButton = component.find(NxSegmentedButton);

    expect(component).toMatchSelector(NxSegmentedButton);
    expect(statelessButton).toHaveProp('variant', 'primary');
    expect(statelessButton).toHaveProp('children', <div className="child" />);
    expect(statelessButton).toHaveProp('disabled', true);
    expect(statelessButton).toHaveProp('buttonContent', 'Click Me');
    expect(statelessButton).toHaveProp('onClick', );
  });

  it('opens the dropdown when the toggle is clicked', function() {
    const mounted = getMountedComponent();

    expect(mounted.find('.nx-dropdown-menu')).not.toExist();

    mounted.find('button.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).toExist();
    mounted.unmount();
  });

  it('closes the dropdown if the menu is open and the toggle is clicked', function() {
    const mounted = getMountedComponent();

    mounted.find('button.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).toExist();

    mounted.find('button.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(mounted.find('.nx-dropdown-menu')).not.toExist();
    mounted.unmount();
  });

  it('closes the dropdown when the Escape key is pressed on this component', function() {
    const page = (
      <div>
        <NxStatefulSegmentedButton { ... minimalProps }/>
      </div>
    );

    const element = mount(page, { attachTo: container });
    element.find('button.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(element.find('.nx-dropdown-menu')).toExist();

    element.find(NxSegmentedButton).simulate('keyDown', {key: 'Escape'});
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
          <NxStatefulSegmentedButton { ...minimalProps }/>
          <button id="test-btn">click</button>
        </div>,
        { attachTo: container }
      );

      // Jest/JSDom need actual events to be able to trigger effects properly
      // See https://stackoverflow.com/questions/27557624/simulating-click-on-document-reactjs-jsdom
      element.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
      element!.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
        <NxStatefulSegmentedButton { ...minimalProps }>
          <a id="child" onClick={childClickSpy}>Hello</a>
        </NxStatefulSegmentedButton>,
        { attachTo: container }
      );

      element.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
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
      element!.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    element!.update();
    expect(element!.find('.nx-dropdown-menu')).toExist();

    element!.unmount();
  });

  it('forwards a ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>(),

        // note: the fragment is necessary to get around an enzyme issue:
        // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
        div = mount(<><NxStatefulSegmentedButton ref={ref} { ...minimalProps }/></>).children().children();

    expect(ref.current).toBe(div.getDOMNode());
  });

});
