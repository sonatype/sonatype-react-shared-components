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

describe('NxListActions', function() {

  const minimalProps: NxListProps = {};
  const getShallow = getShallowComponent(NxList, minimalProps);

  it('renders a div with class nx-list__actions', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Actions></NxList.Actions>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Actions);
    expect(contentEl.find(NxList.Actions).shallow()
        .find('div')).toHaveClassName('.nx-list__actions');
  });

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.Item key="1">
        <NxList.Actions className="customClassName"></NxList.Actions>
      </NxList.Item>
    ];

    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl).toContainExactlyOneMatchingElement(NxList.Actions);
    expect(contentEl.find(NxList.Actions).shallow()
        .find('div')).toMatchSelector('.nx-list__actions.customClassName');
  });
});
