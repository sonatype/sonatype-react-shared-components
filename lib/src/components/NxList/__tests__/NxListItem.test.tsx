/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxList from '../NxList';
import { NxListItemProps } from '../types';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxListItem', function() {

  const minimalProps: NxListItemProps = {};
  const getShallow = getShallowComponent(NxList.Item, minimalProps);

  it('renders the children in an .nx-list__item', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>,
      <NxList.Subtext key="2">Test Item 1 Subtext</NxList.Subtext>
    ];
    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    contentEl.find('li').forEach((e) => {
      expect(e.hasClass('nx-list__item'));
    });
  });

  it('renders the classNames given to it', function() {
    const contentEl = getShallow({className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__item.customClassName');
  });
});
