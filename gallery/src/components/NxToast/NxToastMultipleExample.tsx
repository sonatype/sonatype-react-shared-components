/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton, useToast, NxToastProvider } from '@sonatype/react-shared-components';

const Child = () => {
  const { showErrorToast, showSuccessToast, showWarningToast, showInfoToast } = useToast();

  const handleClick = () => {
    showSuccessToast('Account successfully created.');

    setTimeout(() => {
      showInfoToast('Check permissions.');
    }, 2000);

    setTimeout(() => {
      showWarningToast('Unauthorized access may be monitored.');
    }, 4000);

    setTimeout(() => {
      showErrorToast('Error. Please try again.');
    }, 6000);
  };

  return (
    <NxButton onClick={handleClick}>
      Show multiple toasts
    </NxButton>
  );
};

export default function NxToastExample() {
  return (
    <NxToastProvider>
      <Child />
    </NxToastProvider>
  );
}
