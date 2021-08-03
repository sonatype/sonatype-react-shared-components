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

describe('NxListLinkItem', function() {

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.LinkItem key="1" className="customClassName">
        <NxList.Text>Test Item 1 Text</NxList.Text>
        <NxList.Subtext>Test Item 1 Subtext</NxList.Subtext>
      </NxList.LinkItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.LinkItem);
    expect(contentEl.find(NxList.LinkItem).shallow()
        .find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find(NxList.LinkItem).shallow().find('a')).toMatchSelector('.nx-list__link.customClassName');
  });

  it('renders a clickable link whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.LinkItem key="1" href="www.sonatype.com" disabled>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.LinkItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxList.LinkItem)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.LinkItem);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.LinkItem)).toHaveProp('href');
    expect(contentEl.find(NxList.LinkItem)).toHaveProp('disabled');
    expect(contentEl.find(NxList.LinkItem)).toBeDisabled();
  });

  it('renders a clickable link whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.LinkItem key="1" href="www.sonatype.com" selected>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.LinkItem>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxList.LinkItem)).toExist();
    expect(contentEl).toContainMatchingElements(1, NxList.LinkItem);
    expect(contentEl).toContainMatchingElements(1, NxList.Text);
    expect(contentEl.find(NxList.LinkItem)).toHaveProp('href');
    expect(contentEl.find(NxList.LinkItem)).toHaveProp('selected');
    expect(contentEl.find(NxList.LinkItem).shallow().setProps({selected: true, href: 'www.sonatype.com'})
        .find('a')).toHaveClassName('selected');
  });
});
