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
  return (
    <>
      <NxButton onClick={() => context?.addToast({type: 'error', message: 'Error. Please try again.'})}>
        Show error toast
      </NxButton>
      <NxButton onClick={() => context?.addToast({type: 'success', message: 'Policy added!'})}>
        Show success toast
      </NxButton>
      <NxButton onClick={() => context?.addToast({type: 'warning', message: 'Some form fields are missing.'})}>
        Show warning toast
      </NxButton>
      <NxButton onClick={() => context?.addToast({type: 'info', message: 'Logging out in 30 seconds.'})}>
        Show info toast
      </NxButton>
    </>
  );
};

export default function NxToastExample() {
  return (
    <NxToastProvider>
      <Child />
    </NxToastProvider>
  );
}
