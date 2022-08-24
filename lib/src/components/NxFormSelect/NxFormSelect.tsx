/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';

import { Props } from './types';
import { FormAriaContext } from '../NxForm/context';
import { getFirstValidationError, hasValidationErrors } from '../../util/validationUtil';
import { useUniqueId } from '../../util/idUtil';

import './NxFormSelect.scss';

export { Props };

const NxFormSelect = forwardRef<HTMLSelectElement, Props>(function NxFormSelect(props: Props, forwardedRef) {
  const { className: classNameProp, validatable, isPristine, validationErrors, ...attrs } = props,
      { showValidationErrors: formShowValidationErrors } = useContext(FormAriaContext),
      showValidationErrors = formShowValidationErrors || !isPristine,
      isInvalid = !!(validatable && showValidationErrors && hasValidationErrors(validationErrors)),
      firstValidationError = validatable && getFirstValidationError(validationErrors),
      invalidMessageId = useUniqueId('nx-form-select-invalid-message'),
      className = classnames('nx-form-select', classNameProp, {
        pristine: isPristine,
        invalid: isInvalid,
        valid: !isPristine && validatable && !isInvalid
      });

  return (
    <div className={className}>
      <select className="nx-form-select__select"
              ref={forwardedRef}
              { ...attrs }
              aria-invalid={isInvalid}
              aria-errormessage={invalidMessageId} />
      { isInvalid &&
        <div id={invalidMessageId} role="alert" className="nx-field-validation-message">
          {firstValidationError}
        </div>
      }
    </div>
  );
});

export default NxFormSelect;
