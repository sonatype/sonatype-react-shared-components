/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';

import { NxButton, ToastContext, NxToastProvider } from '@sonatype/react-shared-components';

const Child = () => {
  const context = useContext(ToastContext);
  const showSuccessToast = () => context?.addToast({type: 'success', message: 'Account successfully created.'});
  const showInfoToast = () => context?.addToast({type: 'info', message: 'Check permissions.'});
  const showWarningToast = () => context?.addToast({type: 'warning', message: 'Unauthorized access may be monitored.'});
  const showErrorToast = () => context?.addToast({type: 'error', message: 'Error. Please try again.'});

  const handleClick = () => {
    showSuccessToast();

    setTimeout(() => {
      showInfoToast();
    }, 2000);

    setTimeout(() => {
      showWarningToast();
    }, 4000);

    setTimeout(() => {
      showErrorToast();
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
