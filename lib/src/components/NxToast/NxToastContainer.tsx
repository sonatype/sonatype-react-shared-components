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
import classNames from 'classnames';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { toasts } = props,
      className = classNames('nx-toast__container--wrapper'),
      toastContainerRef = useRef<HTMLDivElement | null>(null);

  const [domReady, setDomReady] = React.useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  const nxPageMainDOM = document.querySelector('.nx-page-main') as HTMLElement;

  if (!domReady) {
    return null;
  }

  return createPortal(
    <div className={className} ref={toastContainerRef}>
      <div className="nx-toast__container--content">
        {toasts.sort((a, b) => (a.toastId > b.toastId) ? -1 : 1).map(toast => (
          <NxToast key={toast.toastId}
                   toastId={toast.toastId}
                   type={toast.type}
                   message={toast.message}
                   toastContainerRef={toastContainerRef} />
        ))}
      </div>
    </div>,
    nxPageMainDOM
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;
export default NxToastContainer;
