/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import DataItem from '../../../util/DataItem';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxSearchDropdown from '../../NxSearchDropdown/NxSearchDropdown';
import NxTransferListHalf from '../../NxTransferListHalf/NxTransferListHalf';
import NxSearchTransferList, { Props } from '../NxSearchTransferList';

describe('NxSearchTransferList', function() {
  const minimalProps = {
        searchText: '',
        onSearchTextChange: () => {},
        onSearch: () => {},
        loading: false,
        searchMatches: [],
        onSearchMatchSelect: () => {},
        addedItems: [],
        onRemove: () => {},
        addedItemsFilter: '',
        onAddedItemsFilterChange: () => {}
      },
      getShallow = getShallowComponent<Props<string | number>>(NxSearchTransferList, minimalProps);

  it('renders a div with the nx-search-transfer-list class', function() {
    expect(getShallow()).toMatchSelector('div.nx-search-transfer-list');
  });

  it('adds additional specified div attrs', function() {
    const component = getShallow({ id: 'foo', lang: 'en-US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-US');
  });

  it('adds additional specified class names', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-search-transfer-list');
  });

  it('renders an NxSearchDropdown and a NxTransferListHalf as children', function() {
    const component = getShallow();

    expect(component.children().length).toBe(2);
    expect(component.childAt(0)).toMatchSelector(NxSearchDropdown);
    expect(component.childAt(1)).toMatchSelector(NxTransferListHalf);
  });

  it('passes the searchText, onSearchTextChange, onSearch, loading, loadError, searchMatches, ' +
      'and onSearchMatchSelect props to the NxSearchDropdown', function() {
    const onSearchTextChange = jest.fn(),
        onSearch = jest.fn(),
        onSearchMatchSelect = jest.fn(),
        searchMatches = [{ id: 1, displayName: 'bar' }],
        component = getShallow({
          searchText: 'foo',
          onSearchTextChange,
          onSearch,
          loading: true,
          loadError: 'baaaaad',
          searchMatches,
          onSearchMatchSelect
        }),
        searchDropdown = component.find(NxSearchDropdown);

    expect(searchDropdown).toHaveProp('searchText', 'foo');
    expect(searchDropdown).toHaveProp('onSearchTextChange', onSearchTextChange);
    expect(searchDropdown).toHaveProp('onSearch', onSearch);
    expect(searchDropdown).toHaveProp('loading', true);
    expect(searchDropdown).toHaveProp('error', 'baaaaad');
    expect(searchDropdown).toHaveProp('matches', searchMatches);
    expect(searchDropdown).toHaveProp('onSelect', onSearchMatchSelect);
  });

  it('passes the addedItemsLabel, addedItemsFilter, onAddedItemsFilterChange, showRemoveAll, addedItems, ' +
      'and filterFn to the NxTransferListHalf', function() {
    const onAddedItemsFilterChange = jest.fn(),
        filterFn = jest.fn(),
        addedItems = [{ id: 1, displayName: 'bar' }],
        component = getShallow({
          addedItemsLabel: 'foo',
          addedItemsFilter: 'bar',
          onAddedItemsFilterChange,
          showRemoveAll: true,
          addedItems,
          filterFn
        }),
        transferListHalf = component.find(NxTransferListHalf);

    expect(transferListHalf).toHaveProp('label', 'foo');
    expect(transferListHalf).toHaveProp('filterValue', 'bar');
    expect(transferListHalf).toHaveProp('onFilterChange', onAddedItemsFilterChange);
    expect(transferListHalf).toHaveProp('showMoveAll', true);
    expect(transferListHalf).toHaveProp('items', addedItems);
    expect(transferListHalf).toHaveProp('filterFn', filterFn);
  });

  it('sets the NxTransferListHalf showMoveAll to false by default', function() {
    expect(getShallow().find(NxTransferListHalf)).toHaveProp('showMoveAll', false);
  });

  it('sets the NxTransferListHalf isSelected prop to true', function() {
    expect(getShallow().find(NxTransferListHalf)).toHaveProp('isSelected', true);
  });

  it('sets the NxTransferListHalf footerContent based on the addedItemsCountFormatter and the size of addedItems',
      function() {
        const component = getShallow({
          addedItemsCountFormatter: n => `!!${n}!!`,
          addedItems: [{ id: 'a', displayName: 'a' }, { id: 'b', displayName: 'b' }]
        });

        expect(component.find(NxTransferListHalf)).toHaveProp('footerContent', '!!2!!');
      }
  );

  it('sets the NxTransferListHalf footerContent to "x items Added" where x is the number of addedItems by default',
      function() {
        const noItems: DataItem[] = [],
            oneItem = [{ id: 'a', displayName: 'a' }],
            twoItems = [{ id: 'a', displayName: 'a' }, { id: 'b', displayName: 'b' }],
            noItemComponent = getShallow({ addedItems: noItems }),
            oneItemComponent = getShallow({ addedItems: oneItem }),
            twoItemComponent = getShallow({ addedItems: twoItems });

        expect(noItemComponent.find(NxTransferListHalf)).toHaveProp('footerContent', '0 items Added');
        expect(oneItemComponent.find(NxTransferListHalf)).toHaveProp('footerContent', '1 item Added');
        expect(twoItemComponent.find(NxTransferListHalf)).toHaveProp('footerContent', '2 items Added');
      }
  );

  it('calls onRemove without moved items when the NxTransferListHalf onMoveAll is fired', function() {
    const onRemove = jest.fn(),
        component = getShallow({
          onRemove,
          addedItems: [{ id: 'c', displayName: 'a' }, { id: 'B', displayName: 'b' }, { id: 'C', displayName: 'c' }]
        });

    expect(onRemove).not.toHaveBeenCalled();

    component.find(NxTransferListHalf).simulate('moveAll', ['C']);
    expect(onRemove).toHaveBeenCalledWith([{ id: 'c', displayName: 'a' }, { id: 'B', displayName: 'b' }]);
  });

  it('calls onRemove without the specified item when NxTransferListHalf onItemChange is called', function() {
    const onRemove = jest.fn(),
        component = getShallow({
          onRemove,
          addedItems: [{ id: 'c', displayName: 'a' }, { id: 'B', displayName: 'b' }, { id: 'C', displayName: 'c' }]
        });

    expect(onRemove).not.toHaveBeenCalled();

    component.find(NxTransferListHalf).simulate('itemChange', false, 'c');
    expect(onRemove).toHaveBeenCalledWith([{ id: 'B', displayName: 'b' }, { id: 'C', displayName: 'c' }]);
  });
});
