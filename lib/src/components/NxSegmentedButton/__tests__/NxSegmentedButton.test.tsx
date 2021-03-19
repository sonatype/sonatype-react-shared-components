/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxSegmentedButton, { Props } from '../NxSegmentedButton';
import NxButton from '../../NxButton/NxButton';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../../NxTooltip/NxOverflowTooltip';

describe('NxSegmentedButton', function() {
  let container: HTMLDivElement | null;

  const minimalProps: Props = {
        variant: 'primary',
        children: <div/>,
        buttonContent: 'Click Me',
        isOpen: false,
        onToggleCollapse: () => {},
        onClick: () => {},
        onClose: () => {}
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
    expect(getShallow()).toMatchSelector('div.nx-segmented-btn');
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
    expect(getShallow()).toContainMatchingElement('.nx-segmented-btn__main-btn');
    expect(getShallow()).toContainMatchingElement('.nx-segmented-btn__dropdown-btn');

    expect(getShallow().find('.nx-segmented-btn__main-btn')).toMatchSelector(NxButton);
    expect(getShallow().find('.nx-segmented-btn__dropdown-btn')).toMatchSelector(NxButton);
  });

  it('sets the variant on the child buttons', function() {
    const primaryComponent = getShallow(),
        secondaryComponent = getShallow({ variant: 'secondary' });

    expect(primaryComponent.find('.nx-segmented-btn__main-btn')).toHaveProp('variant', 'primary');
    expect(primaryComponent.find('.nx-segmented-btn__dropdown-btn')).toHaveProp('variant', 'primary');

    expect(secondaryComponent.find('.nx-segmented-btn__main-btn')).toHaveProp('variant', 'secondary');
    expect(secondaryComponent.find('.nx-segmented-btn__dropdown-btn')).toHaveProp('variant', 'secondary');
  });

  it('sets the onClick handler on the nx-segmented-btn__main-btn', function() {
    const onClick = jest.fn(),
        component = getShallow({ onClick });

    expect(onClick).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(onClick).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__main-btn').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('calls the onToggleCollapse prop when the nx-segmented-btn__dropdown-btn is clicked', function() {
    const onToggleCollapse = jest.fn(),
        component = getShallow({ onToggleCollapse });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__main-btn').simulate('click');
    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('does not call the onToggleCollapse prop when the component is disabled', function() {
    const onToggleCollapse = jest.fn(),
        component = getShallow({ onToggleCollapse, disabled: true });

    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__main-btn').simulate('click');
    expect(onToggleCollapse).not.toHaveBeenCalled();

    component.find('.nx-segmented-btn__dropdown-btn').simulate('click');
    expect(onToggleCollapse).toHaveBeenCalled();
  });

  it('disables the buttons based on the disabled prop', function() {
    expect(getShallow().find('.nx-segmented-btn__main-btn')).not.toHaveProp('disabled', true);
    expect(getShallow().find('.nx-segmented-btn__dropdown-btn')).not.toHaveProp('disabled', true);

    expect(getShallow({ disabled: null }).find('.nx-segmented-btn__main-btn')).not.toHaveProp('disabled', true);
    expect(getShallow({ disabled: null }).find('.nx-segmented-btn__dropdown-btn')).not.toHaveProp('disabled', true);

    expect(getShallow({ disabled: false }).find('.nx-segmented-btn__main-btn')).not.toHaveProp('disabled', true);
    expect(getShallow({ disabled: false }).find('.nx-segmented-btn__dropdown-btn')).not.toHaveProp('disabled', true);

    expect(getShallow({ disabled: true }).find('.nx-segmented-btn__main-btn')).toHaveProp('disabled', true);
    expect(getShallow({ disabled: true }).find('.nx-segmented-btn__dropdown-btn')).toHaveProp('disabled', true);
  });

  it('renders the buttonContent within the nx-segmented-btn__main-btn', function() {
    expect(getShallow().find('.nx-segmented-btn__main-btn')).toHaveText('Click Me');
  });

  it('renders a down caret in the dropdown button when not open', function() {
    expect(getShallow().find('.nx-segmented-btn__dropdown-btn')).toContainReact(
      <NxFontAwesomeIcon icon={faCaretDown} />
    );
  });

  it('renders an up caret in the dropdown button when open', function() {
    expect(getShallow({ isOpen: true }).find('.nx-segmented-btn__dropdown-btn')).toContainReact(
      <NxFontAwesomeIcon icon={faCaretUp} />
    );
  });

  it('renders an nx-dropdown-menu iff isOpen is set', function() {
    expect(getShallow()).not.toContainMatchingElement('.nx-dropdown-menu');
    expect(getShallow({ isOpen: true })).toContainMatchingElement('.nx-dropdown-menu');
  });

  it('wraps each child in an NxOverflowTooltip and renders them within the nx-dropdown-menu', function() {
    const children = [<span key="1" className="foo" />, <span key="2" className="bar" />],
        closedComp = getShallow({ children }),
        openComp = getShallow({ children, isOpen: true });

    expect(closedComp).not.toContainMatchingElement('.foo');
    expect(closedComp).not.toContainMatchingElement('.bar');

    expect(openComp.find('.nx-dropdown-menu')).toContainReact(
      <NxOverflowTooltip>
        <span className="foo" />
      </NxOverflowTooltip>
    );

    expect(openComp.find('.nx-dropdown-menu')).toContainReact(
      <NxOverflowTooltip>
        <span className="bar" />
      </NxOverflowTooltip>
    );
  });

  it('calls onClose if a click happens anywhere when the dropdown is already open', function() {
    const onClose = jest.fn(),
        component = getMounted({ onClose, isOpen: true }, { attachTo: container });

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onClose).toHaveBeenCalled();
  });

  it('does not call onClose if a click happens anywhere when the dropdown is closed', function() {
    const onClose = jest.fn(),
        component = getMounted({ onClose }, { attachTo: container });

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose if a click happens anywhere when the dropdown is disabled', function() {
    const onClose = jest.fn(),
        component = getMounted({ onClose, isOpen: true, disabled: true }, { attachTo: container });

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      document.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose during the click that opens the dropdown', function() {
    const onClose = jest.fn(),
        component = getMounted({ onClose }, { attachTo: container });

    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      component!.find('button.nx-segmented-btn__dropdown-btn').getDOMNode().dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    });
    component!.update();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose if ESC is pressed within the component while the dropdown is open', function() {
    const onClose = jest.fn(),
        component = getShallow({ onClose, isOpen: true });

    component.simulate('keyDown', { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('does not call onClose if ESC is pressed within the component when the dropdown is closed', function() {
    const onClose = jest.fn(),
        component = getShallow({ onClose });

    expect(onClose).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose if ESC is pressed within the component when the component is disabled', function() {
    const onClose = jest.fn(),
        component = getShallow({ onClose, isOpen: true, disabled: true });

    expect(onClose).not.toHaveBeenCalled();

    component.simulate('keyDown', { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });
});
