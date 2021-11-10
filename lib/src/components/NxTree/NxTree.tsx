/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, useContext, useRef, useEffect, useState, FocusEvent } from 'react';
import classnames from 'classnames';

import { ItemProps, NavigationDirection, TreeKeyNavContextType } from './types';
import NxTreeItem from './NxTreeItem';
import NxTreeItemLabel from './NxTreeItemLabel';
import TreeKeyNavContext from './TreeKeyNavContext';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

function _NxTree({ className, onFocus: onFocusProp, ...otherProps }: HTMLAttributes<HTMLUListElement>) {
  const parentKeyNavContext = useContext(TreeKeyNavContext),
      [focusedChild, setFocusedChild] = useState<Element | null>(null),
      [navigationDirection, setNavigationDirection] = useState<NavigationDirection>('down'),
      ref = useRef<HTMLUListElement>(null),
      childKeyNavContext: TreeKeyNavContextType = {
        navigationDirection,
        focusedChild,
        focusNext() {
          if (focusedChild) {
            setNavigationDirection('down');

            if (focusedChild.nextElementSibling) {
              setFocusedChild(focusedChild.nextElementSibling);
            }
            else if (parentKeyNavContext) {
              parentKeyNavContext.focusNext();
            }
          }
        },
        focusPrev() {
          if (focusedChild) {
            setNavigationDirection('up');

            if (focusedChild.previousElementSibling) {
              setFocusedChild(focusedChild.previousElementSibling);
            }
            else if (parentKeyNavContext) {
              parentKeyNavContext.focusPrev();
            }
          }
        },
        focusParent: parentKeyNavContext?.focusParent || (() => {}),
        getTreeRoot: parentKeyNavContext ? parentKeyNavContext.getTreeRoot : () => ref.current
      },
      classes = classnames('nx-tree', className);

  useEffect(function() {
    // We want to focus either the first or last child of this tree in two scenarios:
    // 1. this is the top tree
    // 2. this is a subtree which is currently designated (via `focusedChild) as containing the focus
    if (!parentKeyNavContext ||
        (parentKeyNavContext?.focusedChild && parentKeyNavContext?.focusedChild === ref.current)) {
      if (!focusedChild) {
        const childToFocus = parentKeyNavContext?.navigationDirection === 'up' ?
          ref.current?.lastElementChild :
          ref.current?.firstElementChild;

        setFocusedChild(childToFocus || null);
      }
    }
    else {
      setFocusedChild(null);
    }
  }, [!!parentKeyNavContext, parentKeyNavContext?.focusedChild]);

  function onFocus(evt: FocusEvent<HTMLUListElement>) {
    if (onFocusProp) {
      onFocusProp(evt);
    }

    // determine which immediate child contained the focused node, and set focusedChild to that node
    let el: Element = evt.target,
        elsParent = el.parentElement;

    while (elsParent) {
      if (elsParent === ref.current) {
        setFocusedChild(el);
        break;
      }

      el = elsParent;
      elsParent = el.parentElement;
    }
  }

  return (
    <TreeKeyNavContext.Provider value={childKeyNavContext}>
      <ul ref={ref}
          className={classes}
          role={!!parentKeyNavContext ? 'group' : 'tree'}
          onFocus={onFocus}
          { ...otherProps } />
    </TreeKeyNavContext.Provider>
  );
}

const NxTree = Object.assign(_NxTree, {
  Item: NxTreeItem,
  StatefulItem: NxTreeStatefulItem,
  ItemLabel: NxTreeItemLabel
});

export default NxTree;
