/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import { shallow, mount } from 'enzyme';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import NxTag, { NxSelectableTag } from '../NxTag';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxTag', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxTag, { children: 'basic tag' });

  it('renders NxTag with the `nx-tag` class', function() {
    expect(getShallowComponent().children().find('.nx-tag')).toExist();
  });

  it('forwards a ref', function() {
    const ref = React.createRef<HTMLLabelElement>();
    const component = mount(<><NxTag ref={ref}>Hello</NxTag></>);
    expect(component.find('.nx-tag').getDOMNode()).toBe(ref.current);
  });

  it('correctly assigns supplied class', function() {
    const classComponent = getShallowComponent({ className: 'foo' });
    expect(classComponent.find('.nx-tag')).toHaveClassName('foo');
  });

  it('correctly assigns supplied id', function() {
    const idComponent = getShallowComponent({ id: 'test-id' });
    expect(idComponent.find('.nx-tag')).toHaveProp('id', 'test-id');
  });

  it('renders the supplied text inside .nx-tag__text', function() {
    const tagChildren = getShallowComponent({ children: 'tag text' });
    expect(tagChildren.find('.nx-tag__text')).toHaveText('tag text');

    expect(tagChildren.children().first()).toMatchSelector('label');
    // expect(tagChildren.children().at(1)).toMatchSelector('span');
  });

  it('sets the nx-selectable-color--indigo class if no color prop is passed', function() {
    expect(getShallowComponent().find('.nx-selectable-color--indigo')).toExist();
  });

  it('sets the color class using the color if it is provided', function() {
    const colorComponent = getShallowComponent({ color: 'orange' });
    expect(colorComponent.find('.nx-selectable-color--orange')).toExist();
  });

  it('checks the children appear in the correct order, text then the icon', function() {
    const getSelectedComponent = getShallowComponent({
      children: 'foo bar',
      selectedIcons: <NxFontAwesomeIcon icon={faPlusCircle} className="nx-tag__action" />
    });

    expect(getSelectedComponent.find('.nx-tag').children().first()).toMatchSelector('span');
    expect(getSelectedComponent.find('.nx-tag').children().last()).toHaveClassName('nx-tag__action');
  });
});

describe('NxSelectableTag', function() {
  const minimumProps = { children: 'selectable tag', selected: false, onSelect: jest.fn() };
  const getShallowComponent = enzymeUtils.getShallowComponent(NxSelectableTag, minimumProps);

  it('renders an NxTag', function() {
    expect(getShallowComponent()).toMatchSelector('ForwardRef(NxTag)');
  });

  it('forwards a ref', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        component = mount(<><NxSelectableTag {...minimumProps} ref={ref}>Hello</NxSelectableTag></>);
    expect(component.find('.nx-tag').getDOMNode()).toBe(ref.current);
  });

  it('renders NxSelectableTag with the `nx-tag--selectable` class', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-tag--selectable');
  });

  it('renders the `nx-tag--unselected` class when not selected', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-tag--unselected');
  });

  it('renders the `nx-tag--selected` class when selected and appears before the icon', function() {
    const getSelectedComponent = getShallowComponent({ selected: true, children: 'foo bar' });
    expect(getSelectedComponent).toMatchSelector('.nx-tag--selected');
  });

  it('renders the plus icon and action class when not selected', function() {
    const SelectableTagIcons = function() {
          return getShallowComponent().prop('selectedIcons');
        },
        icon = shallow(<SelectableTagIcons />);

    expect(icon).toMatchSelector(NxFontAwesomeIcon);
    expect(icon).toHaveProp(icon, faPlusCircle);
    expect(icon).toHaveClassName('nx-tag__action');
  });

  it('renders the times icon when selected', function() {
    const getSelectedComponent = enzymeUtils.getShallowComponent(NxSelectableTag,
        { children: 'selectable tag', selected: true, onSelect: jest.fn() });

    const SelectableTagIcons = function() {
          return getSelectedComponent().prop('selectedIcons');
        },
        icon = shallow(<SelectableTagIcons />);

    expect(icon).toMatchSelector(NxFontAwesomeIcon);
    expect(icon).toHaveProp(icon, faTimesCircle);
    expect(icon).toHaveClassName('nx-tag__action');
  });

  it('fires the components onSelect when clicked', function() {
    const onSelect = jest.fn(),
        trigger = getShallowComponent({ onSelect });

    expect(onSelect).not.toHaveBeenCalled();
    trigger.find('input').simulate('change');
    expect(onSelect).toHaveBeenCalled();
  });
});
