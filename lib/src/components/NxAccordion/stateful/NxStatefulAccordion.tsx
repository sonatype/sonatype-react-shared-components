/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import NxAccordion from '../NxAccordion';

import { Props, propTypes } from './types';
export { Props };

export default function NxStatefulAccordion({ defaultOpen, ...otherProps }: Props) {
  const [open, setOpen] = useState(defaultOpen || false);

  return <NxAccordion open={open} onToggle={setOpen} { ...otherProps } />;
}

NxStatefulAccordion.propTypes = propTypes;
