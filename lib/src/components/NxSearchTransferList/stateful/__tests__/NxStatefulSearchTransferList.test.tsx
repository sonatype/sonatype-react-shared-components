/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getShallowComponent } from '../../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxStatefulSearchTranferList, { Props } from '../NxStatefulSearchTransferList';

describe('NxStatefulSearchTranferList', function() {
  const minimalProps = {
        onSearch: () => {},
        loading: false,
        searchMatches: [],
        onSearchMatchSelect: () => {},
        addedItems: [],
        onRemove: () => {}
      },
      getShallow = getShallowComponent<Props<string | number>>(NxStatefulSearchTranferList, minimalProps);

  it('passes all props except onSearchMatchSelect to NxSearchTransferList', function() {
    const addedItems = [{ id: 'a', displayName: 'a' }, { id: 'b', displayName: 'b' }],
        component = getShallow({
          addedItems,
          id: 'foo',
          lang: 'en-US'
        });

    expect(component).toHaveProp('onSearch', minimalProps.onSearch);
    expect(component).toHaveProp('loading', minimalProps.loading);
    expect(component).toHaveProp('searchMatches', minimalProps.searchMatches);
    expect(component).not.toHaveProp('onSearchMatchSelect', minimalProps.onSearchMatchSelect);
    expect(component).toHaveProp('onRemove', minimalProps.onRemove);
    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-US');
    expect(component).toHaveProp('addedItems', addedItems);
  });

  it('intiializes searchText and addedItemsFilter to empty strings', function() {
    const component = getShallow();

    expect(component).toHaveProp('searchText', '');
    expect(component).toHaveProp('addedItemsFilter', '');
  });

  it('updates searchText when onSearchTextChange fires', function() {
    const component = getShallow();

    component.simulate('searchTextChange', 'foo');
    expect(component).toHaveProp('searchText', 'foo');
  });

  it('updates addedItemsFilter when onAddedItemsFilterChange fires', function() {
    const component = getShallow();

    component.simulate('addedItemsFilterChange', 'foo');
    expect(component).toHaveProp('addedItemsFilter', 'foo');
  });

  it('clears the searchText and fires its own onSearchMatchSelect when the NxSearchTransferList onSearchMatchSelect ' +
      'is fired', function() {

    const onSearchMatchSelect = jest.fn(),
        component = getShallow({ onSearchMatchSelect });

    component.simulate('searchTextChange', 'foo');
    expect(component).toHaveProp('searchText', 'foo');
    expect(onSearchMatchSelect).not.toHaveBeenCalled();

    component.simulate('searchMatchSelect', { id: 1, displayName: 'a' });

    expect(onSearchMatchSelect).toHaveBeenCalledWith({ id: 1, displayName: 'a' });
    expect(component).toHaveProp('searchText', '');
  });
});
