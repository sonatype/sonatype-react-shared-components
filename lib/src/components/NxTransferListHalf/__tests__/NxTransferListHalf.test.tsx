/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faArrowDown, faArrowUp, faEdit, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { includes } from 'ramda';
import React from 'react';

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxButton from '../../NxButton/NxButton';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxFieldset from '../../NxFieldset/NxFieldset';
import NxFilterInput from '../../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

import NxTransferListHalf from '../NxTransferListHalf';
import { Props } from '../types';

describe('NxTransferListHalf', function() {
  const minimalProps = {
        label: 'Foo',
        filterValue: '',
        onFilterChange: () => {},
        showMoveAll: false,
        onMoveAll: () => {},
        items: [],
        isSelected: false,
        onItemChange: () => {},
        footerContent: <div/>
      },
      getShallow = getShallowComponent<Props<number>>(NxTransferListHalf, minimalProps),
      getMounted = getMountedComponent<Props<number>>(NxTransferListHalf, minimalProps);

  it('renders an NxFieldset with the nx-transfer-list__half class', function() {
    expect(getShallow()).toMatchSelector(NxFieldset);
    expect(getShallow()).toHaveClassName('nx-transfer-list__half');
  });

  it('passes the label to the NxFieldset', function() {
    expect(getShallow()).toHaveProp('label', 'Foo');
  });

  it('renders a div with class nx-transfer-list__control-box within the fieldset', function() {
    expect(getShallow().children()).toMatchSelector('div.nx-transfer-list__control-box');
  });

  it('renders an NxFilterInput with class nx-transfer-list__filter within the control-box', function() {
    expect(getShallow().find('.nx-transfer-list__control-box > .nx-transfer-list__filter'))
        .toMatchSelector(NxFilterInput);
  });

  it('Sets the filter inputs placeholder to "filter"', function() {
    expect(getShallow().find(NxFilterInput)).toHaveProp('placeholder', 'Filter');
  });

  it('sets the filterValue as the value of the NxFilterInput', function() {
    expect(getShallow({ filterValue: 'foo' }).find(NxFilterInput)).toHaveProp('value', 'foo');
  });

  it('sets the onFilterChange handler as the filter input onChange', function() {
    const onFilterChange = jest.fn(),
        component = getShallow({ onFilterChange }).find(NxFilterInput);

    expect(component).toHaveProp('onChange', onFilterChange);
  });

  it('renders an .nx-transfer-list__move-all button only if showMoveAll is true', function() {
    expect(getShallow().find('.nx-transfer-list__move-all')).not.toExist();
    expect(getShallow({ showMoveAll: true }).find('button.nx-transfer-list__move-all')).toExist();
  });

  it('fires onMoveAll when the .nx-transfer-list__move-all button is clicked', function() {
    const onMoveAll = jest.fn(),
        component = getShallow({ onMoveAll, showMoveAll: true });

    expect(onMoveAll).not.toHaveBeenCalled();

    component.find('.nx-transfer-list__move-all').simulate('click');

    expect(onMoveAll).toHaveBeenCalledTimes(1);
  });

  it('passes onMoveAll an array containing every id if no filterValue is set', function() {
    const items = [{
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
        onMoveAll = jest.fn(),
        component = getShallow({ items, onMoveAll, showMoveAll: true });

    component.find('.nx-transfer-list__move-all').simulate('click');

    expect(onMoveAll).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6]);
  });

  it('sets the .nx-transfer-list__move-all icon to an x in a circle if isSelected, otherwise a plus in a circle',
      function() {
        const withSelected = getShallow({ showMoveAll: true, isSelected: true })
                .find('.nx-transfer-list__move-all').find(NxFontAwesomeIcon),
            withoutSelected = getShallow({ showMoveAll: true })
                .find('.nx-transfer-list__move-all').find(NxFontAwesomeIcon);

        expect(withSelected).toHaveProp('icon', faTimesCircle);
        expect(withoutSelected).toHaveProp('icon', faPlusCircle);
      }
  );

  it('sets the .nx-transfer-list__move-all text to "Remove All" when isSelected, otherwise "Transfer All"', function() {
    const withSelected = getShallow({ showMoveAll: true, isSelected: true })
            .find('.nx-transfer-list__move-all'),
        withoutSelected = getShallow({ showMoveAll: true })
            .find('.nx-transfer-list__move-all');

    expect(withSelected).toIncludeText('Remove All');
    expect(withoutSelected).toIncludeText('Transfer All');
  });

  it('contains an .nx-transfer-list__item-list', function() {
    expect(getShallow().find('.nx-transfer-list__control-box .nx-transfer-list__item-list')).toExist();
  });

  it('renders items into the .nx-transfer-list__item-list', function() {
    const items = [{
          id: 1,
          displayName: 'foo'
        }, {
          id: 3,
          displayName: 'baz'
        }],
        component = getMounted({ items }),
        list = component.find('.nx-transfer-list__item-list');

    expect(list.children().length).toBe(2);

    const item = list.find('.nx-transfer-list__item').at(0),
        select = item.find('.nx-transfer-list__select').at(0),
        icon = select.find(NxFontAwesomeIcon),
        checkbox = select.find('input.nx-transfer-list__checkbox');

    expect(item).toExist();
    expect(item).toMatchSelector('div');

    expect(select).toExist();
    expect(select).toMatchSelector('label');
    expect(select).toHaveText('foo');

    expect(icon).toExist();
    expect(icon).toHaveProp('icon', faPlusCircle);

    expect(checkbox).toExist();
    expect(checkbox).toHaveProp('type', 'checkbox');

    const otherItem = list.find('.nx-transfer-list__item').at(1);

    expect(otherItem).toHaveText('baz');
  });

  it('sets the item checked prop to isSelected', function() {
    const withSelected = getMounted({ items: [{ id: 1, displayName: 'foo' }], isSelected: true }),
        withoutSelected = getMounted({ items: [{ id: 1, displayName: 'foo' }] });

    expect(withSelected.find('input.nx-transfer-list__checkbox')).toHaveProp('checked', true);
    expect(withoutSelected.find('input.nx-transfer-list__checkbox')).toHaveProp('checked', false);
  });

  it('contains an .nx-transfer-list__footer with the specified footerContent', function() {
    const component = getShallow({ footerContent: <div id="foo" /> }),
        footer = component.find('.nx-transfer-list__footer');

    expect(footer).toExist();
    expect(footer.children()).toMatchSelector('div#foo');
  });

  it('calls onItemChange when an item checkbox is toggled, passing the new boolean state and the item id', function() {
    const selectedContainer = document.createElement('div'),
        unselectedContainer = document.createElement('div');

    document.body.appendChild(selectedContainer);
    document.body.appendChild(unselectedContainer);

    const items = [{
          id: 1,
          displayName: 'foo'
        }, {
          id: 3,
          displayName: 'baz'
        }],
        onItemChangeSelected = jest.fn(),
        onItemChangeUnselected = jest.fn(),
        selectedComponent = getMounted({ items, onItemChange: onItemChangeSelected, isSelected: true },
            { attachTo: selectedContainer }),
        unselectedComponent = getMounted({ items, onItemChange: onItemChangeUnselected },
            { attachTo: unselectedContainer }),
        selectedList = selectedComponent.find('.nx-transfer-list__item-list'),
        unselectedList = unselectedComponent.find('.nx-transfer-list__item-list');

    expect(onItemChangeSelected).not.toHaveBeenCalled();
    expect(onItemChangeUnselected).not.toHaveBeenCalled();

    (selectedList.find('.nx-transfer-list__checkbox').at(0).getDOMNode() as HTMLElement).click();

    expect(onItemChangeSelected).toHaveBeenCalledWith(false, 1);

    (unselectedList.find('.nx-transfer-list__checkbox').at(1).getDOMNode() as HTMLElement).click();
    expect(onItemChangeUnselected).toHaveBeenCalledWith(true, 3);

    selectedContainer.remove();
    unselectedContainer.remove();
  });

  describe('filtering', function() {
    const items = [{
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
      displayName: <><NxFontAwesomeIcon icon={faEdit} />foo</>
    }, {
      id: 5,
      displayName: <><NxFontAwesomeIcon icon={faEdit} />Foo</>
    }, {
      id: 6,
      displayName: <><NxFontAwesomeIcon icon={faEdit} />bar</>
    }];

    const getComponent = (moreProps: Partial<Props<number>>) => getMounted({ items, ...moreProps });

    it('renders only items which contain the filterValue case-insensitively', function() {
      const component = getComponent({ filterValue: 'fo' });

      expect(component.find('.nx-transfer-list__item').length).toBe(4);

      expect(component.find('.nx-transfer-list__item').at(0)).toHaveText('foo');
      expect(component.find('.nx-transfer-list__item').at(1)).toHaveText('Foo');
      expect(component.find('.nx-transfer-list__item').at(2)).toHaveText('foo');
      expect(component.find('.nx-transfer-list__item').at(3)).toHaveText('Foo');
    });

    it('renders only items that match the filterValue according to the filterFn when specified', function() {
      const component = getComponent({
        filterValue: 'fo',
        filterFn: includes // case sensitive inclusion
      });

      expect(component.find('.nx-transfer-list__item').length).toBe(2);

      expect(component.find('.nx-transfer-list__item').at(0)).toHaveText('foo');
      expect(component.find('.nx-transfer-list__item').at(1)).toHaveText('foo');
    });

    it('passes onMoveAll a set containing ids of visible items if filterValue is set', function() {
      const onMoveAll = jest.fn(),
          component = getComponent({ filterValue: 'fo', onMoveAll, showMoveAll: true });

      expect(onMoveAll).not.toHaveBeenCalled();

      component.find('.nx-transfer-list__move-all').simulate('click');

      expect(onMoveAll).toHaveBeenCalledWith([1, 2, 4, 5]);
    });
  });

  describe('reordering', function() {
    it('renders move up and down buttons inside .nx-transfer-list__item in the correct state', function() {
      const items = [{
            id: 1,
            displayName: 'top'
          }, {
            id: 3,
            displayName: 'middle'
          }, {
            id: 4,
            displayName: 'bottom'
          }],
          component = getMounted({ allowReordering: true, items }),
          list = component.find('.nx-transfer-list__item-list');

      const firstItem = list.find('.nx-transfer-list__item').at(0),
          secondItem = list.find('.nx-transfer-list__item').at(1),
          thirdItem = list.find('.nx-transfer-list__item').at(2),
          firstItemMoveUpButton = firstItem.find('.nx-btn').at(0),
          firstItemMoveDownButton = firstItem.find('.nx-btn').at(1),
          secondItemMoveUpButton = secondItem.find('.nx-btn').at(0),
          secondItemMoveDownButton = secondItem.find('.nx-btn').at(1),
          thirdItemMoveUpButton = thirdItem.find('.nx-btn').at(0),
          thirdItemMoveDownButton = thirdItem.find('.nx-btn').at(1);

      expect(firstItem).toExist();
      expect(firstItemMoveUpButton).toExist();
      expect(firstItemMoveDownButton).toExist();
      expect(firstItemMoveUpButton.prop('disabled')).toBe(true);
      expect(firstItemMoveDownButton.prop('disabled')).toBe(false);

      expect(secondItem).toExist();
      expect(secondItemMoveUpButton).toExist();
      expect(secondItemMoveDownButton).toExist();
      expect(secondItemMoveUpButton.prop('disabled')).toBe(false);
      expect(secondItemMoveDownButton.prop('disabled')).toBe(false);

      expect(thirdItem).toExist();
      expect(thirdItemMoveUpButton).toExist();
      expect(thirdItemMoveDownButton).toExist();
      expect(thirdItemMoveUpButton.prop('disabled')).toBe(false);
      expect(thirdItemMoveDownButton.prop('disabled')).toBe(true);
    });
  });

  it('passes onReorderItem with id and direction when move up or down button is clicked', function() {
    const items = [{
      id: 1,
      displayName: 'a'
    }, {
      id: 2,
      displayName: 'b'
    }, {
      id: 3,
      displayName: 'c'
    }];

    const onReorderItem = jest.fn(),
        component = getMounted({ allowReordering: true, items, onReorderItem }),
        list = component.find('.nx-transfer-list__item-list');

    expect(onReorderItem).not.toHaveBeenCalled();

    const firstItem = list.find('.nx-transfer-list__item').at(0),
        secondItem = list.find('.nx-transfer-list__item').at(1);
    const moveDownButton = firstItem.find('.nx-btn').at(1);
    const moveUpButton = secondItem.find('.nx-btn').at(0);

    expect(moveDownButton).toExist();
    expect(moveUpButton).toExist();

    moveDownButton.simulate('click');

    expect(onReorderItem).toHaveBeenCalledWith(0, 1);

    moveUpButton.simulate('click');

    expect(onReorderItem).toHaveBeenCalledWith(1, -1);
  });

  it('set the move up and down icon button with faArrowUp and faArrowDown respectively',
      function() {
        const items = [{
          id: 1,
          displayName: 'a'
        }, {
          id: 2,
          displayName: 'b'
        }, {
          id: 3,
          displayName: 'c'
        }];

        const component = getMounted({ allowReordering: true, items }),
            listItem = component.find('.nx-transfer-list__item').at(0);

        const buttons = listItem.find('.nx-transfer-list__button-bar .nx-btn');
        const moveUpButton = buttons.at(0).find(NxFontAwesomeIcon);
        const moveDownButton = buttons.at(1).find(NxFontAwesomeIcon);

        expect(moveUpButton).toHaveProp('icon', faArrowUp);
        expect(moveDownButton).toHaveProp('icon', faArrowDown);
      }
  );

  it('sets move up and down buttons to disabled state when items are filtered', function() {
    const items = [{
      id: 1,
      displayName: 'a1'
    }, {
      id: 2,
      displayName: 'b1'
    }, {
      id: 3,
      displayName: 'c1'
    },
    {
      id: 4,
      displayName: 'd'
    }];

    const onReorderItem = jest.fn(),
        component = getMounted({ filterValue: '1', allowReordering: true, items, onReorderItem }),
        list = component.find('.nx-transfer-list__item-list');

    expect(onReorderItem).not.toHaveBeenCalled();

    const firstItem = list.find('.nx-transfer-list__item').at(0);
    const secondItem = list.find('.nx-transfer-list__item').at(1);
    const lastItem = list.find('.nx-transfer-list__item').at(2);

    const firstMoveUpButton = firstItem.find('.nx-btn').at(0);
    const lastMoveDownButton = lastItem.find('.nx-btn').at(1);

    const middleMoveUpButton = secondItem.find('.nx-btn').at(0);
    const middleMoveDownButton = secondItem.find('.nx-btn').at(1);

    expect(firstMoveUpButton).toHaveProp('disabled', true);
    expect(lastMoveDownButton).toHaveProp('disabled', true);
    expect(middleMoveUpButton).toHaveProp('disabled', true);
    expect(middleMoveDownButton).toHaveProp('disabled', true);

    firstMoveUpButton.simulate('click');
    lastMoveDownButton.simulate('click');

    middleMoveUpButton.simulate('click');
    middleMoveDownButton.simulate('click');

    expect(onReorderItem).not.toHaveBeenCalled();
  });

  it('sets the correct button title based on location, direction, and when filtered', function() {
    const items = [{
      id: 1,
      displayName: 'a1'
    }, {
      id: 2,
      displayName: 'b1'
    }, {
      id: 3,
      displayName: 'c1'
    }, {
      id: 4,
      displayName: 'c'
    }];

    const onReorderItem = jest.fn(),
        filteredComponent = getMounted({ filterValue: '1', allowReordering: true, items, onReorderItem }),
        component = getMounted({ allowReordering: true, items, onReorderItem }),
        filteredList = filteredComponent.find('.nx-transfer-list__item-list'),
        list = component.find('.nx-transfer-list__item-list');

    const secondItem = list.find('.nx-transfer-list__item').at(1);
    const filteredSecondItem = filteredList.find('.nx-transfer-list__item').at(1);

    const moveUpButton = secondItem.find(NxButton).at(0);
    const moveDownButton = secondItem.find(NxButton).at(1);

    const itemTooltip = secondItem.find(NxTooltip).at(1);
    const filteredItemTooltip = filteredSecondItem.find(NxTooltip).at(1);

    expect(moveUpButton).toHaveProp('title', 'Move Up');
    expect(moveDownButton).toHaveProp('title', 'Move Down');

    expect(filteredItemTooltip).toHaveProp('title', 'Reordering is disabled when filtered');
    expect(itemTooltip).toHaveProp('title', '');
  });
});
