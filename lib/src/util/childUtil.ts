/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { ComponentType, ReactElement, ReactNode } from 'react';

/**
 * Splits out the first child that matches the type from the rest of the children.
 * @param type the component type to find
 * @param children the children to search
 * @returns A pair containing the first matching child (or null if there are none), followed by the list
 * of remaining children in the same order they were originally.
 */
export function splitOutFirst(type: ComponentType, children: ReactNode): [ReactElement | null, ReactNode] {
  let matchingChild: ReactElement | null = null;
  const nonMatchingChildren: ReactNode[] = [];

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

/**
 * @param children to search
 * @returns the concatenated string contents of thie children
 */
export function textContent(children: ReactNode): string {
  if (children === undefined || children === null) {
    return '';
  }

  const type = typeof children;
  if (type === 'string' || type === 'number') {
    return children.toString();
  }

  if (type === 'boolean') {
    return '';
  }

  if (React.isValidElement(children)) {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    children = (children.props as any).children;
  }

  return React.Children.toArray(children).reduce((text: string, child: ReactNode) => {
    return text + textContent(child);
  }, '');
}
