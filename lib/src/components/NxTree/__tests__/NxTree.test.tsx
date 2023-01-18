/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-enzyme';

import NxTree from '../NxTree';
import NxTreeItem from '../NxTreeItem';
import NxTreeItemLabel from '../NxTreeItemLabel';
import NxTreeStatefulItem from '../stateful/NxTreeStatefulItem';

describe('NxTree', function() {
  it('makes a <ul> tag with an nx-tree class', function() {
    expect(shallow(<NxTree/>).children()).toMatchSelector('ul.nx-tree');
  });

  it('adds the tree role when it is the top-level tree, and the group role otherwise', function() {
    const component = mount(
      <NxTree>
        <NxTree.Item>
          <NxTree.ItemLabel>Foo</NxTree.ItemLabel>
          <NxTree />
        </NxTree.Item>
      </NxTree>
    ).children();

    expect(component).toHaveProp('role', 'tree');
    expect(component.find('.nx-tree__item .nx-tree')).toHaveProp('role', 'group');
  });
});

describe('NxTree.ItemLabel', function() {
  it('is NxTreeItemLabel', function() {
    expect(NxTree.ItemLabel).toBe(NxTreeItemLabel);
  });
});

describe('NxTree.Item', function() {
  it('is NxTreeItem', function() {
    expect(NxTree.Item).toBe(NxTreeItem);
  });
});

describe('NxTree.StatefulItem', function() {
  it('is NxTreeStatefulItem', function() {
    expect(NxTree.StatefulItem).toBe(NxTreeStatefulItem);
  });
});

// NOTE keyboard navigation is tested in functional tests
