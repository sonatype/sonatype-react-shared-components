// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */
// import React, { useEffect, useRef, useContext } from 'react';
// import { createPortal } from 'react-dom';
// import NxToast from './NxToast';
// import { NxToastContainerProps, nxToastContainerPropTypes} from './types';

// import ToastContext from './contexts';
// import classNames from 'classnames';

// export { Props } from './types';

// const NxToastContainer = (props: NxToastContainerProps) => {
//   const { toasts } = props,
//       toastContainerRef = useRef<HTMLDivElement | null>(null),
//       toastContext = useContext(ToastContext),
//       classes = classNames('nx-toast__container', {'test': toasts.length});

//   const [domReady, setDomReady] = React.useState(false);

//   useEffect(() => {
//     setDomReady(true);
//   }, []);

//   //Effect to shift focus to the next toast's close button
//   //Dependency on the global toasts array
//   useEffect(() => {
//     if (toastContainerRef && toasts.length) {
//       //Gets the last close button of the child from the parent toast container div
//       const closeBtn =
//         toastContainerRef.current?.querySelectorAll('.nx-btn--close')[toasts.length - 1] as HTMLButtonElement;
//       closeBtn.focus();
//     }
//   }, [toastContext?.toasts]);

//   //Create a portal to .nx-page-main if exists, if not, default to document.body
//   const domNodeForPortal = document.querySelector('.nx-page-main') as HTMLElement || document.body;

//   if (!domReady) {
//     return null;
//   }

//   // //const style = {maxHeight: `${toasts.length * 74}px`};

//   // return createPortal(
//   //   <div className="nx-toast__wrapper" ref={toastContainerRef}>
//   //     <div className={classes}>
//   //       {toasts.map(toast => (
//   //         <NxToast key={toast.toastId}
//   //                  toastId={toast.toastId}
//   //                  type={toast.type}
//   //                  message={toast.message} />
//   //       ))}
//   //     </div>
//   //   </div>,
//   //   domNodeForPortal
//   // );

//   return (
//     <div className="nx-toast__wrapper" ref={toastContainerRef}>
//       {}
//     </div>,
//   );
// };

// NxToastContainer.propType = nxToastContainerPropTypes;
// export default NxToastContainer;
