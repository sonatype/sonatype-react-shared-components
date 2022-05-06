/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import NxToast from './NxToast';
import { NxToastContainerProps, nxToastContainerPropTypes } from './types';
import classNames from 'classnames';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { toasts } = props,
      className = classNames('nx-toast__container'),
      toastContainerRef = useRef<HTMLDivElement | null>(null);

  return createPortal(
    <div className={className} ref={toastContainerRef}>
      {toasts.sort((a, b) => (a.toastId > b.toastId) ? -1 : 1).map(toast => (
        <NxToast key={toast.toastId}
                 toastId={toast.toastId}
                 type={toast.type}
                 message={toast.message}
                 toastContainerRef={toastContainerRef} />
      ))}
    </div>,
    document.body
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;
export default NxToastContainer;
