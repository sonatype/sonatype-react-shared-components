/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {generateId} from '../../AbstractTreeViewSelect';

describe('generateId', function() {
  it('generates a kebab-case id using the supplied `groupName` and `elementId`', function() {
    const groupName = 'testGroupName',
        elementId = 'testId',
        generatedId = generateId(groupName, elementId);

    expect(generatedId).toEqual('nx-tree-view-select-testgroupname-testid');
  });

  it('generates an id even if `elementId` is `null`', function() {
    const groupName = 'testGroupName',
        elementId = null,
        generatedId = generateId(groupName, elementId);

    expect(generatedId).toEqual('nx-tree-view-select-testgroupname-null');
  });
});
