/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, createContext, useContext, useEffect, useRef, KeyboardEvent } from 'react';
import withClass from '../../util/withClass';
import NxTreeItem from './NxTreeItem';
import { ItemProps } from './types';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

const HasTreeParentContext = createContext(false);

function getParentItemForItem(el: Element) {
  // el is expected to be an nx-tree__item.
  // parent would be an .nx-tree, grandparent would (potentially) be an nx-tree__item containing that tree
  const grandparent = el.parentElement?.parentElement;

  return grandparent && grandparent.classList.contains('nx-tree__item') ? grandparent : null;
}

function getNextVisibleTreeItem(el: Element, skipChildren = false): Element | null {
  const firstChildItem = !skipChildren && el.querySelector('.nx-tree__item');

  if (!skipChildren && firstChildItem && el.classList.contains('open'))  {
    return firstChildItem;
  }
  else if (el.nextElementSibling) {
    return el.nextElementSibling;
  }
  else {
    const parentItem = getParentItemForItem(el);
    return parentItem && getNextVisibleTreeItem(parentItem, true);
  }
}

function getPrevVisibleTreeItem(el: Element) {
  const prevSibling = el.previousElementSibling;

  if (prevSibling) {
    const siblingsLastChildItem = prevSibling.querySelector('.nx-tree__item:last-child');

    if (siblingsLastChildItem && prevSibling.classList.contains('open')) {
      return siblingsLastChildItem;
    }
    else {
      return prevSibling;
    }
  }
  else {
    return getParentItemForItem(el);
  }
}

function _NxTree({ onKeyPress: onKeyPressProp, ...otherProps }: HTMLAttributes<HTMLUListElement>) {
  const hasTreeParent = useContext(HasTreeParentContext),
      [currentItem, setCurrentItem] = useState<HTMLLiElement | null>(null),
      ref = useRef<HTMLUListElement>(null);

  useEffect(function() {
    if (!hasTreeParent) {
      const tree = ref.current,
          firstChild = tree?.querySelector('.nx-tree__item');

      if (!firstChild) {
        console.error('No items detected in NxTree. This is unsupported');
      }
      else {
        setCurrentItem(firstChild);
      }
    }
  }, []);

  function onKeyPress(evt: KeyboardEvent<HTMLUListElement>) {
    switch (evt.key) {
      case 'ArrowUp':
        setCurrentItem(getPrevVisibleTreeItem(currentItem) || currentItem);
        break;
      case 'ArrowDown':
        setCurrentItem(getNextVisibleTreeItem(currentItem) || currentItem);
        break;
    }

    if (onKeyPressProp) {
      onKeyPressProp(evt);
    }
  }

  return (
    <HasTreeParentContext.Provider value={true}>
      <ul ref={ref}
          className="nx-tree"
          role={hasTreeParent ? 'group' : 'tree'}
          onKeyPress={onKeyPress}
          { ...otherProps } />
    </HasTreeParentContext.Provider>
  );
}

const NxTree = Object.assign(_NxTree, {
  Item: NxTreeItem,
  StatefulItem: NxTreeStatefulItem,
  ItemLabel: withClass('span', 'nx-tree__item-label')
});

export default NxTree;
