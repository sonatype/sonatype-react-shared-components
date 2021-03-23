/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import NxSegmentedButton from '../NxSegmentedButton';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';

const NxStatefulSegmentedButton = forwardRef<HTMLDivElement, Props>(
    function NxStatefulSegmentedButton(props, ref) {
      const [isOpen, onToggleCollapse] = useToggle(false);

      return <NxSegmentedButton ref={ref} { ...{ isOpen, onToggleCollapse } } { ...props } />;
    }
);

NxStatefulSegmentedButton.propTypes = propTypes;
export default NxStatefulSegmentedButton;

export { Props, propTypes } from './types';
