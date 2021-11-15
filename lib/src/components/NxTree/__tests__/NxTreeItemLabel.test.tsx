/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';

import TreeKeyNavContext from '../TreeKeyNavContext';
import NxTreeItemLabel from '../NxTreeItemLabel';
import { TreeKeyNavContextType } from '../types';

const keyNavContext: TreeKeyNavContextType = {
  focusedChild: null,
  focusParent: () => {},
  focusPrev: () => {},
  focusNext: () => {},
  focusFirst: () => {},
  focusLast: () => {},
  navigationDirection: 'down',
  setNavigationDirection: () => {},
  getTreeRoot: () => null
};

describe('NxTree.ItemLabel', function() {
  it('makes a <span> tag with an nx-tree__item-label class', function() {
    const component = mount(
      <TreeKeyNavContext.Provider value={keyNavContext}>
        <NxTreeItemLabel />
      </TreeKeyNavContext.Provider>
    ).children();

    expect(component).toMatchSelector('span.nx-tree__item-label');
  });
});
