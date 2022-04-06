/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useContext, useEffect, useState } from 'react';
import classnames from 'classnames';

import { nxToastPropTypes, NxToastProps } from './types';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import ToastContext from './contexts';
import { toastTypeMap } from './toastTypeMapping';

const NxToast = (props: NxToastProps) => {
  const [animate, setAnimate] = useState(false);
  const { toastId, className, message, type, toastContainerRef, ...otherProps } = props,
      toastClass = toastTypeMap[type].class,
      toastIcon = toastTypeMap[type].icon,
      toastIconLabel = toastTypeMap[type].iconLabel,
      classes = classnames('nx-toast', className, toastClass, {'animate slide-in': animate}),
      toastContext = useContext(ToastContext),
      closeBtnRef = useRef<HTMLButtonElement>(null);

  //Fire effect to focus on the close button of the toast that is rendered
  useEffect(() => {
    const closeBtn = closeBtnRef.current;
    if (closeBtn) {
      closeBtn.focus();
    }
    setAnimate(true);
  }, []);

  //Effect to shift focus to the next toast's close button
  useEffect(() => {
    if (toastContainerRef) {
      const closeBtn = toastContainerRef.current?.querySelectorAll('.nx-btn--close')[0] as HTMLButtonElement;
      closeBtn.focus();
    }
  }, [toastContext?.toasts]);

  return (
    <div role="alert" { ...otherProps } className={classes} aria-atomic={true}>
      <NxFontAwesomeIcon aria-label={toastIconLabel} icon={toastIcon}/>
      <div className="nx-toast__content">{message}</div>
      <NxCloseButton ref={closeBtnRef} onClick={() => toastContext?.removeToast(toastId)} />
    </div>
  );
};

NxToast.propTypes = nxToastPropTypes;
export default NxToast;
