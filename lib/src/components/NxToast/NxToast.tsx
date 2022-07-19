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
  const { toastId, className, message, type, toastContainerRef, ...otherProps } = props,
      toastClass = toastTypeMap[type].class,
      toastIcon = toastTypeMap[type].icon,
      toastIconLabel = toastTypeMap[type].iconLabel,
      [animate, setAnimate] = useState(false),
      classes = classnames('nx-toast', className, toastClass,
          {'slide-in': animate}
      ),
      toastContext = useContext(ToastContext),
      closeBtnRef = useRef<HTMLButtonElement>(null);

  //Fire effect to focus on the close button of the toast that is rendered
  useEffect(() => {
    const closeBtn = closeBtnRef.current;
    if (closeBtn) {
      closeBtn.focus();
    }

    //When component is mounted, add class "animate slide-in" to trigger animation
    setAnimate(true);
  }, []);

  //Effect to shift focus to the next toast's close button
  //Dependency on the global toasts array
  useEffect(() => {
    if (toastContainerRef) {
      //Gets the first close button of the child from the parent toast container div
      const closeBtn = toastContainerRef.current?.querySelectorAll('.nx-btn--close')[0] as HTMLButtonElement;
      closeBtn.focus();
    }
  }, [toastContext?.toasts]);

  const handleCloseClick = () => {
    setAnimate(false);
    //Wait for slide-out animation before removing toast from DOM
    setTimeout(() => {
      toastContext?.removeToast(toastId);
    }, 300);
  };

  return (
    <div role="alert" { ...otherProps } className={classes} aria-atomic={true}>
      <NxFontAwesomeIcon aria-label={toastIconLabel} icon={toastIcon}/>
      <div className="nx-toast__content">{message}</div>
      <NxCloseButton ref={closeBtnRef} onClick={handleCloseClick} className="nx-toast__close"/>
    </div>
  );
};

NxToast.propTypes = nxToastPropTypes;
export default NxToast;
