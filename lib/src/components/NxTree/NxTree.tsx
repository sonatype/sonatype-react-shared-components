/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, createContext, useContext } from 'react';
import withClass from '../../util/withClass';
import NxTreeItem from './NxTreeItem';
import { ItemProps } from './types';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

const HasTreeParentContext = createContext(false);

function _NxTree(props: HTMLAttributes<HTMLUListElement>) {
  const hasTreeParent = useContext(HasTreeParentContext);

  return (
    <HasTreeParentContext.Provider value={true}>
      <ul className="nx-tree" role={hasTreeParent ? 'group' : 'tree'} { ...props } />
    </HasTreeParentContext.Provider>
  );
}

const NxTree = Object.assign(_NxTree, {
  Item: NxTreeItem,
  StatefulItem: NxTreeStatefulItem,
  ItemLabel: withClass('span', 'nx-tree__item-label')
});

export default NxTree;
