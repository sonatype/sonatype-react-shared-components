/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useLayoutEffect, forwardRef } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';

import './NxDropdownMenu.scss';

export { Props };

/**
 * This component is not currently intended for public export. It is a helper for NxDropdown and NxSegmentedButton
 * so they can reset focus when they close
 */
const NxDropdownMenu = forwardRef<HTMLDivElement, Props>(function NxDropdownMenu(props, ref) {
  const { onClosing, className: classNameProp, ...attrs } = props,
      className = classnames('nx-dropdown-menu', classNameProp);

  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  return <div ref={ref} { ...{ className, ...attrs } } />;
});

NxDropdownMenu.propTypes = propTypes;

export default NxDropdownMenu;
