/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';

import NxToggle from '../NxToggle';
import { Props, propTypes } from './types';
export { Props } from './types';

/**
 * A stateful component for rendering a toggle control with a label
 * @param props.onChange A callback for when the toggle control is toggled, receiving the new value as an argument
 * @param props.defaultChecked Whether the toggle should start off on/checked or off/unchecked
 * @param props.disabled Whether the toggle control should be rendered as disabled or not.  When disabled, the onChange
 * callback will not fire
 * @param props.children VDOM rendered as label. Should be
 * [phrasing content](https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content).
 */
const NxStatefulToggle = forwardRef<HTMLLabelElement, Props>(
    function NxStatefulToggle({ defaultChecked, onChange, ...otherProps }, ref) {
      const [isChecked, setIsChecked] = useState(defaultChecked);

      function changeHandler() {
        const newCheckedStatus = !isChecked;
        setIsChecked(newCheckedStatus);
        if (onChange) {
          onChange(newCheckedStatus);
        }
      }

      return <NxToggle ref={ref} { ...otherProps } onChange={changeHandler} isChecked={isChecked} />;
    }
);

NxStatefulToggle.propTypes = propTypes;
export default NxStatefulToggle;
