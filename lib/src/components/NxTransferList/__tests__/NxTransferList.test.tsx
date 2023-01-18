/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ShallowWrapper } from 'enzyme';
import 'jest-enzyme';
import { always } from 'ramda';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxTransferList, { Props } from '../NxTransferList';
import NxTransferListHalf from '../../NxTransferListHalf/NxTransferListHalf';

describe('NxTransferList', function() {
  const minimalProps = {
        allItems: [],
        selectedItems: new Set<number>(),
        availableItemsFilter: '',
        selectedItemsFilter: '',
        onAvailableItemsFilterChange: () => {},
        onSelectedItemsFilterChange: () => {},
        onChange: () => {}
      },
      getShallow = getShallowComponent<Props<string | number>>(NxTransferList, minimalProps);

  it('renders a div with the nx-transfer-list class', function() {
    expect(getShallow()).toMatchSelector('div.nx-transfer-list');
  });

  it('adds additional specified div attrs', function() {
    const component = getShallow({ id: 'foo', lang: 'en-US' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-US');
  });

  it('adds additional specified class names', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-transfer-list');
  });

  it('renders two NxTransferListHalfs, one for available items and one for selected', function() {
    const component = getShallow();

    expect(component.childAt(0)).toMatchSelector(NxTransferListHalf);
    expect(component.childAt(1)).toMatchSelector(NxTransferListHalf);

    expect(component.childAt(0)).toHaveProp('label', 'Available Items');
    expect(component.childAt(1)).toHaveProp('label', 'Transferred Items');
  });

  it('sets the availableItemsLabel as the label on the first half or "Available Items" as the default', function() {
    expect(getShallow({ availableItemsLabel: 'foo' }).childAt(0)).toHaveProp('label', 'foo');
    expect(getShallow().childAt(0)).toHaveProp('label', 'Available Items');
  });

  it('sets the selectedItemsLabel as the label on the second half or "Transferred Items" as the default', function() {
    expect(getShallow({ selectedItemsLabel: 'foo' }).childAt(1)).toHaveProp('label', 'foo');
    expect(getShallow().childAt(1)).toHaveProp('label', 'Transferred Items');
  });

  it('passes the availableItemsFilter to the first half and the selectedItemsFilter to the second list as filterValues',
      function() {
        const component = getShallow({ availableItemsFilter: 'foo', selectedItemsFilter: 'bar' });

        expect(component.childAt(0)).toHaveProp('filterValue', 'foo');
        expect(component.childAt(1)).toHaveProp('filterValue', 'bar');
      }
  );

  it('passes onAvailableItemsFilterChange and onSelectedItemsFilterChange as the onFilterChange props of the halves',
      function() {
        const onAvailableItemsFilterChange = jest.fn(),
            onSelectedItemsFilterChange = jest.fn(),
            component = getShallow({ onAvailableItemsFilterChange, onSelectedItemsFilterChange });

        expect(component.childAt(0)).toHaveProp('onFilterChange', onAvailableItemsFilterChange);
        expect(component.childAt(1)).toHaveProp('onFilterChange', onSelectedItemsFilterChange);
      }
  );

  it('passes showMoveAll to the halves, defaulting to false', function() {
    expect(getShallow().childAt(0)).toHaveProp('showMoveAll', false);
    expect(getShallow().childAt(1)).toHaveProp('showMoveAll', false);

    expect(getShallow({ showMoveAll: false }).childAt(0)).toHaveProp('showMoveAll', false);
    expect(getShallow({ showMoveAll: false }).childAt(1)).toHaveProp('showMoveAll', false);

    expect(getShallow({ showMoveAll: null }).childAt(0)).toHaveProp('showMoveAll', false);
    expect(getShallow({ showMoveAll: null }).childAt(1)).toHaveProp('showMoveAll', false);

    expect(getShallow({ showMoveAll: true }).childAt(0)).toHaveProp('showMoveAll', true);
    expect(getShallow({ showMoveAll: true }).childAt(1)).toHaveProp('showMoveAll', true);
  });

  it('calls onChange with the selected items set with added ids when the first half\'s moveAll is clicked', function() {
    const onChange = jest.fn(),
        allItems = [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'qwerty' }],
        selectedItems = new Set([1]),
        component = getShallow({ onChange, allItems, selectedItems, showMoveAll: true });

    expect(onChange).not.toHaveBeenCalled();

    component.childAt(0).simulate('moveAll', [3]);

    expect(onChange).toHaveBeenCalledWith(new Set([1, 3]));
  });

  it('calls onChange with the selected items set without removed ids when the second half\'s moveAll is clicked',
      function() {
        const onChange = jest.fn(),
            allItems = [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'qwerty' }],
            selectedItems = new Set([1, 2]),
            component = getShallow({ onChange, allItems, selectedItems, showMoveAll: true });

        expect(onChange).not.toHaveBeenCalled();

        component.childAt(1).simulate('moveAll', [1]);

        expect(onChange).toHaveBeenCalledWith(new Set([2]));
      }
  );

  it('sets isSelected to false on the first half and true on the second one', function() {
    expect(getShallow().childAt(0)).toHaveProp('isSelected', false);
    expect(getShallow().childAt(1)).toHaveProp('isSelected', true);
  });

  describe('items', function() {
    const allItems = [{
          id: 1,
          displayName: 'foo'
        }, {
          id: 2,
          displayName: 'bar'
        }, {
          id: 3,
          displayName: 'baz'
        }, {
          id: 4,
          displayName: 'qwerty'
        }],
        selectedItems = new Set([2, 4]);

    let onChange: jest.Mock,
        component: ShallowWrapper;

    beforeEach(function() {
      onChange = jest.fn();
      component = getShallow({ allItems, selectedItems, onChange });
    });

    it('renders items present in allItems but missing from selectedItems into the available side', function() {
      const firstHalf = component.childAt(0);

      expect(firstHalf).toHaveProp('items', [{ id: 1, displayName: 'foo' }, { id: 3, displayName: 'baz' }]);
    });

    it('renders items present in allItems and selectedItems into the selected side', function() {
      const secondHalf = component.childAt(1);

      expect(secondHalf).toHaveProp('items', [{ id: 2, displayName: 'bar' }, { id: 4, displayName: 'qwerty' }]);
    });

    it('fires onChange with a new Set with the clicked item added when the first half fires onItemChange', function() {
      expect(onChange).not.toHaveBeenCalled();

      component.childAt(0).simulate('itemChange', true, 1);

      expect(onChange).toHaveBeenCalledWith(new Set([1, 2, 4]));

      // ensure original set was not mutated
      expect(selectedItems).toEqual(new Set([2, 4]));
    });

    it('fires onChange with a new Set with the clicked item removed when the second half fires onItemChange',
        function() {
          expect(onChange).not.toHaveBeenCalled();

          component.childAt(1).simulate('itemChange', false, 2);

          expect(onChange).toHaveBeenCalledWith(new Set([4]));

          // ensure original set was not mutated
          expect(selectedItems).toEqual(new Set([2, 4]));
        }
    );
  });

  describe('footers', function() {
    it('passes a footer for the available items', function() {
      const oneAvailable = getShallow({ allItems: [{ id: 1, displayName: 'foo' }] }),
          zeroAvailable = getShallow({ allItems: [{ id: 1, displayName: 'foo' }], selectedItems: new Set([1]) }),
          threeAvailable = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }]
          });

      expect(oneAvailable.childAt(0)).toHaveProp('footerContent', '1 item available');
      expect(zeroAvailable.childAt(0)).toHaveProp('footerContent', '0 items available');
      expect(threeAvailable.childAt(0)).toHaveProp('footerContent', '3 items available');
    });

    it('passes a footer for the selected items', function() {
      const zeroSelected = getShallow(),
          oneSelected = getShallow({ allItems: [{ id: 1, displayName: 'foo' }], selectedItems: new Set([1]) }),
          threeSelected = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }],
            selectedItems: new Set([1, 2, 3])
          });

      expect(oneSelected.childAt(1)).toHaveProp('footerContent', '1 item transferred');
      expect(zeroSelected.childAt(1)).toHaveProp('footerContent', '0 items transferred');
      expect(threeSelected.childAt(1)).toHaveProp('footerContent', '3 items transferred');
    });

    it('passes a footer for the available items using availableItemsCountFormatter if specified', function() {
      const availableItemsCountFormatter = (n: number) => `To ${n} and beyond!`,
          selectedItemsCountFormatter = always('moo'); // ensure this isn't used for these

      const oneAvailable = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }],
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          }),
          zeroAvailable = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }],
            selectedItems: new Set([1]),
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          }),
          threeAvailable = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }],
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          });

      expect(oneAvailable.childAt(0)).toHaveProp('footerContent', 'To 1 and beyond!');
      expect(zeroAvailable.childAt(0)).toHaveProp('footerContent', 'To 0 and beyond!');
      expect(threeAvailable.childAt(0)).toHaveProp('footerContent', 'To 3 and beyond!');
    });

    it('passes a footer for the selected items using selectedItemsCountFormatter if specified', function() {
      const selectedItemsCountFormatter = (n: number) => `To ${n} and beyond!`,
          availableItemsCountFormatter = always('moo'); // ensure this isn't used for these

      const oneSelected = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }],
            selectedItems: new Set([1]),
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          }),
          zeroSelected = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }],
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          }),
          threeSelected = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }],
            selectedItems: new Set([1, 2, 3]),
            availableItemsCountFormatter,
            selectedItemsCountFormatter
          });

      expect(oneSelected.childAt(1)).toHaveProp('footerContent', 'To 1 and beyond!');
      expect(zeroSelected.childAt(1)).toHaveProp('footerContent', 'To 0 and beyond!');
      expect(threeSelected.childAt(1)).toHaveProp('footerContent', 'To 3 and beyond!');
    });
  });

  it('throw an error when passing a Set to selectedItems when allowReordering is true', function() {
    expect(() => getShallow({ allowReordering: true }))
        .toThrow('selectedItems must be an array if allowReordering is true');
  });

  describe('allowReordering', function() {
    const allItems = [{
          id: 1,
          displayName: 'foo'
        }, {
          id: 2,
          displayName: 'bar'
        }, {
          id: 3,
          displayName: 'baz'
        }, {
          id: 4,
          displayName: 'qwerty'
        }],
        selectedItems = [2, 4, 3];

    let onChange: jest.Mock,
        component: ShallowWrapper;

    beforeEach(function() {
      onChange = jest.fn();
      component = getShallow({ allowReordering: true, allItems, selectedItems, onChange });
    });

    it('renders items present in allItems but missing from selectedItems into the available side', function() {
      const firstHalf = component.childAt(0);

      const items = [
        { id: 1, displayName: 'foo' }
      ];

      expect(firstHalf).toHaveProp('items', items);
    });

    it('renders items present in allItems and selectedItems into the selected side', function() {
      const secondHalf = component.childAt(1);

      const items = [
        { id: 2, displayName: 'bar' },
        { id: 4, displayName: 'qwerty' },
        { id: 3, displayName: 'baz' }
      ];

      expect(secondHalf).toHaveProp('items', items);
    });

    it('fires onChange with a new Array with the clicked item added at the end '
    + 'when the first half fires onItemChange', function() {
      expect(onChange).not.toHaveBeenCalled();

      const firstHalf = component.childAt(0);

      firstHalf.simulate('itemChange', true, 1);

      expect(onChange).toHaveBeenCalledWith([2, 4, 3, 1]);

      // ensure original array was not mutated
      expect(selectedItems).toEqual([2, 4, 3]);
    });

    it('fires onChange with a new Array of reordered items', function() {
      expect(onChange).not.toHaveBeenCalled();

      const secondHalf = component.childAt(1);

      secondHalf.simulate('reorderItem', 2, 1);

      expect(onChange).toHaveBeenCalledWith([4, 2, 3]);

      // ensure original array was not mutated
      expect(selectedItems).toEqual([2, 4, 3]);

      secondHalf.simulate('reorderItem', 4, -1);

      expect(onChange).toHaveBeenCalledWith([4, 2, 3]);
    });

    it('onChange should not be fired if trying to move top most item up or bottom most item down', function() {
      expect(onChange).not.toHaveBeenCalled();

      const secondHalf = component.childAt(1);

      secondHalf.simulate('reorderItem', 2, -1);

      expect(onChange).not.toHaveBeenCalled();

      secondHalf.simulate('reorderItem', 3, 1);

      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
