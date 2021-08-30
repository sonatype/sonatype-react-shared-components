/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxFieldset from '../../NxFieldset/NxFieldset';
import NxFilterInput from '../../NxFilterInput/NxFilterInput';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

import TransferListHalf from '../TransferListHalf';
import { TransferListHalfProps as Props } from '../types';

describe('TransferListHalf', function() {
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
      getShallow = getShallowComponent<Props<number>>(TransferListHalf, minimalProps),
      getMounted = getMountedComponent<Props<number>>(TransferListHalf, minimalProps);

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

    expect(component).toHaveProp('onFilterChange', onFilterChange);
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
                .find('.nx-transfer-list__move-all').find(NxFontAwesomeIcon),
            withoutSelected = getShallow({ showMoveAll: true })
                .find('.nx-transfer-list__move-all').find(NxFontAwesomeIcon);

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
        onItemChange = jest.fn(),
        component = getMounted({ items, onItemChange }),
        list = component.find('.nx-transfer-list__item-list');

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
});
