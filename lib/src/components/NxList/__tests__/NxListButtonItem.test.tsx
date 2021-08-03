/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxList from '../NxList';
import { NxListProps } from '../types';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxListButtonItem', function() {

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.ButtonItem key="1" className="customClassName">
        <NxList.Text>Test Item 1 Text</NxList.Text>
        <NxList.Subtext>Test Item 1 Subtext</NxList.Subtext>
      </NxList.ButtonItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.ButtonItem);
    expect(contentEl.find(NxList.ButtonItem).shallow()
        .find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find(NxList.ButtonItem).shallow().find('button'))
        .toMatchSelector('.nx-list__btn.customClassName');
  });

  it('renders a clickable list whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.ButtonItem key="1" disabled>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.ButtonItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxList.ButtonItem)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.ButtonItem);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.ButtonItem)).toHaveProp('disabled');
    expect(contentEl.find(NxList.ButtonItem)).toBeDisabled();
  });

  it('renders a clickable list whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.ButtonItem key="1" selected>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.ButtonItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxList.ButtonItem)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.ButtonItem);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.ButtonItem)).toHaveProp('selected');
    expect(contentEl.find(NxList.ButtonItem).shallow().setProps({selected: true}).find('button'))
    .toHaveClassName('selected');
  });
});
