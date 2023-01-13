/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { omit } from 'ramda';
import { getShallowComponent } from '../../../../__testutils__/enzymeUtils';
import NxSearchDropdown from '../../NxSearchDropdown';

import NxStatefulSearchDropdown, { Props } from '../NxStatefulSearchDropdown';

describe('NxStatefulSearchDropdown', function() {
  const minimalProps: Props<string | number> = {
        onSearch: () => {},
        matches: [],
        onSelect: () => {}
      },
      getShallow = getShallowComponent(NxStatefulSearchDropdown, minimalProps);

  it('renders an NxSearchDropdown', function() {
    expect(getShallow()).toMatchSelector(NxSearchDropdown);
  });

  it('passes all props except defaultSearchText and onSelect to the NxSearchDropdown', function() {
    const onSearch = jest.fn(),
        onSelect = jest.fn(),
        props = {
          defaultSearchText: 'foo',
          onSearch,
          loading: true,
          error: 'bar',
          matches: [{ id: '1', displayName: 'one' }],
          onSelect,
          long: false,
          disabled: true,
          emptyMessage: 'eemmppttyy'
        },
        component = getShallow(props);

    expect(component).toHaveProp(omit(['defaultSearchText', 'onSelect'], props));
    expect(component).not.toHaveProp('defaultSearchText');
  });

  it('initially passes the defaultSearchText as the searchText', function() {
    expect(getShallow({ defaultSearchText: 'foo' })).toHaveProp('searchText', 'foo');
  });

  it('passes the empty string as the searchText if defaultSearchText is not specified', function() {
    expect(getShallow()).toHaveProp('searchText', '');
  });

  it('updates the searchText based on values passed to the NxSearchDropdown onSearchTextChange callback', function() {
    const component = getShallow();

    component.simulate('searchTextChange', 'foo');
    expect(component).toHaveProp('searchText', 'foo');

    component.simulate('searchTextChange', ' bar ');
    expect(component).toHaveProp('searchText', ' bar ');
  });

  it('passes its ref to the NxSearchDropdown', function() {
    const ref = React.createRef<HTMLDivElement>();
    const component = mount(<><NxStatefulSearchDropdown ref={ref} { ...minimalProps } /></>);

    expect(ref.current).toBeDefined();
    expect(component.getDOMNode()).toBe(ref.current);
  });

  it('clears the searchText and fires its own onSelect when the NxSearchDropdown onSelect is fired', function() {
    const onSelect = jest.fn(),
        component = getShallow({ onSelect });

    component.simulate('searchTextChange', '1');
    expect(component).toHaveProp('searchText', '1');
    expect(onSelect).not.toHaveBeenCalled();

    component.simulate('select', { id: 1, displayName: 'item 1' });

    expect(onSelect).toHaveBeenCalledWith({ id: 1, displayName: 'item 1' });
    expect(component).toHaveProp('searchText', '');
  });

});
