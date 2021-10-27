/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxTree from '../NxTree';
import NxTreeItem from '../NxTreeItem';
import NxTreeStatefulItem from '../stateful/NxTreeStatefulItem';

describe('NxTree', function() {
  it('makes a <ul> tag with an nx-tree class', function() {
    expect(shallow(<NxTree/>)).toMatchSelector('ul.nx-tree');
  });
});

describe('NxTree.ItemLabel', function() {
  it('makes a <span> tag with an nx-tree__item-label class', function() {
    expect(shallow(<NxTree.ItemLabel/>)).toMatchSelector('span.nx-tree__item-label');
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
