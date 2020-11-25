/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, {ReactNode} from 'react';

export function addPropsToChildren(children: ReactNode, props: object) {
  return React.Children.map(children, (child: ReactNode) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
}

/**
 * @param children to search
 * @param type the component type to find
 * @returns the first child that matches the type (or null if none are found).
 */
export function only(children: ReactNode, type: React.ComponentType): React.ReactElement | null {
  let matchingChildren: React.ReactElement[] = [];
  React.Children.forEach(children, child => {
    if (React.isValidElement(child) && child.type === type) {
      matchingChildren.push(child);
    }
  });
  return matchingChildren.length ? matchingChildren[0] : null;
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
    children = children.props.children;
  }

  return React.Children.toArray(children).reduce((text: string, child: ReactNode) => {
    return text + textContent(child);
  }, '');
}
