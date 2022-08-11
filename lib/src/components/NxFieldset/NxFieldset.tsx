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
import { FormAriaContext } from '../NxForm/context';
export { Props };

import './NxFieldset.scss';

const NxFieldset = forwardRef<HTMLFieldSetElement, Props>(
    function NxFieldset(props, ref) {
      const {
            className,
            label,
            sublabel,
            children,
            isRequired,
            validationErrors,
            isPristine,
            ...attrs
          } = props,
          { showValidationErrors: formShowValidationErrors } = useContext(FormAriaContext),
          showValidationErrors = formShowValidationErrors || !isPristine,
          isInvalid = showValidationErrors && hasValidationErrors(validationErrors),
          classNames = classnames('nx-fieldset', className, {
            pristine: isPristine,
            valid: !isPristine && !isInvalid,
            invalid: isInvalid
          }),
          legendClassnames = classnames('nx-legend', { 'nx-legend--optional': !isRequired }),
          invalidMessageId = useUniqueId('nx-fieldset-invalid-message'),
          describedBy = isInvalid ? invalidMessageId : undefined;

      return (
        <fieldset className={classNames} ref={ref} aria-describedby={describedBy} { ...attrs }>
          <legend className={legendClassnames}>
            <span className="nx-legend__text">{label}</span>
          </legend>
          { sublabel && <div className="nx-sub-label">{sublabel}</div> }
          {children}
          { isInvalid &&
            <div id={invalidMessageId} role="alert" className="nx-field-validation-message">
              {getFirstValidationError(validationErrors)}
            </div>
          }
        </fieldset>
      );
    }
);

NxFieldset.propTypes = propTypes;

export default NxFieldset;
