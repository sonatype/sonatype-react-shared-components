/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { useCallback, useState } from 'react';
import ToastContext from './contexts';
import NxToastContainer from './NxToastContainer';
import { NxToastProviderProps, nxToastProviderPropTypes, ToastAddModel, ToastModel } from './types';

let id = 1;

const NxToastProvider = (props: NxToastProviderProps) => {
  const { children } = props;
  const [toasts, setToasts] = useState<ToastModel[]>([]);
  const [activeElementBeforeToast, setActiveElementBeforeToast] = useState<HTMLElement | null>(null);

  const addToast = useCallback((content: ToastAddModel) => {
    // Before displaying the toast, keep track of active element
    const currentFocusedElement = document.activeElement as HTMLElement;

    // When the toast is displayed, the focus is on the Toast's close button
    // In this case, the active element is the Toast's close button, so ignore it
    if (!currentFocusedElement.classList.contains('nx-toast__close')) {
      setActiveElementBeforeToast(currentFocusedElement);
    }

    const toastId = id++;

    setToasts((toasts) => [
      ...toasts,
      { toastId, type: content.type, message: content.message }
    ]);
  }, [setToasts]);

  const removeToast = useCallback((id: number) => {
    const _toasts = toasts.filter(t => t.toastId !== id);
    setToasts(_toasts);

    if (_toasts.length === 0) {
      activeElementBeforeToast?.focus();
    }
  }, [toasts]);

  // useEffect(() => {
  //   //Whenever all toasts are dismissed, return focus back to active element
  //   //that was in focus when the toast was triggered
  //   if (toasts.length === 0) {
  //     // eslint-disable-next-line
  //     console.log('AC BE', activeElementBeforeToast);
  //     activeElementBeforeToast?.focus();
  //   }
  //   // eslint-disable-next-line
  //   console.log('ACTIVATE');
  // }, [toasts]);

  return (
    <ToastContext.Provider value={{toasts, addToast, removeToast}}>
      <NxToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

NxToastProvider.propTypes = nxToastProviderPropTypes;
export default NxToastProvider;
