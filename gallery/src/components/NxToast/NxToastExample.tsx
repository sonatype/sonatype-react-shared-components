/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';

import { NxButton, ToastContext, NxToastProvider, NxButtonBar } from '@sonatype/react-shared-components';

const Child = () => {
  const context = useContext(ToastContext);
  const showErrorToast = () => context?.addToast({type: 'error', message: 'Error. Please try again.'});
  const showSuccessToast = () => context?.addToast({type: 'success', message: 'Policy added!'});
  const showWarningToast = () => context?.addToast({type: 'warning', message: 'Some form fields are missing.'});
  const showInfoToast = () => context?.addToast({type: 'info', message: 'Logging out in 30 seconds.'});

  return (
    <NxButtonBar>
      <NxButton onClick={showErrorToast}>Show error toast</NxButton>
      <NxButton onClick={showSuccessToast}>Show success toast</NxButton>
      <NxButton onClick={showWarningToast}>Show warning toast</NxButton>
      <NxButton onClick={showInfoToast}>Show info toast</NxButton>
    </NxButtonBar>
  );
};

export default function NxToastExample() {
  return (
    <NxToastProvider>
      <Child />
    </NxToastProvider>
  );
}
