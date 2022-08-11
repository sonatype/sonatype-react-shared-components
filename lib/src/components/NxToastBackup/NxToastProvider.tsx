// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */

// import React, { useCallback, useEffect, useState, useRef } from 'react';
// import ToastContext from './contexts';
// import NxToastContainer from './NxToastContainer';
// import { NxToastProviderProps, nxToastProviderPropTypes, ToastAddModel, ToastModel } from './types';
// import { reject, propEq } from 'ramda';

// let id = 1;

// const NxToastProvider = (props: NxToastProviderProps) => {
//   const { children } = props;
//   const [toasts, setToasts] = useState<ToastModel[]>([]);
//   const activeElementNotToast = useRef<HTMLElement | null>(null);

//   // Keeps track of the last active element that's not a toast.
//   // When all the toasts are closed, focus returns to the last active non-toast
//   // element.
//   const adjustFocus = () => {
//     const currentFocusedElement = document.activeElement as HTMLElement;

//     if (!currentFocusedElement.classList.contains('nx-toast__close')) {
//       activeElementNotToast.current = currentFocusedElement;
//     }
//   };

//   useEffect(()=> {
//     document.addEventListener('focusin', adjustFocus);
//     return () => document.removeEventListener('focusin', adjustFocus);
//   }, []);

//   const addToast = useCallback((content: ToastAddModel) => {
//     id++;
//     setToasts((toasts) => [
//       { toastId: id, type: content.type, message: content.message },
//       ...toasts
//     ]);
//   }, [setToasts]);

//   const removeToast = useCallback((id: number) => {
//     const _toasts = reject(propEq('toastId', id), toasts);
//     setToasts(_toasts);

//     if (_toasts.length === 0) {
//       activeElementNotToast.current?.focus();
//     }
//   }, [toasts]);

//   // useEffect(() => {
//   //   //Whenever all toasts are dismissed, return focus back to active element
//   //   //that was in focus when the toast was triggered
//   //   if (toasts.length === 0) {
//   //     // eslint-disable-next-line
//   //     console.log('AC BE', activeElementBeforeToast);
//   //     activeElementBeforeToast?.focus();
//   //   }
//   //   // eslint-disable-next-line
//   //   console.log('ACTIVATE');
//   // }, [toasts]);

//   return (
//     <ToastContext.Provider value={{toasts, addToast, removeToast}}>
//       <NxToastContainer toasts={toasts} />
//       {children}
//     </ToastContext.Provider>
//   );
// };

// NxToastProvider.propTypes = nxToastProviderPropTypes;
// export default NxToastProvider;
