/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ComponentPropsWithRef } from 'react';

export type NavigationDirection = 'up' | 'down';

export type TreeKeyNavContextType = {
  /*
   * Used by focused NxTreeItems to tell their parent NxTree to move focus to the next item. Note that if the current
   * item is the last one in a subtree, this results in the parent tree passing the call up to its parent NxTreeItem,
   * which passes it to its NxTree to focus that item's next sibling
   */
  focusNext: () => void;

  /*
   * Used by focused NxTreeItems to tell their parent NxTree to move focus to the previous item
   */
  focusPrev: () => void;

  /*
   * Used by focused NxTreeItems to tell their parent NxTree to tell its parent NxTreeItem to focus itself and
   * remove focus from the children
   */
  focusParent: () => void;

  /*
   * Used by focused NxTreeItems to tell their parent NxTree to focus the very first item in the entire tree.
   * The root NxTree handles this by focusing its first item. Subtrees just pass the message up the chain
   * remove focus from the children
   */
  focusFirst: () => void;

  /*
   * Used by focused NxTreeItems to tell their parent NxTree to focus the very last visible item in the entire tree.
   */
  focusLast: () => void;

  /*
   * Each NxTree that has focus within itself sets this value to the immediate NxTreeItem child that has or contains
   * focus. Each NxTreeItem sets this to their child NxTree when that tree contains the focus, and otherwise sets it
   * to null
   */
  focusedChild: Element | null;

  /*
   * When a tree gives focus to one of its items, that item needs to known whether focus is moving up or down, by
   * which it decides whether to focus itself or its last visible descendant
   */
  navigationDirection: NavigationDirection;

  setNavigationDirection: (dir: NavigationDirection) => void;

  getTreeRoot: () => (Element | null);
} | null;

export type TreeItemFocusState = 'self' | 'children' | null;

interface NonCollapsibleItemProps {
  collapsible?: false | null;
}

interface CollapsibleItemProps {
  collapsible: true;
  isOpen: boolean;
  onToggleCollapse: (() => void);
}

export type ItemProps = ComponentPropsWithRef<'li'> & (NonCollapsibleItemProps | CollapsibleItemProps) & {
  onActivate?: () => void;
};

export type ItemLabelProps = ComponentPropsWithRef<'span'>;

export interface StatefulItemProps extends ComponentPropsWithRef<'li'> {
  collapsible?: boolean | null;
  defaultOpen?: boolean | null;
}

export const itemPropTypes = {
  collapsible: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggleCollapse: PropTypes.func
};

export const statefulItemPropTypes: PropTypes.ValidationMap<StatefulItemProps> = {
  collapsible: PropTypes.bool,
  defaultOpen: PropTypes.bool
};
