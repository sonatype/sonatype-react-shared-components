/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import useToggle from '../../../util/useToggle';
import { StatefulItemProps, statefulItemPropTypes } from '../types';
import NxTreeItem from '../NxTreeItem';

export { StatefulItemProps };

export default function NxTreeStatefulItem({ defaultOpen, ...otherProps }: StatefulItemProps) {
  const [isOpen, onToggleCollapse] = useToggle(defaultOpen == null ? true : defaultOpen);

  return <NxTreeItem { ...otherProps } isOpen={isOpen} onToggleCollapse={onToggleCollapse} />;
}

NxTreeStatefulItem.propTypes = statefulItemPropTypes;
