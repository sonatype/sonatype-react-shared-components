/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import './NxToggle.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

/**
 * A stateless component for rendering a toggle control with a label
 * @param props.toggleId An id to identify the toggle
 * @param props.onChange A callback for when the toggle control is toggled
 * @param props.isChecked Whether the toggle should be rendered as on/checked or off/unchecked
 * @param props.disabled Whether the toggle should be rendered as disabled or not.  When disabled, the onChange
 * callback will not fire
 * @param props.children VDOM rendered as label. Should be
 * [phrasing content](https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content).
 */
const NxToggle = forwardRef<HTMLLabelElement, Props>(
    function NxToggle({ className, onChange, isChecked, disabled, toggleId, children, ...otherProps }, ref) {
      const labelClasses = classnames('nx-toggle', className, {
        'nx-toggle--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      return (
        <label { ...otherProps } ref={ref} className={labelClasses}>
          { children && <span className="nx-toggle__content">{children}</span> }
          <input type="checkbox"
                 id={toggleId || undefined}
                 className="nx-toggle__input"
                 disabled={!!disabled}
                 checked={isChecked}
                 readOnly={!onChange}
                 onChange={onChange || undefined}/>
          <div className="nx-toggle__control"><div className="nx-toggle__indicator"></div></div>
        </label>
      );
    }
);

NxToggle.propTypes = propTypes;

export default NxToggle;
