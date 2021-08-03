/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxH3 } from '../../..';
import NxList from '../NxList';
import { NxListProps } from '../types';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxListItem', function() {

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);

  it('renders the children in an .nx-list__item', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Text>Test Item 1 Text</NxList.Text>
        <NxList.Subtext>Test Item 1 Subtext</NxList.Subtext>
      </NxList.Item>,
      <NxList.Item key="2">
        <NxList.Text>Test Item 2 Text</NxList.Text>
        <NxList.Subtext>Test Item 2 Subtext</NxList.Subtext>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainMatchingElements(2, NxList.Item);
    contentEl.find('li').forEach((e) => {
      expect(e.hasClass('nx-list__item'));
    });
  });

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.Item key="1" className="customClassName">
        <NxList.Text>Test Item 1 Text</NxList.Text>
        <NxList.Subtext>Test Item 1 Subtext</NxList.Subtext>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Item);
    expect(contentEl.find(NxList.Item).shallow()).toMatchSelector('.nx-list__item.customClassName');
  });

  it('renders a simple list with a title and one item', function() {
    const title = 'Simple Title';
    const children = [
      <NxH3 key="1">{title}</NxH3>,
      <NxList.Item key="2">
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl.find(NxH3)).toExist();
    expect(contentEl.find(NxList.Item)).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxH3);
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Item);
    expect(contentEl.find(NxH3).shallow()).toHaveHTML(`<h3 class="nx-h3">${title}</h3>`);
  });
});
