/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { ComponentType, ReactElement, ReactNode } from 'react';

export function addPropsToChildren(children: ReactNode, props: object) {
  return React.Children.map(children, (child: ReactNode) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
}

/**
 * Splits out the first child that matches the type from the rest of the children.
 * @param type the component type to find
 * @param children the children to search
 * @returns A pair containing the first matching child (or null if there are none), followed by the list
 * of remaining children in the same order they were originally.
 */
export function splitOutFirst(type: ComponentType, children: ReactNode): [ReactElement | null, ReactNode] {
  let matchingChild: ReactElement | null = null,
      nonMatchingChildren: ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (!matchingChild && React.isValidElement(child) && child.type === type) {
      matchingChild = child;
    }
    else {
      nonMatchingChildren.push(child);
    }
  });

  return [matchingChild, nonMatchingChildren];
}

/**
 * @param children to search
 * @param type the component type to find
 * @returns the first child that matches the type (or null if none are found).
 */
export function only(children: ReactNode, type: ComponentType): ReactElement | null {
  return splitOutFirst(type, children)[0];
}
