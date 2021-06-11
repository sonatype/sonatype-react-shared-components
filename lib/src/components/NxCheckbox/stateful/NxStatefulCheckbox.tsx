/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import NxCheckbox from '../NxCheckbox';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';
export { Props } from './types';

/**
 * A stateful component for rendering a checkbox with a label
 * @param props.onChange A callback for when the checkbox is toggled, receiving the new value as an argument
 * @param props.defaultChecked Whether the checkbox should start off checked or unchecked
 * @param props.disabled Whether the checkbox should be rendered as disabled or not.  When disabled, the onChange
 * callback will not fire
 * @param props.children VDOM rendered as label. Should be
 * [phrasing content](https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content).
 */
const NxStatefulCheckbox = forwardRef<HTMLLabelElement, Props>(
    function NxStatefulCheckbox({ defaultChecked, onChange, ...otherProps }, ref) {
      const [isChecked, toggle] = useToggle(defaultChecked);

      function changeHandler() {
        const newCheckedStatus = toggle();

        if (onChange) {
          onChange(newCheckedStatus);
        }
      }

      return <NxCheckbox ref={ref} { ...otherProps } onChange={changeHandler} isChecked={isChecked} />;
    }
);

NxStatefulCheckbox.propTypes = propTypes;
export default NxStatefulCheckbox;
