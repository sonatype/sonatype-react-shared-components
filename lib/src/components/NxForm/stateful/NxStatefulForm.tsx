/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { hasValidationErrors, ValidationErrors } from '../../../util/validationUtil';
import NxForm from '../NxForm';

import { StatefulProps as Props } from '../types';

export { Props };

/* eslint-disable react/prop-types */
const NxStatefulForm = forwardRef<HTMLFormElement, Props>(function NxStatefulForm(props, ref) {
  const { onSubmit: onSubmitProp, validationErrors } = props,
      [showValidationErrors, setShowValidationErrors] = useState(false),
      previousValidationErrors = useRef<ValidationErrors | undefined>(null);

  function onSubmit() {
    if (hasValidationErrors(validationErrors)) {
      setShowValidationErrors(true);
    }
    else {
      onSubmitProp();
    }
  }

  useEffect(function() {
    if (!hasValidationErrors(validationErrors) && hasValidationErrors(previousValidationErrors.current)) {
      setShowValidationErrors(false);
    }

    previousValidationErrors.current = validationErrors;
  }, [validationErrors]);

  return <NxForm ref={ref} { ...props } onSubmit={onSubmit} showValidationErrors={showValidationErrors} />;
});

export default NxStatefulForm;
