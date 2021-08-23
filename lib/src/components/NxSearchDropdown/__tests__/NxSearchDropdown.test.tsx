/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxFilterInput from '../../NxFilterInput/NxFilterInput';

import NxSearchDropdown, { Props } from '../NxSearchDropdown';
import NxDropdownMenu from '../../NxDropdownMenu/NxDropdownMenu';
import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';

describe('NxSearchDropdown', function() {
  const minimalProps: Props = {
        searchText: '',
        onSearchTextChange: () => {},
        matches: [],
        onSelect: () => {}
      },
      getShallow = getShallowComponent(NxSearchDropdown, minimalProps),
      getMounted = getMountedComponent(NxSearchDropdown, minimalProps);

  let mountPoint: HTMLElement;

  beforeEach(function() {
    mountPoint = document.createElement('div');
    document.body.append(mountPoint);
  });

  afterEach(function() {
    mountPoint.remove();
  });

  it('renders a div with the nx-search-dropdown class', function() {
    expect(getShallow()).toMatchSelector('div.nx-search-dropdown');
  });

  it('adds additional specified classnames to the div', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-search-dropdown');
  });

  it('adds additional specified attributes to the div', function() {
    const component = getShallow({ id: 'foo', title: 'bar' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('title', 'bar');
  });

  it('adds a specified ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>();
    const component = mount(<><NxSearchDropdown ref={ref} { ...minimalProps } /></>);

    expect(ref.current).toBeDefined();
    expect(component.getDOMNode()).toBe(ref.current);
  });

  it('has an NxFilterInput child with the nx-search-dropdown__input class', function() {
    const component = getShallow(),
        input = component.find(NxFilterInput);

    expect(input).toExist();
    expect(input).toHaveClassName('nx-search-dropdown__input');
  });

  it('sets the searchText and onSearchTextChange as the value and onChange of the input', function() {
    const onSearchTextChange = jest.fn(),
        component = getShallow({ searchText: 'foo', onSearchTextChange }),
        input = component.find(NxFilterInput);

    expect(input).toHaveProp('value', 'foo');
    expect(input).toHaveProp('onChange', onSearchTextChange);
  });

  it('adds the nx-text-input--long class to the input if the `long` prop is set', function() {
    expect(getShallow().find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: undefined }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: null }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');
    expect(getShallow({ long: false }).find(NxFilterInput)).not.toHaveClassName('nx-text-input--long');

    expect(getShallow({ long: true }).find(NxFilterInput)).toHaveClassName('nx-text-input--long');
  });

  it('passes the disabled prop to the input', function() {
    expect(getShallow().find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: undefined }).find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: null }).find(NxFilterInput)).toHaveProp('disabled', undefined);
    expect(getShallow({ disabled: false }).find(NxFilterInput)).toHaveProp('disabled', undefined);

    expect(getShallow({ disabled: true }).find(NxFilterInput)).toHaveProp('disabled', true);
  });

  it('renders an NxDropdownMenu if the searchText is non-empty and disabled is not true', function() {
    expect(getShallow()).not.toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: true })).not.toContainMatchingElement(NxDropdownMenu);

    expect(getShallow({ searchText: 'foo', disabled: false })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: undefined })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo', disabled: null })).toContainMatchingElement(NxDropdownMenu);
    expect(getShallow({ searchText: 'foo' })).toContainMatchingElement(NxDropdownMenu);
  });

  it('sets the nx-search-dropdown__menu class on the NxDropdownMenu', function() {
    expect(getShallow({ searchText: 'foo' }).find(NxDropdownMenu)).toHaveClassName('nx-search-dropdown__menu');
  });

  it('sets the dropdown menu contents to an NxLoadingSpinner if loading is true', function() {
    const loadingWithMatches = getShallow({ searchText: 'foo', matches: [{id: '1', displayName: '1'}], loading: true }),
        loadingWithNoMatches = getShallow({ searchText: 'foo', loading: true }),
        notLoading = getShallow({ searchText: 'foo' });

    expect(loadingWithMatches.find(NxDropdownMenu)).toContainMatchingElement(NxLoadingSpinner);
    expect(loadingWithNoMatches.find(NxDropdownMenu)).toContainMatchingElement(NxLoadingSpinner);
    expect(notLoading.find(NxDropdownMenu)).not.toContainMatchingElement(NxLoadingSpinner);
  });

  it('sets the dropdown menu contents to buttons for each match if not loading', function() {
    const matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        loadingWithMatches = getShallow({ searchText: 'foo', matches, loading: true }),
        notLoading = getShallow({ matches, searchText: 'foo' }),
        notLoadingDropdownMenu = notLoading.find(NxDropdownMenu);

    expect(loadingWithMatches).not.toContainMatchingElement('button');

    expect(notLoadingDropdownMenu.children().length).toBe(2);
    expect(notLoadingDropdownMenu.childAt(0)).toMatchSelector('button.nx-dropdown-button');
    expect(notLoadingDropdownMenu.childAt(0)).toHaveText('One');
    expect(notLoadingDropdownMenu.childAt(1)).toMatchSelector('button.nx-dropdown-button');
    expect(notLoadingDropdownMenu.childAt(1)).toHaveText('Two');
  });

  it('sets an onClick handler on the menu button that fires onSelect with the match object', function() {
    const onSelect = jest.fn(),
        matches = [
          { id: '1', displayName: 'One' },
          { id: '2', displayName: 'Two' }
        ],
        menu = getShallow({ matches, onSelect, searchText: 'foo' }).find(NxDropdownMenu);

    expect(onSelect).not.toHaveBeenCalled();

    menu.childAt(1).simulate('click');

    expect(onSelect).toHaveBeenCalledWith({ id: '2', displayName: 'Two' });
  });

  it('sets the dropdown menu contents to an empty message if not loading and no results', function() {
    const loadingWithNoMatches = getShallow({ searchText: 'foo', loading: true }),
        notLoading = getShallow({ searchText: 'foo' });

    expect(loadingWithNoMatches).not.toContainMatchingElement('.nx-search-dropdown__empty-message');
    expect(notLoading.find('.nx-search-dropdown__empty-message')).toExist();
    expect(notLoading.find('.nx-search-dropdown__empty-message')).toHaveText('No Results Found');
  });

  it('sets the empty message from the emptyMessage prop', function() {
    const component = getShallow({ searchText: 'foo', emptyMessage: 'asdfasdf' });

    expect(component.find('.nx-search-dropdown__empty-message')).toHaveText('asdfasdf');
  });

  it('sets focus to the filter input if focus is within the dropdown menu when the menu is closed', function() {
    const component = getMounted(
      { searchText: 'foo', matches: [{ id: '1', displayName: 'foo' }] },
      { attachTo: mountPoint }
    );

    (component.find('.nx-dropdown-button').getDOMNode() as HTMLElement).focus();

    component.setProps({ searchText: '' });

    expect(component.find('.nx-dropdown-button')).not.toExist();
    expect(document.activeElement === component.find('.nx-search-dropdown__input input').getDOMNode()).toBe(true);
  });
});
