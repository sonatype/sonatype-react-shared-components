/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import withClass from '../../util/withClass';
import NxTreeItem from './NxTreeItem';
import { ItemProps } from './types';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

const NxTree = Object.assign(withClass('ul', 'nx-tree'), {
  Item: NxTreeItem,
  StatefulItem: NxTreeStatefulItem,
  ItemLabel: withClass('span', 'nx-tree__item-label')
});

export default NxTree;
