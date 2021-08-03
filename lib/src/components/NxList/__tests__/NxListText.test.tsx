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

describe('NxListText', function() {

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Text className="customClassName">Test Item 1 Text</NxList.Text>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Text);
    expect(contentEl.find(NxList.Text).shallow()
        .find('span')).toMatchSelector('.nx-list__text.customClassName');
  });

  it('truncates the text correctly', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Text className="nx-truncate-ellipsis">Test Item 1 Text</NxList.Text>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Text);
    expect(contentEl.find(NxList.Text).shallow()
        .find('span')).toMatchSelector('.nx-list__text.nx-truncate-ellipsis');
  });
});
