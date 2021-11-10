/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, FocusEvent } from 'react';
import classnames from 'classnames';

import { ItemLabelProps } from './types';
import TreeKeyNavContext from './TreeKeyNavContext';

export default function NxTreeItemLabel({ className, onFocus: onFocusProp, ...otherProps }: ItemLabelProps) {
  const classes = classnames('nx-tree__item-label', className),
      keyNavContext = useContext(TreeKeyNavContext);

  if (!keyNavContext) {
    throw new TypeError('NxTree.ItemLabel failed to retrieve context information. Was it used outside of an NxTree?');
  }

  const focusParent = keyNavContext.focusParent;

  // Nothing within the label should receive focus on click (or any other way). If something is about to, focus
  // the parent NxTreeItem instead
  function onFocus(evt: FocusEvent<HTMLSpanElement>) {
    if (onFocusProp) {
      onFocusProp(evt);
    }

    // wait until after all the onFocus handlers in ancestor tree elements are processed before we actually perform
    // the focus of the parent item
    Promise.resolve().then(focusParent);
  }

  return <span className={classes} onFocus={onFocus} { ...otherProps } />;
}
