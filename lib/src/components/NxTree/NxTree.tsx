/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, useContext, useRef, useEffect, useState, FocusEvent } from 'react';
import classnames from 'classnames';

import { ItemProps, NavigationDirection } from './types';
import NxTreeItem from './NxTreeItem';
import NxTreeItemLabel from './NxTreeItemLabel';
import TreeKeyNavContext from './TreeKeyNavContext';
import NxTreeStatefulItem from './stateful/NxTreeStatefulItem';

export { ItemProps };

import './NxTree.scss';

function _NxTree(props: HTMLAttributes<HTMLUListElement>) {
  const { className, onFocus: onFocusProp, ...otherProps } = props,
      parentKeyNavContext = useContext(TreeKeyNavContext),
      ref = useRef<HTMLUListElement>(null),

      // The child tree item which is focusable, if any. Only one item in the tree is focusable at a time
      [focusedChild, setFocusedChild] = useState<Element | null>(null),

      // Whether keynav is currently moving upwards or down. Determines whether entering a subtree
      // should focus its top element or its last visible descendant
      // NOTE: only the state stored in the top-level tree is used, subtrees ignore their version of
      // this state and delegate to the root tree
      [navigationDirection, setNavigationDirection] = useState<NavigationDirection>('down'),

      childKeyNavContext = {
        setNavigationDirection: parentKeyNavContext?.setNavigationDirection || setNavigationDirection,
        navigationDirection: parentKeyNavContext?.navigationDirection || navigationDirection,
        focusedChild,
        focusNext() {
          if (focusedChild) {
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
            if (focusedChild.previousElementSibling) {
              setFocusedChild(focusedChild.previousElementSibling);
            }
            else if (parentKeyNavContext) {
              parentKeyNavContext.focusPrev();
            }
          }
        },

        // delegate to parent item if any
        focusParent: parentKeyNavContext?.focusParent || (() => {}),

        // subtrees delegate to root
        focusFirst: parentKeyNavContext?.focusFirst || function() {
          setNavigationDirection('down');
          setFocusedChild(ref.current?.firstElementChild || null);
        },
        focusLast: parentKeyNavContext?.focusLast || function() {
          setNavigationDirection('up');
          setFocusedChild(null);

          // focus the last element - but only after first unfocusing everything in order to trigger the
          // last element to update its child focus based on the navigation direction, in case the last element
          // was already the focused one
          setTimeout(() => { setFocusedChild(ref.current?.lastElementChild || null); }, 0);
        },

        getTreeRoot: parentKeyNavContext ? parentKeyNavContext.getTreeRoot : () => ref.current
      },
      classes = classnames('nx-tree', className);

  useEffect(function() {
    // We want to focus either the first or last child of this tree in two scenarios:
    // 1. this is the top tree
    // 2. this is a subtree which is currently designated (via `focusedChild`) as containing the focus
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
          role={parentKeyNavContext ? 'group' : 'tree'}
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
