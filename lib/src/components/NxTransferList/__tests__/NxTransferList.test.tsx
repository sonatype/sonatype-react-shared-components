/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { pipe, includes, always } from 'ramda';

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTransferList, { Props } from '../NxTransferList';
import NxFieldset from '../../NxFieldset/NxFieldset';
import NxFilterInput from '../../NxFilterInput/NxFilterInput';

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
      getShallow = getShallowComponent<Props<number>>(NxTransferList, minimalProps),
      getMounted = getMountedComponent<Props<number>>(NxTransferList, minimalProps);

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

  it('renders two .nx-transfer-list__half NxFieldsets, one for available items and one for selected', function() {
    const component = getShallow();

    expect(component.childAt(0)).toMatchSelector(NxFieldset);
    expect(component.childAt(0)).toMatchSelector('.nx-transfer-list__half');
    expect(component.childAt(1)).toMatchSelector(NxFieldset);
    expect(component.childAt(1)).toMatchSelector('.nx-transfer-list__half');

    expect(component.childAt(0)).toHaveProp('label', 'Available Items');
    expect(component.childAt(1)).toHaveProp('label', 'Transferred Items');
  });

  it('sets the availableItemsLabel as the label on the first fieldset', function() {
    expect(getShallow({ availableItemsLabel: 'foo' }).childAt(0)).toHaveProp('label', 'foo');
  });

  it('sets the selectedItemsLabel as the label on the second fieldset', function() {
    expect(getShallow({ selectedItemsLabel: 'foo' }).childAt(1)).toHaveProp('label', 'foo');
  });

  it('renders an .nx-transfer-list__control-box as the only child of each fieldset', function() {
    const component = getShallow(),
        availableFieldset = component.childAt(0),
        selectedFieldset = component.childAt(1);

    expect(availableFieldset.children()).toMatchSelector('div.nx-transfer-list__control-box');
    expect(selectedFieldset.children()).toMatchSelector('div.nx-transfer-list__control-box');
  });

  it('renders an NxFilterInput with .nx-transfer-list__filter within each control box', function() {
    const controlBoxes = getShallow().find('.nx-transfer-list__control-box'),
        availableFilter = controlBoxes.at(0).find(NxFilterInput),
        selectedFilter = controlBoxes.at(1).find(NxFilterInput);

    expect(availableFilter).toExist();
    expect(availableFilter).toHaveClassName('nx-transfer-list__filter');
    expect(selectedFilter).toExist();
    expect(selectedFilter).toHaveClassName('nx-transfer-list__filter');
  });

  it('sets the value of the available filter from availableItemsFilter', function() {
    const component = getShallow({ availableItemsFilter: 'foo' }),
        input = component.find('.nx-transfer-list__half:first-child .nx-transfer-list__filter');

    expect(input).toHaveProp('value', 'foo');
  });

  it('sets the value of the selected filter from selectedItemsFilter', function() {
    const component = getShallow({ selectedItemsFilter: 'foo' }),
        input = component.find('.nx-transfer-list__half:last-child .nx-transfer-list__filter');

    expect(input).toHaveProp('value', 'foo');
  });

  it('sets the onChange handler of the available filter to the onAvailableItemsFilterChange prop', function() {
    const spy = jest.fn(),
        handlerArg = {},
        component = getShallow({ onAvailableItemsFilterChange: spy }),
        input = component.find('.nx-transfer-list__half:first-child .nx-transfer-list__filter');

    expect(spy).not.toHaveBeenCalled();

    input.simulate('change', handlerArg);

    expect(spy).toHaveBeenCalledWith(handlerArg);
  });

  it('sets the onChange handler of the selected filter to the onSelectedItemsFilterChange prop', function() {
    const spy = jest.fn(),
        handlerArg = {},
        component = getShallow({ onSelectedItemsFilterChange: spy }),
        input = component.find('.nx-transfer-list__half:last-child .nx-transfer-list__filter');

    expect(spy).not.toHaveBeenCalled();

    input.simulate('change', handlerArg);

    expect(spy).toHaveBeenCalledWith(handlerArg);
  });

  describe('move all buttons', function() {
    it('shows no .nx-transfer-list__move-all buttons if showMoveAll is not true', function() {
      expect(getShallow().find('nx-transfer-list__move-all')).not.toExist();
    });

    it('shows the Transfer All button in the Available side if showMoveAll is true', function() {
      const component = getShallow({ showMoveAll: true }),
          btn = component.find('.nx-transfer-list__half:first-child .nx-transfer-list__move-all'),
          icon = btn.find(NxFontAwesomeIcon);

      expect(btn).toIncludeText('Transfer All');
      expect(btn).toHaveProp('type', 'button');
      expect(btn).toMatchSelector('button');
      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faPlusCircle);
    });

    it('shows the Remove All button in the Selected side if showMoveAll is true', function() {
      const component = getShallow({ showMoveAll: true }),
          btn = component.find('.nx-transfer-list__half:last-child .nx-transfer-list__move-all'),
          icon = btn.find(NxFontAwesomeIcon);

      expect(btn).toIncludeText('Remove All');
      expect(btn).toHaveProp('type', 'button');
      expect(btn).toMatchSelector('button');
      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faTimesCircle);
    });

    it('fires onChange with a set containing all ids when Transfer All is clicked and no available item filter is set',
        function() {
          const onChange = jest.fn(),
              allItems = [{
                id: 1,
                displayName: 'foo'
              }, {
                id: 2,
                displayName: 'bar'
              }],
              selectedItems = new Set([2]),
              component = getShallow({ showMoveAll: true, allItems, selectedItems, onChange }),
              transferAllBtn = component.find('.nx-transfer-list__move-all').at(0);

          expect(onChange).not.toHaveBeenCalled();

          transferAllBtn.simulate('click');

          expect(onChange).toHaveBeenCalled();
          expect(onChange.mock.calls[0][0]).toEqual(new Set([1, 2]));

          expect(selectedItems).toEqual(new Set([2]));
        }
    );

    it('fires onChange with an empty set when Remove All is clicked and no selected item filter is set',
        function() {
          const onChange = jest.fn(),
              allItems = [{
                id: 1,
                displayName: 'foo'
              }, {
                id: 2,
                displayName: 'bar'
              }],
              selectedItems = new Set([2]),
              component = getShallow({ showMoveAll: true, allItems, selectedItems, onChange }),
              removeAllBtn = component.find('.nx-transfer-list__move-all').at(1);

          expect(onChange).not.toHaveBeenCalled();

          removeAllBtn.simulate('click');

          expect(onChange).toHaveBeenCalled();
          expect(onChange.mock.calls[0][0]).toEqual(new Set());

          expect(selectedItems).toEqual(new Set([2]));
        }
    );

    it('fires onChange with a set containing all previously selected ids and all ids matching the current ' +
        'availableItemsFilter when set', function() {
      const onChange = jest.fn(),
          allItems = [{
            id: 1,
            displayName: 'foo'
          }, {
            id: 2,
            displayName: 'bar'
          }, {
            id: 3,
            displayName: 'baz'
          }],
          selectedItems = new Set([2]),
          component = getShallow({
            showMoveAll: true,
            availableItemsFilter: 'fo',
            allItems,
            selectedItems,
            onChange
          }),
          transferAllBtn = component.find('.nx-transfer-list__move-all').at(0);

      expect(onChange).not.toHaveBeenCalled();

      transferAllBtn.simulate('click');

      expect(onChange).toHaveBeenCalled();
      expect(onChange.mock.calls[0][0]).toEqual(new Set([1, 2])); // not 3

      expect(selectedItems).toEqual(new Set([2]));
    });

    it('fires onChange with a set containing only those ids which were previously selected and which do not ' +
        'match the selectedItemsFilter when set', function() {
      const onChange = jest.fn(),
          allItems = [{
            id: 1,
            displayName: 'foo'
          }, {
            id: 2,
            displayName: 'bar'
          }, {
            id: 3,
            displayName: 'baz'
          }],
          selectedItems = new Set([1, 2]),
          component = getShallow({
            showMoveAll: true,
            selectedItemsFilter: 'fo',
            allItems,
            selectedItems,
            onChange
          }),
          transferAllBtn = component.find('.nx-transfer-list__move-all').at(1);

      expect(onChange).not.toHaveBeenCalled();

      transferAllBtn.simulate('click');

      expect(onChange).toHaveBeenCalled();
      expect(onChange.mock.calls[0][0]).toEqual(new Set([2]));

      expect(selectedItems).toEqual(new Set([1, 2]));
    });
  });

  it('renders an .nx-transfer-list__item-list on each side', function() {
    const controlBoxes = getShallow().find('.nx-transfer-list__control-box'),
        availableControlBox = controlBoxes.at(0),
        selectedControlBox = controlBoxes.at(1);

    expect(availableControlBox).toContainMatchingElement('div.nx-transfer-list__item-list');
    expect(selectedControlBox).toContainMatchingElement('div.nx-transfer-list__item-list');
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
        component: ReactWrapper,
        mountPoint: HTMLElement;

    beforeEach(function() {
      mountPoint = document.createElement('div');
      document.body.append(mountPoint);

      onChange = jest.fn();
      component = getMounted({ allItems, selectedItems, onChange }, { attachTo: mountPoint });
    });

    afterEach(function() {
      document.body.removeChild(mountPoint);
    });

    it('renders items present in allItems but missing from selectedItems into the available side', function() {
      const list = component.find('.nx-transfer-list__item-list').at(0);

      expect(list.children().length).toBe(2);

      const item = list.find('.nx-transfer-list__item').at(0),
          icon = item.find(NxFontAwesomeIcon),
          checkbox = item.find('input.nx-transfer-list__checkbox');

      expect(item).toExist();
      expect(item).toMatchSelector('label');
      expect(item).toHaveText('foo');

      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faPlusCircle);

      expect(checkbox).toExist();
      expect(checkbox).toHaveProp('type', 'checkbox');
      expect(checkbox).toHaveProp('checked', false);

      const otherItem = list.find('.nx-transfer-list__item').at(1);

      expect(otherItem).toHaveText('baz');
    });

    it('renders items present in allItems and in selectedItems into the selected side', function() {
      const list = component.find('.nx-transfer-list__item-list').at(1);

      expect(list.children().length).toBe(2);

      const item = list.find('.nx-transfer-list__item').at(0),
          icon = item.find(NxFontAwesomeIcon),
          checkbox = item.find('input.nx-transfer-list__checkbox');

      expect(item).toExist();
      expect(item).toMatchSelector('label');
      expect(item).toHaveText('bar');

      expect(icon).toExist();
      expect(icon).toHaveProp('icon', faTimesCircle);

      expect(checkbox).toExist();
      expect(checkbox).toHaveProp('type', 'checkbox');
      expect(checkbox).toHaveProp('checked', true);

      const otherItem = list.find('.nx-transfer-list__item').at(1);

      expect(otherItem).toHaveText('qwerty');
    });

    it('fires onChange with a new Set with the clicked item added when an available item is clicked', function() {
      const availableItem = component
              .find('.nx-transfer-list__half').at(0)
              .find('.nx-transfer-list__item').at(0),
          availableItemCheckbox = availableItem.find('.nx-transfer-list__checkbox');

      expect(onChange).not.toHaveBeenCalled();
      expect(availableItem).toIncludeText('foo');

      availableItemCheckbox.getDOMNode<HTMLElement>().click();

      expect(onChange).toHaveBeenCalled();

      const newSet = onChange.mock.calls[0][0];

      expect(newSet).toEqual(new Set([1, 2, 4]));

      // ensure original set was not mutated
      expect(selectedItems).toEqual(new Set([2, 4]));
    });

    it('fires onChange with a new Set with the clicked item removed when a selected item is clicked', function() {
      const halves = component.find('fieldset.nx-transfer-list__half'),
          half = halves.at(1),
          selectedItem = half
              .find('.nx-transfer-list__item').at(0),
          selectedItemCheckbox = selectedItem.find('.nx-transfer-list__checkbox');

      expect(onChange).not.toHaveBeenCalled();
      expect(selectedItem).toIncludeText('bar');

      selectedItemCheckbox.getDOMNode<HTMLElement>().click();

      expect(onChange).toHaveBeenCalled();

      const newSet = onChange.mock.calls[0][0];

      expect(newSet).toEqual(new Set([4]));

      // ensure original set was not mutated
      expect(selectedItems).toEqual(new Set([2, 4]));
    });
  });

  describe('filtering', function() {
    const allItems = [{
          id: 1,
          displayName: 'foo'
        }, {
          id: 2,
          displayName: 'Foo'
        }, {
          id: 3,
          displayName: 'bar'
        }, {
          id: 4,
          displayName: 'foo'
        }, {
          id: 5,
          displayName: 'Foo'
        }, {
          id: 6,
          displayName: 'bar'
        }],
        selectedItems = new Set([4, 5, 6]);

    const getComponent = (moreProps: Partial<Props<number>>) => getMounted({ allItems, selectedItems, ...moreProps }),
        getAvailable = pipe(
            getComponent,
            c => c.find('fieldset.nx-transfer-list__half').at(0).find('label.nx-transfer-list__item')
        ),
        getSelected = pipe(
            getComponent,
            c => c.find('fieldset.nx-transfer-list__half').at(1).find('label.nx-transfer-list__item')
        );

    it('renders only available items which contain the availableItemsFilter case-insensitively', function() {
      const availableItems = getAvailable({ availableItemsFilter: 'fo', selectedItemsFilter: 'b' });

      expect(availableItems.length).toBe(2);

      expect(availableItems.filterWhere(i => i.text().includes('foo'))).toExist();
      expect(availableItems.filterWhere(i => i.text().includes('Foo'))).toExist();
      expect(availableItems.filterWhere(i => i.text().includes('bar'))).not.toExist();
    });

    it('renders only selected items which contain the selectedItemsFilter case-insensitively', function() {
      const selectedItems = getSelected({ selectedItemsFilter: 'fo', availableItemsFilter: 'b' });

      expect(selectedItems.length).toBe(2);

      expect(selectedItems.filterWhere(i => i.text().includes('foo'))).toExist();
      expect(selectedItems.filterWhere(i => i.text().includes('Foo'))).toExist();
      expect(selectedItems.filterWhere(i => i.text().includes('bar'))).not.toExist();
    });

    it('renders only available items that match the availableItemsFilter according to the filterFn when specified',
        function() {
          const availableItems = getAvailable({
            availableItemsFilter: 'fo',
            selectedItemsFilter: 'b',
            filterFn: includes // case sensitive inclusion
          });

          expect(availableItems.length).toBe(1);

          expect(availableItems.filterWhere(i => i.text().includes('foo'))).toExist();
          expect(availableItems.filterWhere(i => i.text().includes('bar'))).not.toExist();
        }
    );

    it('renders only selected items that match the selectedItemsFilter according to the filterFn when specified',
        function() {
          const selectedItems = getSelected({
            selectedItemsFilter: 'fo',
            availableItemsFilter: 'b',
            filterFn: includes // case sensitive inclusion
          });

          expect(selectedItems.length).toBe(1);

          expect(selectedItems.filterWhere(i => i.text().includes('bar'))).not.toExist();
          expect(selectedItems.filterWhere(i => i.text().includes('foo'))).toExist();
        }
    );
  });

  describe('footers', function() {
    it('renders an nx-transfer-list__footer for the available items', function() {
      const oneAvailable = getShallow({ allItems: [{ id: 1, displayName: 'foo' }] }),
          zeroAvailable = getShallow({ allItems: [{ id: 1, displayName: 'foo' }], selectedItems: new Set([1]) }),
          threeAvailable = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }]
          }),
          oneAvailableFooter = oneAvailable.find('.nx-transfer-list__half').at(0).find('.nx-transfer-list__footer'),
          zeroAvailableFooter = zeroAvailable.find('.nx-transfer-list__half').at(0).find('.nx-transfer-list__footer'),
          threeAvailableFooter = threeAvailable.find('.nx-transfer-list__half').at(0).find('.nx-transfer-list__footer');

      expect(oneAvailableFooter).toHaveText('1 item available');
      expect(zeroAvailableFooter).toHaveText('0 items available');
      expect(threeAvailableFooter).toHaveText('3 items available');
    });

    it('renders an nx-transfer-list__footer for the selected items', function() {
      const zeroSelected = getShallow(),
          oneSelected = getShallow({ allItems: [{ id: 1, displayName: 'foo' }], selectedItems: new Set([1]) }),
          threeSelected = getShallow({
            allItems: [{ id: 1, displayName: 'foo' }, { id: 2, displayName: 'bar' }, { id: 3, displayName: 'baz' }],
            selectedItems: new Set([1, 2, 3])
          }),
          oneSelectedFooter = oneSelected.find('.nx-transfer-list__half').at(1).find('.nx-transfer-list__footer'),
          zeroSelectedFooter = zeroSelected.find('.nx-transfer-list__half').at(1).find('.nx-transfer-list__footer'),
          threeSelectedFooter = threeSelected.find('.nx-transfer-list__half').at(1).find('.nx-transfer-list__footer');

      expect(oneSelectedFooter).toHaveText('1 item transferred');
      expect(zeroSelectedFooter).toHaveText('0 items transferred');
      expect(threeSelectedFooter).toHaveText('3 items transferred');
    });

    it('renders an nx-transfer-list__footer for the available items using availableItemsCountFormatter if specified',
        function() {
          const availableItemsCountFormatter = (n: number) => `To ${n} and beyond!`,
              selectedItemsCountFormatter = always('moo'); // ensure this isn't used for these

          const getAvailableFooter = (c: ShallowWrapper) =>
            c.find('.nx-transfer-list__half').at(0).find('.nx-transfer-list__footer');

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
              }),
              oneAvailableFooter = getAvailableFooter(oneAvailable),
              zeroAvailableFooter = getAvailableFooter(zeroAvailable),
              threeAvailableFooter = getAvailableFooter(threeAvailable);

          expect(oneAvailableFooter).toHaveText('To 1 and beyond!');
          expect(zeroAvailableFooter).toHaveText('To 0 and beyond!');
          expect(threeAvailableFooter).toHaveText('To 3 and beyond!');
        }
    );

    it('renders an nx-transfer-list__footer for the selected items using selectedItemsCountFormatter if specified',
        function() {
          const selectedItemsCountFormatter = (n: number) => `To ${n} and beyond!`,
              availableItemsCountFormatter = always('moo'); // ensure this isn't used for these

          const getSelectedFooter = (c: ShallowWrapper) =>
            c.find('.nx-transfer-list__half').at(1).find('.nx-transfer-list__footer');

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
              }),
              oneSelectedFooter = getSelectedFooter(oneSelected),
              zeroSelectedFooter = getSelectedFooter(zeroSelected),
              threeSelectedFooter = getSelectedFooter(threeSelected);

          expect(oneSelectedFooter).toHaveText('To 1 and beyond!');
          expect(zeroSelectedFooter).toHaveText('To 0 and beyond!');
          expect(threeSelectedFooter).toHaveText('To 3 and beyond!');
        }
    );
  });
});
