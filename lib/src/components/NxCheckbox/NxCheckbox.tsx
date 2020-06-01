/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './NxCheckbox.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

/**
 * A stateless component for rendering a checkbox with a label
 * @param props.checkboxId An id to identify the checkbox
 * @param props.onChange A callback for when the checkbox is toggled
 * @param props.isChecked Whether the checkbox should be rendered as checked or unchecked
 * @param props.disabled Whether the checkbox should be rendered as disabled or not.  When disabled, the onChange
 * callback will not fire
 * @param props.children VDOM rendered as label. Should be
 * [phrasing content](https://www.w3.org/TR/2011/WD-html-markup-20110525/terminology.html#phrasing-content).
 */
const NxCheckbox = forwardRef<HTMLLabelElement, Props>(
    function NxCheckbox({ onChange, isChecked, disabled, checkboxId, children, ...otherProps }, ref) {
      const labelClasses = classnames('nx-checkbox', {
        'nx-checkbox--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      });

      return (
        <label { ...otherProps } ref={ref} className={labelClasses} tabIndex={0}>
          <input type="checkbox"
                 id={checkboxId || undefined}
                 className="nx-checkbox__input"
                 disabled={!!disabled}
                 checked={isChecked}
                 readOnly={!onChange}
                 onChange={onChange || undefined}/>
          <span className="nx-checkbox__box">
            {/* Put a non-breaking space in the box if not checked,
              * in order to provide a consistent vertical-align baseline
              */}
            { isChecked ? <FontAwesomeIcon icon={faCheck} /> : '\u00A0' }
          </span>
          { children && <span className="nx-checkbox__content">{children}</span> }
        </label>
      );
    }
);

NxCheckbox.propTypes = propTypes;

export default NxCheckbox;
