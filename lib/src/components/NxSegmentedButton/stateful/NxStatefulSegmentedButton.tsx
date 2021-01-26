/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import NxSegmentedButton from '../NxSegmentedButton';
import { Props, propTypes } from './types';
import useDropdownState from '../../../util/useDropdownState';

const NxStatefulSegmentedButton = forwardRef<HTMLDivElement, Props>(
    function NxStatefulSegmentedButton(props) {
      const { isOpen, onToggleOpen, handleKeyPress } = useDropdownState();

      return (
        <NxSegmentedButton isOpen={isOpen}
                           onToggleOpen={onToggleOpen}
                           onKeyDown={handleKeyPress}
                           {...props} />
      );
    }
);

NxStatefulSegmentedButton.propTypes = propTypes;
export default NxStatefulSegmentedButton;

export { Props, propTypes } from './types';
