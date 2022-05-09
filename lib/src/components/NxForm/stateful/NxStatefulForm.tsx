/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useEffect, useState } from 'react';
import { hasValidationErrors } from '../../../util/validationUtil';
import NxForm from '../NxForm';

import { StatefulProps as Props } from '../types';

export { Props };

const NxStatefulForm = forwardRef<HTMLFormElement, Props>(function NxStatefulForm(props, ref) {
  const { onSubmit: onSubmitProp, ...otherProps } = props,
      [isPristine, setIsPristine] = useState(true);

  function onSubmit() {
    setIsPristine(false);

    if (!hasValidationErrors(props.validationErrors)) {
      onSubmitProp();
    }
  }

  useEffect(function() {
    if (props.submitMaskState === null) {
      // reset pristine state after successful submission
      setIsPristine(true);
    }
  }, [props.submitMaskState]);

  return <NxForm ref={ref} { ...otherProps } onSubmit={onSubmit} isPristine={isPristine} />;
});

export default NxStatefulForm;
