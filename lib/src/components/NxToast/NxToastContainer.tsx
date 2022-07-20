/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import NxToast from './NxToast';
import { NxToastContainerProps, nxToastContainerPropTypes } from './types';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { toasts } = props,
      toastContainerRef = useRef<HTMLDivElement | null>(null);

  const [domReady, setDomReady] = React.useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  //Create a portal to .nx-page-main if exists, if not, default to document.body
  const domNodeForPortal = document.querySelector('.nx-page-main') as HTMLElement || document.body;

  if (!domReady) {
    return null;
  }

  return createPortal(
    <div className="nx-toast__wrapper" ref={toastContainerRef}>
      <div className="nx-toast__container">
        {toasts.sort((a, b) => (a.toastId > b.toastId) ? -1 : 1).map(toast => (
          <NxToast key={toast.toastId}
                   toastId={toast.toastId}
                   type={toast.type}
                   message={toast.message}
                   toastContainerRef={toastContainerRef} />
        ))}
      </div>
    </div>,
    domNodeForPortal
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;
export default NxToastContainer;
