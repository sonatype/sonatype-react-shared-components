/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {getShallowComponent} from '../../../../__testutils__/enzymeUtils';
import MultiSelectCounter, {Props} from '../MultiSelectCounter';
import NxTreeViewCounter from '../../NxTreeViewCounter';

describe('MultiSelectCounter', function() {
  const simpleProps: Props = {
    options: [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'}
    ],
    selectedIds: new Set()
  };
  const getShallow = getShallowComponent<Props>(MultiSelectCounter, simpleProps);

  it('renders inactive NxTreeViewCounter when no option is selected', function() {
    const shallowRender = getShallow();
    expect(shallowRender).toContainReact(<NxTreeViewCounter isActive={false}>2</NxTreeViewCounter>);
  });

  it('renders active NxTreeViewCounter when all options are selected', function() {
    const shallowRender = getShallow({
      selectedIds: new Set(['foo', 'bar'])
    });
    expect(shallowRender).toContainReact(<NxTreeViewCounter isActive={true}>2 of 2</NxTreeViewCounter>);
  });

  it('renders active NxTreeViewCounter when some options are selected', function() {
    const shallowRender = getShallow({
      selectedIds: new Set(['bar'])
    });
    expect(shallowRender).toContainReact(<NxTreeViewCounter isActive={true}>1 of 2</NxTreeViewCounter>);
  });

  it('sets an aria label mentioning the current and possible selection count', function() {
    expect(getShallow()).toHaveProp('aria-label', '0 options out of 2 selected');
    expect(getShallow({ selectedIds: new Set(['foo']) })).toHaveProp('aria-label', '1 option out of 2 selected');
    expect(getShallow({ selectedIds: new Set(['foo', 'bar']) }))
        .toHaveProp('aria-label', '2 options out of 2 selected');
  });
});
