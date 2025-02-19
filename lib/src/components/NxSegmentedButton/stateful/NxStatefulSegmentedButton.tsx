/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxSegmentedButton from '../NxSegmentedButton';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

export default function NxStatefulSegmentedButton(props: Props) {
  const [isOpen, onToggleOpen] = useToggle(false);

  return <NxSegmentedButton { ...{ isOpen, onToggleOpen } } { ...props } />;
}

NxStatefulSegmentedButton.propTypes = propTypes;

export { Props, propTypes } from './types';
