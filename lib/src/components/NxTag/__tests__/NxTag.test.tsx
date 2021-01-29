/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import NxTag, { NxSelectableTag } from '../NxTag';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxTag', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxTag, { children: 'basic tag' });

  it('renders NxTag with the `nx-tag` class along with any provided className', function() {
    expect(getShallowComponent().find('.nx-tag')).toExist();
  });

  it('correctly assigns supplied class', function() {
    const classComponent = getShallowComponent({ className: 'foo' });
    expect(classComponent.find('.nx-tag')).toHaveClassName('foo');
  });

  it('correctly assigns supplied id', function() {
    const idComponent = getShallowComponent({ id: 'test-id' });
    expect(idComponent.find('.nx-tag')).toHaveProp('id', 'test-id');
  });

  it('sets the nx-tag--default class if no color prop is passed', function() {
    expect(getShallowComponent().find('.nx-tag--default')).toExist();
  });

  it('sets the color class using the color if it is provided', function() {
    const colorComponent = getShallowComponent({ color: 'orange' });
    expect(colorComponent.find('.nx-tag--orange')).toExist();
    expect(colorComponent.find('.nx-tag--default')).not.toExist();
  });
});

describe('NxSelectableTag', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxSelectableTag,
      { children: 'selectable tag', selected: false, onSelect: jest.fn() });

  it('renders an NxTag', function() {
    expect(getShallowComponent()).toMatchSelector('NxTag');
  });

  it('renders NxSelectableTag with the `nx-tag--selectable` class', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-tag--selectable');
  });

  it('renders the `nx-tag--unselected` class when not selected', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-tag--unselected');
  });

  it('renders the `nx-tag--selected` class when selected', function() {
    const getSelectedComponent = getShallowComponent({ selected: true });
    expect(getSelectedComponent).toMatchSelector('.nx-tag--selected');
  });

  it('renders the plus icon and action class when not selected', function() {
    expect(getShallowComponent().find(NxFontAwesomeIcon)).toExist();
    expect(getShallowComponent().find(NxFontAwesomeIcon)).toHaveProp('icon', faPlusCircle);
    expect(getShallowComponent().find(NxFontAwesomeIcon)).toHaveClassName('nx-tag__action');
  });

  it('renders the times icon when selected', function() {
    const getSelectedComponent = getShallowComponent({ selected: true });
    expect(getSelectedComponent.find(NxFontAwesomeIcon)).toExist();
    expect(getSelectedComponent.find(NxFontAwesomeIcon)).toHaveProp('icon', faTimesCircle);
  });

  it('fires the components onSelect when clicked', function() {
    const onSelect = jest.fn(),
        trigger = getShallowComponent({ onSelect });

    expect(onSelect).not.toHaveBeenCalled();
    trigger.simulate('click');
    expect(onSelect).toHaveBeenCalled();
  });
});
