/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxAccordion from '../NxAccordion';

import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';
export { Props };

export default function NxStatefulAccordion({ defaultOpen, ...otherProps }: Props) {
  const [open, toggleOpen] = useToggle(defaultOpen || false);

  return <NxAccordion open={open} onToggle={toggleOpen} { ...otherProps } />;
}

NxStatefulAccordion.propTypes = propTypes;
