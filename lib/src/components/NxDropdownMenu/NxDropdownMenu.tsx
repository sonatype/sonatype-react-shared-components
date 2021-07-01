/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useLayoutEffect, forwardRef } from 'react';

import { Props } from './types';

import './NxDropdownMenu.scss';

/**
 * This component is not currently intended for public export. It is a helper for NxDropdown and NxSegmentedButton
 * so they can reset focus when they close
 */
/* eslint-disable-next-line react/prop-types */
const NxDropdownMenu = forwardRef<HTMLDivElement, Props>(function NxDropdownMenu({ children, onClosing }, ref) {
  // onClosing must execute when this element is being removed but BEFORE it actually gets removed from the DOM
  useLayoutEffect(() => onClosing, []);

  return <div ref={ref} className="nx-dropdown-menu">{children}</div>;
});

export default NxDropdownMenu;
