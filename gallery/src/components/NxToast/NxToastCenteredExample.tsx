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
  const showToast = () => context?.addToast({type: 'error', message: 'Error. Please try again.'});

  return (
    <NxButton onClick={showToast}>Show centered toast</NxButton>
  );
};

export default function NxToastExample() {
  return (
    <NxToastProvider isCentered>
      <Child />
    </NxToastProvider>
  );
}
