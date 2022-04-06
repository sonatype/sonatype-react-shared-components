/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { createPortal } from 'react-dom';
import NxToast from './NxToast';
import { ToastModel } from './types';

const NxToastContainer = (props: { toasts: ToastModel[]; }) => {
  const { toasts } = props;
  return createPortal(
    <div className="nx-toast__container">
      {toasts.reverse().map(toast => (
        <NxToast key={toast.toastId} toastId={toast.toastId} type={toast.type} message={toast.message} />
      ))}
    </div>,
    document.body
  );
};

export default NxToastContainer;
