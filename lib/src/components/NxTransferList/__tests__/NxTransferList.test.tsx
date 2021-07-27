/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactWrapper } from 'enzyme';

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

    it('fires onChange with a set containing all ids when Transfer All is clicked', function() {
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
    });

    it('fires onChange with an empty set when Remove All is clicked', function() {
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
});
