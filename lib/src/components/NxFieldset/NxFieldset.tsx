/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import { getFirstValidationError, hasValidationErrors } from '../../util/validationUtil';
import { useUniqueId } from '../../util/idUtil';
import { FormPristineContext } from '../NxForm/contexts';
export { Props };

const NxFieldset = forwardRef<HTMLFieldSetElement, Props>(
    function NxFieldset(props, ref) {
      const {
            className,
            label,
            sublabel,
            children,
            isRequired,
            validationErrors,
            isPristine: isPristineProp,
            ...attrs
          } = props,
          isFormPristine = useContext(FormPristineContext),
          isPristine = isFormPristine && isPristineProp,
          classNames = classnames('nx-fieldset', className),
          legendClassnames = classnames('nx-legend', { 'nx-legend--optional': !isRequired }),
          invalidMessageId = useUniqueId('nx-fieldset-invalid-message'),
          describedBy = hasValidationErrors(validationErrors) ? invalidMessageId : undefined;

      return (
        <fieldset className={classNames} ref={ref} aria-describedby={describedBy} { ...attrs }>
          <legend className={legendClassnames}>
            <span className="nx-legend__text">{label}</span>
          </legend>
          { sublabel && <div className="nx-sub-label">{sublabel}</div> }
          {children}
          <div id={invalidMessageId} role="alert" className="nx-text-input__invalid-message">
            {!isPristine && getFirstValidationError(validationErrors)}
          </div>
        </fieldset>
      );
    }
);

NxFieldset.propTypes = propTypes;

export default NxFieldset;
