/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxList from '../NxList';
import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

describe('NxListItem', function() {

  const minimalProps = {};
  const getShallow = getShallowComponent(NxList.Item, minimalProps);
  const getMounted = getMountedComponent(NxList.Item, minimalProps);

  it('renders the children in an .nx-list__item', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>,
      <NxList.Subtext key="2">Test Item 1 Subtext</NxList.Subtext>
    ];
    const contentEl = getMounted({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainMatchingElements(2, 'span');
    expect(contentEl.find('li')).toHaveClassName('nx-list__item');
    expect(contentEl.find('span').at(0)).toHaveText('Test Item 1 Text');
    expect(contentEl.find('span').at(0)).toHaveClassName('nx-list__text');
    expect(contentEl.find('span').at(1)).toHaveText('Test Item 1 Subtext');
    expect(contentEl.find('span').at(1)).toHaveClassName('nx-list__subtext');

  });

  it('renders the classNames given to it', function() {
    const contentEl = getShallow({className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__item.customClassName');
  });
});
